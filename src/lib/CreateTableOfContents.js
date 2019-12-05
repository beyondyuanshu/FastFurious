let Sketch = require('sketch');
let Artboard = require('sketch/dom').Artboard;
let Settings = require('sketch/settings');
let Group = require('sketch/dom').Group;
let Text = require('sketch/dom').Text;
let ShapePath = require('sketch/dom').ShapePath;
let UI = require('sketch/ui');

import { getArtboardsSorted } from './Utilities';

let SelectedDocument = require('sketch/dom').getSelectedDocument();

let BrowserWindow = null;
let WebContents = null;

let NoParentHeadingArtboard;
let InvalidHeadingOverride;

// 目录参数
let ContentWidth = 7000;
let ContentHeight = 4949;
let GroupSpacing = 700;
let GroupTopMargin = 500;
let GroupLeftAndRightMargin = 200;
let GroupCounts = 3;
let GroupWidth = (ContentWidth - GroupLeftAndRightMargin * 2 - GroupSpacing * 2) / GroupCounts;

// 全局变量，用于异步处理耗时操作
let Artboards = [];
let ArtboardIndex = 0;
let HeadingsMap = new Map();
let PageTitleMaster;
let BottomBannerMaster;
let LastHeadingSerial = '';

function addPgaeNumber(artboard, value) {
	let pageNumber = new Text({
		parent: artboard,
		text: '0',
		name: 'pageNumber',
		style: {
			borders: [],
			fontFamily: 'PingFang SC',
			fontSize: 88,
			fontWeight: 4,
			textColor: '#FFFFFF',
			alignment: 'right',
			verticalAlignment: 'center',
		},
		frame: {
			x: 6747,
			y: 88,
			width: 53,
			height: 123,
		},
	});
	pageNumber.text = value;
	Settings.setLayerSettingForKey(pageNumber, 'textType', 'pageNumber');
}

function addPageNumbers(contentsArtboards) {
	Sketch.find('Text, [name="{page}"]').forEach(layer => {
		layer.remove();
	});

	Sketch.find('Text', SelectedDocument.selectedPage).forEach(text => {
		if (Settings.layerSettingForKey(text, 'textType') === 'pageNumber') {
			text.remove();
		}
	});

	Artboards.forEach(artboard => {
		let instances = Sketch.find('SymbolInstance', artboard);
		for (let index = 0; index < instances.length; index++) {
			const instance = instances[index];
			if (instance.master.name === 'Title') {
				let titleOverride = instance.overrides[0];
				if (titleOverride) {
					let value = HeadingsMap.get(titleOverride.value);
					if (value > 2) {
						value += contentsArtboards.length;
					}
					addPgaeNumber(artboard, value.toString());
					break;
				}
			}
		}
	});

	let index = 3;
	contentsArtboards.forEach(artboard => {
		addPgaeNumber(artboard, index.toString());
		++index;
	});

	if (contentsArtboards.length > 0) {
		SelectedDocument.selectedLayers.forEach(layer => {
			layer.selected = false;
		});
		contentsArtboards[0].selected = true;
		SelectedDocument.centerOnLayer(contentsArtboards[0]);
	}

	BrowserWindow.close();
	Sketch.UI.message('Successfully! 🙌');
}

function createHeading(artboard, originalX, originalY, headingLevel, headingText, pageNumber) {
	let groupHeight;

	// 序号及标题
	let serialAndContentX;
	let serialAndContentHeight;
	let serialAndContentFontSize;
	let serialAndContentFontWeight;
	let serialAndContentFontColor;
	if (headingLevel === 1) {
		serialAndContentX = 0;
		serialAndContentHeight = 90;
		serialAndContentFontSize = 64;
		serialAndContentFontWeight = 6; // Medium
		serialAndContentFontColor = '#333333';
		groupHeight = serialAndContentHeight;
	} else if (headingLevel === 2) {
		serialAndContentX = 80;
		serialAndContentHeight = 78;
		serialAndContentFontSize = 56;
		serialAndContentFontWeight = 4; // Regular
		serialAndContentFontColor = '#333333';
		groupHeight = serialAndContentHeight;
	} else {
		serialAndContentX = 160;
		serialAndContentHeight = 67;
		serialAndContentFontSize = 48;
		serialAndContentFontWeight = 4; // Regular
		serialAndContentFontColor = '#666666';
		groupHeight = serialAndContentHeight;
	}
	let serialAndContent = new Text({
		text: headingText.trim(), // NOTE: list text first! text maybe change the name
		name: 'serialAndContent',
		style: {
			borders: [],
			fontFamily: 'PingFang SC',
			fontSize: serialAndContentFontSize,
			fontWeight: serialAndContentFontWeight,
			textColor: serialAndContentFontColor,
			alignment: 'left',
			verticalAlignment: 'center',
		},
		frame: {
			x: serialAndContentX,
			y: (groupHeight - serialAndContentHeight) / 2, // 无法固定高度，用此方法代替
			height: groupHeight,
		},
	});

	// 连接线
	let separator = new ShapePath({
		name: 'separator',
		shapeType: ShapePath.ShapeType.Custom,
		style: {
			borders: [
				{
					thickness: 3,
				},
			],
			borderOptions: {
				dashPattern: [20, 5, 20, 5],
			},
		},
		frame: {
			x: serialAndContent.frame.x + serialAndContent.frame.width + 100,
			y: 0,
			width: GroupWidth - (serialAndContent.frame.x + serialAndContent.frame.width + 100) - 100,
			height: groupHeight,
		},
		points: [
			{
				point: {
					x: 0,
					y: 0.5,
				},
			},
			{
				point: {
					x: 1,
					y: 0.5,
				},
			},
		],
	});

	// 页码
	let pageNumberFontSize;
	if (headingLevel === 1) {
		pageNumberFontSize = 56;
	} else if (headingLevel === 2) {
		pageNumberFontSize = 56;
	} else if (headingLevel === 3) {
		pageNumberFontSize = 56;
	}
	let page = new Text({
		text: pageNumber.toString(),
		name: 'pageNumber',
		style: {
			borders: [],
			fontFamily: 'PingFang SC',
			fontSize: pageNumberFontSize,
			fontWeight: 4, // Regular
			textColor: '#333333',
			alignment: 'right',
			verticalAlignment: 'center',
		},
		frame: {
			x: GroupWidth - 100,
			y: (groupHeight - 78) / 2,
			width: 100,
			height: groupHeight,
		},
	});

	// 占位，用于设定 Group 的高度
	let placeholder = new ShapePath({
		name: 'placeholder',
		shapeType: ShapePath.ShapeType.Custom,
		frame: {
			x: 0,
			y: 0,
			width: 1,
			height: groupHeight,
		},
	});

	let group = new Group({
		parent: artboard,
		name: headingText,
		frame: {
			x: originalX,
			y: originalY,
			width: GroupWidth,
			height: groupHeight,
		},
	});
	group.adjustToFit();
	group.layers = [placeholder, serialAndContent, separator, page];

	return group;
}

function checkHeadingSerial(lastSerial, currentSerial) {
	let hasError = false;
	if (lastSerial.length === 0) {
		if (currentSerial !== '1.') {
			hasError = true;
		}
	} else if (lastSerial.endsWith('.')) {
		let tempLastSerial = lastSerial;
		if (lastSerial.split('.')[0] === '1' && currentSerial.split('.')[0] === '3') {
			tempLastSerial = '2.';
		}
		if (currentSerial !== tempLastSerial + '1' && currentSerial !== parseInt(tempLastSerial) + 1 + '.') {
			hasError = true;
		}
	} else {
		let array = lastSerial.split('.');

		let newArray = array;
		let secondLastNumber;
		let serialLength = array.length;
		if (serialLength > 2) {
			secondLastNumber = newArray[newArray.length - 2];
			newArray.splice(newArray.length - 1, 2);
		}
		let firstNumber = array[0];
		let lastNumber = array[array.length - 1];
		array.splice(array.length - 1, 1);

		if (serialLength === 2) {
			if (
				currentSerial !== lastSerial + '.1' &&
				currentSerial !== firstNumber + '.' + (parseInt(lastNumber) + 1) &&
				currentSerial !== parseInt(firstNumber) + 1 + '.'
			) {
				hasError = true;
			}
		} else {
			if (
				currentSerial !== lastSerial + '.1' &&
				currentSerial !== array.join('.') + (parseInt(lastNumber) + 1) &&
				currentSerial !== newArray.join('.') + (parseInt(secondLastNumber) + 1)
			) {
				hasError = true;
			}
		}
	}

	return !hasError;
}

function focusArtboard(artboard) {
	SelectedDocument.selectedLayers.forEach(layer => {
		layer.selected = false;
	});
	artboard.parent.selected = true;
	artboard.selected = true;
	SelectedDocument.centerOnLayer(artboard);
}

function updateContentsPage(contentsArtboards, headingsMap) {
	// set contents page heading
	let contentsTitles = [];
	for (let index = 0; index < contentsArtboards.length; index++) {
		let artboard = contentsArtboards[index];
		let value;
		if (index === 0) {
			if (contentsArtboards.length === 1) {
				value = '2. 目录';
			} else {
				value = '2. 目录01';
			}
		} else {
			let number;
			if (index < 10) {
				number = '0' + index;
			} else {
				number = index;
			}
			value = '2.' + index.toString() + ' 目录' + number;
		}
		artboard.layers[0].overrides[0].value = value;
		contentsTitles.push(value);
	}

	// insert contents page in TOC
	let newHeadingMap = new Map();
	let frontContentsPages = 0;
	let hasAddContents = false;
	headingsMap.forEach((pageNumber, headingText) => {
		if (!hasAddContents && parseInt(headingText.split('.')[0]) > 2) {
			hasAddContents = true;
			for (let index = 0; index < contentsTitles.length; index++) {
				const title = contentsTitles[index];
				newHeadingMap.set(title, frontContentsPages + index + 1);
			}
		}

		frontContentsPages += pageNumber;
		newHeadingMap.set(headingText, pageNumber);
	});

	// reset TOC page number
	newHeadingMap.forEach((pageNumber, headingText) => {
		if (parseInt(headingText.split('.')[0]) > 2) {
			newHeadingMap.set(headingText, pageNumber + contentsArtboards.length);
		}
	});

	return newHeadingMap;
}

function addHeading(page, headingsMap) {
	// delete contents artboard
	page.layers.forEach(artboard => {
		if (Settings.layerSettingForKey(artboard, 'layerType') === 'TOC') {
			artboard.remove();
		}
	});

	let artboard;
	let contentsArtboards = [];
	let contentsPageIndex = 0;
	let lastLevel = 1;
	let column = 0;
	let originalY = GroupTopMargin;
	let needAddNewArtboard = true;
	for (let [headingText, pageNumber] of headingsMap) {
		// create artboard
		if (needAddNewArtboard) {
			artboard = new Artboard({
				parent: page,
				name: 'Contents ' + (contentsPageIndex + 1).toString(),
				frame: {
					x: 0 + (ContentWidth + 50) * contentsPageIndex,
					y: 0,
					width: ContentWidth,
					height: ContentHeight,
				},
				background: {
					enabled: true,
					color: '#FBFBFB',
				},
			});
			Settings.setLayerSettingForKey(artboard, 'layerType', 'TOC');
			contentsArtboards.push(artboard);

			let topBanner = PageTitleMaster.createNewInstance();
			let bottomBanner = BottomBannerMaster[0].createNewInstance();
			bottomBanner.frame.y = ContentHeight - bottomBanner.frame.height;
			topBanner.parent = artboard;
			bottomBanner.parent = artboard;

			contentsPageIndex += 1;
		}

		// check level
		let currentLevel;
		let serialText = headingText.split(' ')[0];
		if (serialText.endsWith('.')) {
			currentLevel = 1;
		} else {
			currentLevel = serialText.split('.').length;
		}

		// create headings
		let originalX = GroupLeftAndRightMargin + GroupWidth * column + GroupSpacing * column;
		if (!needAddNewArtboard) {
			if (currentLevel === 1) {
				originalY += 100;
			} else {
				originalY += 46;
			}
		}
		lastLevel = currentLevel;
		let group = createHeading(artboard, originalX, originalY, currentLevel, headingText, pageNumber);

		if (group.frame.y > 4000) {
			column += 1;
			originalY = GroupTopMargin;
		} else {
			originalY += group.frame.height;
		}

		if (column > 2) {
			needAddNewArtboard = true;
			column = 0;
		} else {
			needAddNewArtboard = false;
		}
	}

	return contentsArtboards;
}

function checkHeading(artboard) {
	// 过滤掉目录页
	let type = Settings.layerSettingForKey(artboard, 'layerType');
	// 遍历画板所有层，找出标题层
	let layers = artboard.layers;
	for (let index = 0; index < layers.length; index++) {
		const layer = layers[index];

		if (layer.type !== 'SymbolInstance') continue;

		if (layer.master.name === 'Title') {
			let override = layer.overrides[0];
			if (override) {
				PageTitleMaster = layer.master;

				// 优化空格
				let value = override.value;
				value = value.trim();
				value = value.replace(/ {1,}/, ' ');
				override.value = value;

				// 检查是否有重复
				override = layer.overrides[0]; // Fix: ?
				if (HeadingsMap.has(override.value)) {
					// 标题有重复，提示用户修正
					console.log('same heading:', override.value);
					focusArtboard(artboard);
					InvalidHeadingOverride = override;
					WebContents.executeJavaScript(`showCreateTocHint('标题有重复', ${JSON.stringify(override.value)})`);

					return false;
				}

				// 匹配六级标题：（1.）（1.1）（1.1.1）...
				let pattern = /(^[1-9][0-9]{0,}\. )|(^[1-9][0-9]{0,}((\.[1-9][0-9]{0,}){1,5}) )/;
				let regex = new RegExp(pattern);
				if (override.value.length && !regex.test(override.value)) {
					// 标题格式不正确，提示用户修正
					console.log('invalid format heading:', override.value);
					focusArtboard(artboard);
					InvalidHeadingOverride = override;
					WebContents.executeJavaScript(
						`showCreateTocHint('无效的标题，正确格式示例:【1. XXX】 或者 【1.1 XXX】', ${JSON.stringify(
							override.value
						)})`
					);

					return false;
				} else {
					// 标题格式正确，判断是否需要提示指定父级标题
					let currentSerial = override.value.split(' ')[0];
					if (currentSerial.endsWith('1') && !currentSerial.startsWith(LastHeadingSerial)) {
						let parentHeading = Settings.layerSettingForKey(artboard, 'parentHeading');
						if (!parentHeading) {
							console.log('should add parent heading:', artboard.name);
							focusArtboard(artboard);
							NoParentHeadingArtboard = artboard;
							WebContents.executeJavaScript(
								`showCreateTocHint('需要添加当前标题的父标题，当前标题为:' + ${JSON.stringify(
									override.value
								)})`
							);

							return false;
						} else if (!parentHeading.startsWith(currentSerial.slice(0, -2))) {
							let serial = parentHeading.split(' ')[0];
							if (!checkHeadingSerial(LastHeadingSerial, serial) || currentSerial !== serial + '.1') {
								console.log('invalid sort parent heading:', artboard.name);
								focusArtboard(artboard);
								NoParentHeadingArtboard = artboard;
								WebContents.executeJavaScript(
									`showCreateTocHint('父级标题序号不正确，请更正。上一标题序号为:' + ${JSON.stringify(
										LastHeadingSerial
									)}, ${JSON.stringify(parentHeading)})`
								);

								return false;
							}
						} else {
							LastHeadingSerial = parentHeading.split(' ')[0];
							HeadingsMap.set(parentHeading, ArtboardIndex + 1);
						}
					}

					// 检查标题序号
					if (!checkHeadingSerial(LastHeadingSerial, currentSerial)) {
						console.log('invalid sort heading:', override.value);
						focusArtboard(artboard);
						InvalidHeadingOverride = override;
						WebContents.executeJavaScript(
							`showCreateTocHint('当前标题序号不正确，请更正。上一标题序号为:' + ${JSON.stringify(
								LastHeadingSerial
							)}, ${JSON.stringify(override.value)})`
						);

						return false;
					}

					HeadingsMap.set(override.value, ArtboardIndex + 1);
					LastHeadingSerial = currentSerial;
				}

				break;
			}
		}
	}

	// 判断最后一个
	if (ArtboardIndex < Artboards.length - 1) {
		++ArtboardIndex;
		setTimeout(checkHeading.bind(null, Artboards[ArtboardIndex]), 5);
	} else {
		if (HeadingsMap.size === 0) {
			console.log('no headings');
			UI.alert('Error', '找不到目录页，请检查标题设置是否正确');
			WebContents.executeJavaScript(`showCreateTocCreate()`);
			return;
		}

		// add headings
		let contentsArtboards = addHeading(SelectedDocument.selectedPage, HeadingsMap);
		let newHeadingsMap = updateContentsPage(contentsArtboards, HeadingsMap);

		// add headings again
		let newContentsArtboards = addHeading(SelectedDocument.selectedPage, newHeadingsMap);
		newHeadingsMap = updateContentsPage(newContentsArtboards, newHeadingsMap);

		if (contentsArtboards.length !== newContentsArtboards.length) {
			console.log("new content artboards'size greater than the old one.");
			newContentsArtboards = addHeading(SelectedDocument.selectedPage, newHeadingsMap);
			newHeadingsMap = updateContentsPage(newContentsArtboards, newHeadingsMap);
		}

		// 添加页码
		setTimeout(addPageNumbers.bind(null, newContentsArtboards), 5);
	}
}

function checkMasters() {
	BottomBannerMaster = Sketch.find('SymbolMaster, [name="页尾"]');
	if (!BottomBannerMaster.length) {
		console.log('can not found the banner');
		UI.alert('Error', '请添加生成目录所需要组件:页尾');
		WebContents.executeJavaScript(`showCreateTocCreate()`);
		return false;
	}

	return true;
}

function checkSelectedPage() {
	let page = SelectedDocument.selectedPage;
	if (!page) {
		UI.alert('Error', '请选中“文档页”');
		return false;
	} else if (page.isSymbolsPage()) {
		UI.alert('Error', '请选中“文档页”，当前选中的是“组件页”');
		return false;
	} else if (Settings.layerSettingForKey(page, 'layerType') === 'TOC') {
		UI.alert('Error', '请选中“文档页”，当前选中的是“目录页”');
		return false;
	}

	return true;
}

export function createTableOfContents(artboardSort, contents, win, isContinue = false) {
	if (!isContinue) {
		BrowserWindow = win;
		WebContents = contents;

		if (!checkSelectedPage()) {
			WebContents.executeJavaScript(`showCreateTocCreate()`);
			return;
		}

		if (!checkMasters()) {
			WebContents.executeJavaScript(`showCreateTocCreate()`);
			return;
		}

		// 得到排序后的画板
		Artboards = getArtboardsSorted(SelectedDocument.selectedPage, artboardSort);
		if (Artboards.length === 0) {
			console.log('no artboards');
			UI.alert('Error', '当前文档为空，无需要生成目录');
			WebContents.executeJavaScript(`showCreateTocCreate()`);
			return;
		}

		// 过滤掉 TOC
		for (let index = 0; index < Artboards.length; index++) {
			let type = Settings.layerSettingForKey(Artboards[index], 'layerType');
			if (type === 'TOC') {
				Artboards.splice(index, 1);
				break;
			}
		}

		// 从画板中检测出标题
		HeadingsMap.clear();
		ArtboardIndex = 0;
		LastHeadingSerial = '';
		setTimeout(checkHeading.bind(null, Artboards[0]), 5);
	} else {
		setTimeout(checkHeading.bind(null, Artboards[ArtboardIndex]), 5);
	}
}

export function setParentHeadingOrOverrideValue(value) {
	if (InvalidHeadingOverride) {
		InvalidHeadingOverride.value = value;
		InvalidHeadingOverride = undefined;
	}
	if (NoParentHeadingArtboard) {
		Settings.setLayerSettingForKey(NoParentHeadingArtboard, 'parentHeading', value);
		NoParentHeadingArtboard = undefined;
	}
}

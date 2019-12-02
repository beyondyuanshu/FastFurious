import { getArtboardsSorted } from './Utilities';
import { ArtboardSortEnum } from './Constants';

let Sketch = require('sketch');
let Page = require('sketch/dom').Page;
let Artboard = require('sketch/dom').Artboard;
let Group = require('sketch/dom').Group;
let Text = require('sketch/dom').Text;
let ShapePath = require('sketch/dom').ShapePath;
let Settings = require('sketch/settings');
let UI = require('sketch/ui');

let document = require('sketch/dom').getSelectedDocument();

let browserWindow = null;
let webContents = null;

let headingsMap = new Map();
let noParentHeadingArtboard;
let invalidHeadingOverride;

let ContentWidth = 7000;
let ContentHeight = 4949;
let GroupSpacing = 700;
let GroupTopMargin = 500;
let GroupLeftAndRightMargin = 200;
let GroupCounts = 3;
let GroupWidth = (ContentWidth - GroupLeftAndRightMargin * 2 - GroupSpacing * 2) / GroupCounts;

function checkArtboardSort(artboardSort) {
	if (artboardSort === 'Top to Bottom') {
		return ArtboardSortEnum.Top2BottomByLayerList;
	} else if (artboardSort === 'Bottom to Top') {
		return ArtboardSortEnum.Bottom2TopByLayerList;
	} else if (artboardSort === 'Left to Right') {
		return ArtboardSortEnum.Left2RightByArtboard;
	} else if (artboardSort === 'Right to Left') {
		return ArtboardSortEnum.Right2LeftByArtboard;
	} else if (artboardSort === 'Top to Bottom 1') {
		return ArtboardSortEnum.Top2BottomByArtboard;
	}
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
		text: headingText, // NOTE: list text first! text maybe change the name
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

export function setParentHeadingOrOverrideValue(value) {
	if (invalidHeadingOverride) {
		invalidHeadingOverride.value = value;
		invalidHeadingOverride = undefined;
	}
	if (noParentHeadingArtboard) {
		Settings.setLayerSettingForKey(noParentHeadingArtboard, 'parentHeading', value);
		noParentHeadingArtboard = undefined;
	}
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

		let newArray;
		let secondLastNumber;
		let serialLength = array.length;
		if (serialLength > 2) {
			newArray = array;
			secondLastNumber = newArray[newArray.length - 2];
			newArray.splice(newArray.length - 1, 2);
		}

		let lastNumber = array[array.length - 1];
		array.splice(array.length - 1, 1);
		if (
			currentSerial !== lastSerial + '.1' &&
			currentSerial !== array.join('.') + (parseInt(lastNumber) + 1) &&
			(serialLength > 2 && currentSerial !== newArray.join('.') + (parseInt(secondLastNumber) + 1))
		) {
			hasError = true;
		}
	}

	return !hasError;
}

function checkHeadings(artboards) {
	let artboardIndex = 0;
	let lastSerial = '';

	// 遍历所有画板，找出所有标题
	for (let index = 0; index < artboards.length; index++) {
		++artboardIndex;

		const artboard = artboards[index];
		let type = Settings.layerSettingForKey(artboard, 'layerType');
		if (type === 'TOC') {
			continue;
		}

		// 遍历画板所有层，找出标题层
		for (let index = 0; index < artboard.layers.length; index++) {
			const layer = artboard.layers[index];
			if (layer.type === 'SymbolInstance' && layer.master.name === 'PageTitle') {
				// 遍历标题所有层，找出标题内容
				for (let index = 0; index < layer.overrides.length; index++) {
					const override = layer.overrides[index];

					// 检查是否有重复
					if (headingsMap.has(override.value)) {
						// 标题格式不正确，提示用户修正
						console.log('have the same heading:', override.value);
						invalidHeadingOverride = override;
						webContents.executeJavaScript(
							`showCreateTocHint('标题有重复', ${JSON.stringify(override.value)})`
						);
						return false;
					}

					if (override.affectedLayer.name === 'title') {
						// 匹配六级标题：（1.）（1.1）（1.1.1）...
						let pattern = /(^[1-9][0-9]{0,}\. )|(^[1-9][0-9]{0,}((\.[1-9][0-9]{0,}){1,5}) )/;
						let regex = new RegExp(pattern);
						if (override.value.length && !regex.test(override.value)) {
							// 标题格式不正确，提示用户修正
							console.log('invalid format heading:', override.value);
							invalidHeadingOverride = override;
							webContents.executeJavaScript(
								`showCreateTocHint('无效的标题，正确格式示例:【1. XXX】 或者 【1.1 XXX】', ${JSON.stringify(
									override.value
								)})`
							);
							return false;
						} else {
							// 标题格式正确，判断是否需要提示指定父级标题
							let currentSerial = override.value.split(' ')[0];
							if (currentSerial.endsWith('1') && !currentSerial.startsWith(lastSerial)) {
								let parentHeading = Settings.layerSettingForKey(artboard, 'parentHeading');
								console.log(currentSerial, parentHeading);
								if (!parentHeading) {
									console.log('should add parent heading for this layer:', artboard.name);
									document.selectedLayers.forEach(layer => {
										layer.selected = false;
									});
									artboard.parent.selected = true;
									artboard.selected = true;
									document.centerOnLayer(artboard);

									noParentHeadingArtboard = artboard;
									webContents.executeJavaScript(
										`showCreateTocHint('需要添加当前标题的父标题，当前标题为:' + ${JSON.stringify(
											override.value
										)})`
									);

									return false;
								} else if (!parentHeading.startsWith(currentSerial.slice(0, -2))) {
									let serial = parentHeading.split(' ')[0];
									if (!checkHeadingSerial(lastSerial, serial) || currentSerial !== serial + '.1') {
										document.selectedLayers.forEach(layer => {
											layer.selected = false;
										});
										artboard.parent.selected = true;
										artboard.selected = true;
										document.centerOnLayer(artboard);

										noParentHeadingArtboard = artboard;
										webContents.executeJavaScript(
											`showCreateTocHint('父级标题序号不正确，请更正。上一标题序号为:' + ${JSON.stringify(
												lastSerial
											)}, ${JSON.stringify(parentHeading)})`
										);

										return false;
									}
								} else {
									lastSerial = parentHeading.split(' ')[0];
									headingsMap.set(parentHeading, artboardIndex);
								}
							}

							// 检查标题序号
							if (!checkHeadingSerial(lastSerial, currentSerial)) {
								document.selectedLayers.forEach(layer => {
									layer.selected = false;
								});
								artboard.parent.selected = true;
								artboard.selected = true;
								document.centerOnLayer(artboard);

								invalidHeadingOverride = override;
								webContents.executeJavaScript(
									`showCreateTocHint('当前标题序号不正确，请更正。上一标题序号为:' + ${JSON.stringify(
										lastSerial
									)}, ${JSON.stringify(override.value)})`
								);

								return false;
							}

							headingsMap.set(override.value, artboardIndex);
							lastSerial = currentSerial;
						}

						break;
					}
				}

				break;
			}
		}
	}

	return true;
}

function addHeading(page, headingsMap, topBannerMaster, bottomBannerMaster) {
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
			});
			Settings.setLayerSettingForKey(artboard, 'layerType', 'TOC');
			contentsArtboards.push(artboard);

			let topBanner = topBannerMaster[0].createNewInstance();
			let bottomBanner = bottomBannerMaster[0].createNewInstance();
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
			if (lastLevel === 1 && currentLevel === 1) {
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

function updateContentsPage(contentsArtboards, headingsMap) {
	// set contents page title
	let contentsTitles = [];
	for (let index = 0; index < contentsArtboards.length; index++) {
		const artboard = contentsArtboards[index];
		let override = artboard.layers[0].overrides[1];
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
		override.value = value; // Fix: 改完不会立马生效？
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

export function createTableOfContents(artboardSort, contents, win) {
	browserWindow = win;
	webContents = contents;

	// add banner
	let pageTitleMaster = Sketch.find('SymbolMaster, [name="PageTitle"]');
	let topBannerMaster = Sketch.find('SymbolMaster, [name="TocTopBanner"]');
	let bottomBannerMaster = Sketch.find('SymbolMaster, [name="TocBottomBanner"]');
	if (!pageTitleMaster.length || !topBannerMaster.length || !bottomBannerMaster.length) {
		console.log('can not found the banner');
		UI.alert('Error', '请添加生成目录所需要模板: PageTitle、TocTopBanner 、TocBottomBanner');
		webContents.executeJavaScript(`showCreateTocCreate()`);
		return;
	}

	// get artboards
	headingsMap.clear();
	let artboards = getArtboardsSorted(document.selectedPage, checkArtboardSort(artboardSort));
	if (artboards.length === 0) {
		console.log('no artboards');
		UI.alert('Error', '当前文档为空，无需要生成目录');
		webContents.executeJavaScript(`showCreateTocCreate()`);
		return;
	}

	if (!checkHeadings(artboards)) {
		console.log('check headings error');
		return;
	}
	if (headingsMap.size === 0) {
		console.log('no headings');
		UI.alert('Error', '找不到目录页，请检查标题设置是否正确');
		webContents.executeJavaScript(`showCreateTocCreate()`);
		return;
	}

	// add headings
	let contentsArtboards = addHeading(document.selectedPage, headingsMap, topBannerMaster, bottomBannerMaster);
	let newHeadingsMap = updateContentsPage(contentsArtboards, headingsMap);

	// add headings again
	let newContentsArtboards = addHeading(document.selectedPage, newHeadingsMap, topBannerMaster, bottomBannerMaster);
	newHeadingsMap = updateContentsPage(newContentsArtboards, newHeadingsMap);

	if (contentsArtboards.length !== newContentsArtboards.length) {
		console.log("new content artboards'size greater than the old one.");
		newContentsArtboards = addHeading(document.selectedPage, newHeadingsMap, topBannerMaster, bottomBannerMaster);
		newHeadingsMap = updateContentsPage(newContentsArtboards, newHeadingsMap);
	}

	if (newContentsArtboards.length > 0) {
		document.selectedLayers.forEach(layer => {
			layer.selected = false;
		});
		newContentsArtboards[0].selected = true;
		document.centerOnLayer(newContentsArtboards[0]);
	}

	win.close();
	Sketch.UI.message('Create Successfully! 🙌');
}

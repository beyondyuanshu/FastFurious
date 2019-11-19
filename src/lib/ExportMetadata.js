const Sketch = require('sketch');
const fs = require('@skpm/fs');
const { exec } = require('@skpm/child_process');

let document = require('sketch/dom').getSelectedDocument();

let exportDir = '';
let browserWindow = null;
let webContents = null;

let needParsePages = [];
let needParsePagesIndex = 0;
let needParseCount = 0;
let hasParseCount = 0;
let resultJsons = [];

const exportLayerJsonOptions = { formats: 'json', output: false };

let needParseLayers = [
	'',
	'artboard',
	'text',
	'bitmap',
	'group',
	'shapeGroup',
	'symbolInstance',
	'rectangle',
	'oval',
	'shapePath',
	'triangle',
	'star',
	'polygon',
	'slice',
	'MSImmutableHotspotLayer',
];

function parsePage(json) {
	return {
		objectID: json.do_objectID,
		type: 'page',
		name: json.name,
		rect: {
			x: json.frame.x,
			y: json.frame.y,
			width: json.frame.width,
			height: json.frame.height,
		},
		rotation: json.rotation,
		layers: json.layers,
	};
}

function parseArtboard(json) {
	return {
		objectID: json.do_objectID,
		type: json._class,
		name: json.name,
		rect: {
			x: json.frame.x,
			y: json.frame.y,
			width: json.frame.width,
			height: json.frame.height,
		},
		rotation: json.rotation,
		layers: json.layers,
	};
}

function parseText(json) {
	return {
		objectID: json.do_objectID,
		type: json._class,
		name: json.name,
		rect: {
			x: json.frame.x,
			y: json.frame.y,
			width: json.frame.width,
			height: json.frame.height,
		},
		rotation: json.rotation,
		content: json.attributedString.string,
		fontFamily: json.style.textStyle.encodedAttributes.MSAttributedStringFontAttribute.attributes.name,
		fontSize: json.style.textStyle.encodedAttributes.MSAttributedStringFontAttribute.attributes.size,
		fontColor: {
			r: json.style.textStyle.encodedAttributes.MSAttributedStringColorAttribute.red,
			g: json.style.textStyle.encodedAttributes.MSAttributedStringColorAttribute.green,
			b: json.style.textStyle.encodedAttributes.MSAttributedStringColorAttribute.blue,
			a: json.style.textStyle.encodedAttributes.MSAttributedStringColorAttribute.alpha,
		},
	};
}

function parseImage(json) {
	return {
		objectID: json.do_objectID,
		type: json._class,
		name: json.name,
		rect: {
			x: json.frame.x,
			y: json.frame.y,
			width: json.frame.width,
			height: json.frame.height,
		},
		rotation: json.rotation,
		export: 'images/' + json.do_objectID.toLowerCase() + '.png',
	};
}

function parseGroup(json) {
	return {
		objectID: json.do_objectID,
		type: json._class,
		name: json.name,
		rect: {
			x: json.frame.x,
			y: json.frame.y,
			width: json.frame.width,
			height: json.frame.height,
		},
		rotation: json.rotation,
		layers: json.layers,
	};
}

function parseSymbol(json) {
	let overrideValues = json.overrideValues;
	let overrideValuesModify = [];
	overrideValues.forEach(overrideValue => {
		let type;
		let json = JSON.parse(JSON.stringify(overrideValue), function(key, value) {
			if (key === '_class') {
				return undefined;
			} else if (key === 'overrideName') {
				let values = value.split('_');
				let last = values.pop();
				type = last;
				return values.join();
			} else if (key === 'value') {
				if (typeof value === 'object') {
					return value._ref;
				} else {
					return value;
				}
			} else {
				return value;
			}
		});

		if (type === 'image') {
			// if (!fs.existsSync(dir + '/' + json.value))
			// 	fs.renameSync(dir + '/unzip/' + json.value, dir + '/' + json.value);
		} else if (type === 'symbolID') {
			// TODO: how to handle ?
			// var layer = document.getLayerWithID(json.value)
			// if (layer) {
			// 	console.log(layer.name)
			// }
			// var symbolMaster = document.getSymbolMasterWithID(json.value)
			// console.log(json.value)
			// if (symbolMaster) {
			// 	console.log(symbolMaster.name)
			// }
		}

		overrideValuesModify.push({
			type: type,
			name: json.overrideName,
			value: json.value,
		});
	});

	return {
		objectID: json.do_objectID,
		symbolID: json.symbolID,
		type: json._class,
		name: json.name,
		rect: {
			x: json.frame.x,
			y: json.frame.y,
			width: json.frame.width,
			height: json.frame.height,
		},
		rotation: json.rotation,
		export: 'images/' + json.do_objectID.toLowerCase() + '.png',
		overrideValues: overrideValuesModify,
	};
}

function parseCommon(json) {
	return {
		objectID: json.do_objectID,
		type: json._class,
		name: json.name,
		rect: {
			x: json.frame.x,
			y: json.frame.y,
			width: json.frame.width,
			height: json.frame.height,
		},
		rotation: json.rotation,
		export: 'images/' + json.do_objectID.toLowerCase() + '.png',
	};
}

function exportLayer(layer) {
	const options = {
		scales: '1',
		formats: 'png',
		output: exportDir + '/images',
		'use-id-for-name': true,
		overwriting: true,
	};
	Sketch.export(layer, options);
	fs.renameSync(exportDir + '/images/' + layer.id + '.png', exportDir + '/images/' + layer.id.toLowerCase() + '.png');
}

function calcNeedParseCount(page) {
	const sketchJSON = Sketch.export(page, exportLayerJsonOptions);
	JSON.parse(JSON.stringify(sketchJSON), function(key, value) {
		if (needParseLayers.includes(value._class)) needParseCount += 1;
		return value;
	});

	needParsePagesIndex += 1;
	if (needParsePagesIndex < needParsePages.length) {
		setTimeout(calcNeedParseCount.bind(null, needParsePages[needParsePagesIndex]), 5);
	} else {
		needParsePagesIndex = 0;
		webContents.executeJavaScript(`exportProgress(0)`);
		webContents.executeJavaScript(`exportMessage('Exporting ${needParsePages[0].name}')`);
		const sketchJSON = Sketch.export(needParsePages[0], exportLayerJsonOptions);
		setTimeout(handleSketchJSON.bind(null, sketchJSON), 5);
	}
}

function handleSketchJSON(sketchJSON) {
	// parse
	let hasParse = false;
	let hasAllParse = false;
	let json = JSON.parse(JSON.stringify(sketchJSON), function(key, value) {
		if (!hasParse) {
			// empty key means page layer, number key means layers, handle this two parts only
			if (key === '') {
				hasParse = true;
				hasAllParse = true;
				return parsePage(value);
			} else if (!isNaN(key)) {
				if (value._class === 'artboard') {
					hasParse = true;
					return parseArtboard(value);
				} else if (value._class === 'text') {
					hasParse = true;
					return parseText(value);
				} else if (value._class === 'bitmap') {
					hasParse = true;
					exportLayer(document.getLayerWithID(value.do_objectID));
					return parseImage(value);
				} else if (value._class === 'group' || value._class === 'shapeGroup') {
					hasParse = true;
					return parseGroup(value);
				} else if (value._class === 'symbolInstance') {
					hasParse = true;
					exportLayer(document.getLayerWithID(value.do_objectID));
					return parseSymbol(value);
				} else if (
					value._class === 'rectangle' ||
					value._class === 'oval' ||
					value._class === 'shapePath' ||
					value._class === 'triangle' ||
					value._class === 'star' ||
					value._class === 'polygon' ||
					value._class === 'slice' ||
					value._class === 'MSImmutableHotspotLayer'
				) {
					hasParse = true;
					exportLayer(document.getLayerWithID(value.do_objectID));
					return parseCommon(value);
				} else {
					return value;
				}
			} else {
				return value;
			}
		} else {
			return value;
		}
	});

	if (hasAllParse) {
		resultJsons.push(json);

		needParsePagesIndex += 1;
		if (needParsePagesIndex < needParsePages.length) {
			webContents.executeJavaScript(`exportMessage('Exporting ${needParsePages[needParsePagesIndex].name}')`);
			const sketchJSON = Sketch.export(needParsePages[needParsePagesIndex], exportLayerJsonOptions);
			handleSketchJSON(sketchJSON);
		} else {
			// output metadata file
			webContents.executeJavaScript(`exportMessage('Creating metadata file)`);
			fs.writeFileSync(
				exportDir + '/metadata.json',
				JSON.stringify({
					pages: resultJsons,
				})
			);

			// clear unzip
			let unzipPath = exportDir + '/unzip';
			if (fs.existsSync(unzipPath)) {
				fs.rmdirSync(unzipPath, { recursive: true });
			}

			Sketch.UI.message('Export Successfully! 🙌');
			browserWindow.close();
		}
	} else {
		hasParseCount += 1;
		webContents.executeJavaScript(`exportProgress(${JSON.stringify((hasParseCount * 100) / needParseCount)})`);
		setTimeout(handleSketchJSON.bind(null, json), 5);
	}
}

export default function(exportPath, contents, win) {
	exportDir = exportPath;
	browserWindow = win;
	webContents = contents;

	// clear output first
	if (fs.existsSync(exportDir)) {
		webContents.executeJavaScript(`exportMessage('Clearing output')`);
		fs.rmdirSync(exportDir, { recursive: true });
	}

	// handle export dir
	if (!fs.existsSync(exportDir)) {
		webContents.executeJavaScript(`exportMessage('Creating output directory')`);
		fs.mkdirSync(exportDir);
	}

	// unzip sketch file
	let cmd = '/usr/bin/unzip -o "' + document.path.replace(/%20/g, ' ') + '" -d "' + exportDir + '/unzip"';
	webContents.executeJavaScript(`exportMessage('Unzip sketch file...')`);
	exec(cmd, () => {
		let pages = document.pages;
		pages.forEach(page => {
			if (page.name !== 'Symbols') {
				needParsePages.push(page);
			}
		});

		if (needParsePages.length > 0) {
			webContents.executeJavaScript(`exportMessage('Counting target layers')`);
			calcNeedParseCount(needParsePages[0]);
		}
	});
}

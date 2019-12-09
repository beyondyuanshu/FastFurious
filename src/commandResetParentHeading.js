import theUI from './lib/TheUI';
let Settings = require('sketch/settings');
import BrowserWindow from 'sketch-module-web-view';

let SelectedDocument = require('sketch/dom').getSelectedDocument();

export function checkSelectedParentHeading() {
	let win = BrowserWindow.fromId('resetParentHeading.ui');
	if (!win) {
		return;
	}

	let selection = SelectedDocument.selectedLayers;
	let selectionLayers = selection.layers;
	if (selectionLayers.length === 1 && selectionLayers[0].type === 'Artboard') {
		let artboard = selectionLayers[0];
		let layers = artboard.layers;
		for (let index = 0; index < layers.length; index++) {
			const layer = layers[index];

			if (layer.type !== 'SymbolInstance') continue;

			if (layer.master.name === 'Title') {
				let override = layer.overrides[0];
				if (override) {
					let parentHeading = Settings.layerSettingForKey(artboard, 'parentHeading');
					if (!parentHeading) {
						parentHeading = '';
					}
					win.webContents.executeJavaScript(`resetParentHeading(1, ${JSON.stringify(parentHeading)})`);
					return true;
				}
			}
		}
	}

	win.webContents.executeJavaScript(`resetParentHeading(0, ${JSON.stringify('')})`);
	return false;
}

export function onSelectedChanged(context) {
	checkSelectedParentHeading();
}

export function showUI() {
	const options = {
		identifier: 'resetParentHeading.ui',
		title: '设置父级标题',
		redirectTo: '/reset_parentHeading',
		width: 600,
		height: 310,
	};

	theUI(options);

	setTimeout(checkSelectedParentHeading.bind(null), 1000);
	setTimeout(checkSelectedParentHeading.bind(null), 2000);
	setTimeout(checkSelectedParentHeading.bind(null), 3000);
}

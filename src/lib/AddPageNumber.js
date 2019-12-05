let Sketch = require('sketch');
let Settings = require('sketch/settings');
let Text = require('sketch/dom').Text;
let UI = require('sketch/ui');

import { getArtboardsSorted } from './Utilities';

let SelectedDocument = require('sketch/dom').getSelectedDocument();

let BrowserWindow = null;
let WebContents = null;

let Artboards = [];
let ArtboardIndex = 0;
let ArtboardSort = '';

function handleArtboard(artboard) {
	let instances = Sketch.find('SymbolInstance', artboard);
	for (let index = 0; index < instances.length; index++) {
		const instance = instances[index];
		if (instance.master.name === 'Title') {
			let titleOverride = instance.overrides[0];
			if (titleOverride) {
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
				pageNumber.text = (ArtboardIndex + 1).toString();
				Settings.setLayerSettingForKey(pageNumber, 'textType', 'pageNumber');

				break;
			}
		}
	}

	if (ArtboardIndex === Artboards.length - 1) {
		BrowserWindow.close();
		Sketch.UI.message('Successfully! 🙌');
	} else {
		++ArtboardIndex;
		setTimeout(handleArtboard.bind(null, Artboards[ArtboardIndex]), 20);
	}
}

function removePageNumber() {
	Sketch.find('Text', SelectedDocument.selectedPage).forEach(text => {
		if (Settings.layerSettingForKey(text, 'textType') === 'pageNumber') {
			text.remove();
		}
  });
  
	Artboards = getArtboardsSorted(SelectedDocument.selectedPage, ArtboardSort);
	if (Artboards.length > 0) {
		ArtboardIndex = 0;
		setTimeout(handleArtboard.bind(null, Artboards[0]), 20);
	}
}

function clearOldPageNumber() {
	Sketch.find('Text, [name="{page}"]').forEach(layer => {
		layer.remove();
	});

	setTimeout(removePageNumber.bind(null), 20);
}

export function addPageNumber(artboardSort, contents, win) {
	BrowserWindow = win;
  WebContents = contents;
  ArtboardSort = artboardSort;

	setTimeout(clearOldPageNumber.bind(null), 20);
}

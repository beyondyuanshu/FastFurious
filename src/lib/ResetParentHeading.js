let Sketch = require('sketch');
let Settings = require('sketch/settings');

let SelectedDocument = require('sketch/dom').getSelectedDocument();

let BrowserWindow = null;
let WebContents = null;

export function resetParentHeading(heading, contents, win) {
	BrowserWindow = win;
	WebContents = contents;

	let selection = SelectedDocument.selectedLayers;
	let selectionLayers = selection.layers;
	if (selectionLayers.length === 1 && selectionLayers[0].type === 'Artboard') {
		let artboard = selectionLayers[0];
		Settings.setLayerSettingForKey(artboard, 'parentHeading', heading);
	}
}

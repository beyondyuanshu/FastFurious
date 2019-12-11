const Sketch = require('sketch');
const UI = require('sketch/ui');
const Settings = require('sketch/settings');
const dialog = require('@skpm/dialog');
const { exec } = require('@skpm/child_process');

let Document = require('sketch/dom').getSelectedDocument();

function getOutline() {
	let outline = [];
	let artboards = Sketch.find('Artboard', Document.selectedPage);
	for (const artboard of artboards) {
		if (Settings.layerSettingForKey(artboard, 'layerType') === 'TOC') {
			let layers = artboard.layers;
			for (const layer of layers) {
				if (
					layer.type === 'Group' &&
					layer.layers.length === 4 &&
					layer.layers[1].type === 'Text' &&
					layer.layers[3].type === 'Text'
				) {
					let title = layer.layers[1].text;
					let pagenum = layer.layers[3].text;
					// (title, pagedest, rect)
					let list =
						'("' +
						title +
						'", "' +
						(parseInt(pagenum) - 1) +
						'", "[' +
						layer.frame.x +
						', ' +
						layer.frame.y +
						',' +
						(layer.frame.x + layer.frame.width) +
						', ' +
						(layer.frame.y + layer.frame.height) +
						']")';
					outline.push(list);
				}
			}
			break;
		}
	}

	return outline;
}

export default function(context) {
	// check contents
	let artboards = Sketch.find('Artboard', Document.selectedPage);
	let found = false;
	for (const artboard of artboards) {
		if (Settings.layerSettingForKey(artboard, 'layerType') === 'TOC') {
			found = true;
			break;
		}
	}
	if (!found) {
		UI.alert('Error', '该页面没有找到已生成的目录');
		return;
	}

	// choose file
	let files = dialog.showOpenDialogSync({
		properties: ['openFile'],
		filters: [{ name: 'PDF', extensions: ['pdf'] }],
	});

	// handle
	if (files && files.length) {
		let path = context.plugin.urlForResourceNamed('handlepdf.py').path();
		let file = files[0];
		let outlineDict = getOutline();

		let cmd = `/usr/local/bin/python '${path}' '${file}' '${outlineDict}'`;
		exec(cmd, (error, stdout, stderr) => {
			if (error) {
				console.error(`exec error: ${error}`);
				return;
			}

			Sketch.UI.message('Successfully! 🙌');
		});
	}
}

let Sketch = require('sketch');
let Settings = require('sketch/settings');
let UI = require('sketch/ui');

let SelectedDocument = require('sketch/dom').getSelectedDocument();

export default function() {
	Sketch.find('Text, [name="{page}"]').forEach(layer => {
		layer.remove();
	});

	let texts = Sketch.find('Text', SelectedDocument.selectedPage);
	texts.forEach(text => {
		if (Settings.layerSettingForKey(text, 'textType') === 'pageNumber') {
			text.remove();
		}
	});

	Sketch.UI.message('Successfully! 🙌');
}

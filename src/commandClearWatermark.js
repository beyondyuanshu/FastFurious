let Sketch = require('sketch');
let UI = require('sketch/ui');

let SelectedDocument = require('sketch/dom').getSelectedDocument();

export default function() {
	let watermarks = Sketch.find('SymbolInstance, [name="水印"]', SelectedDocument.selectedPage);
	watermarks.forEach(watermark => {
		watermark.remove();
	});

	Sketch.UI.message('Successfully! 🙌');
}

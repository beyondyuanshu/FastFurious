let Sketch = require('sketch');
let UI = require('sketch/ui');

let SelectedDocument = require('sketch/dom').getSelectedDocument();

export default function() {
	let watermarkMaster = Sketch.find('SymbolMaster, [name="水印"]');
	if (!watermarkMaster.length) {
		console.log('can not found the watermark master');
		UI.alert('Error', '请添加水印组件');
	} else {
		let watermarks = Sketch.find('SymbolInstance, [name="水印"]', SelectedDocument.selectedPage);
		watermarks.forEach(watermark => {
			watermark.remove();
		});

		let artboards = Sketch.find('Artboard', SelectedDocument.selectedPage);
		artboards.forEach(artboard => {
			let watermark = watermarkMaster[0].createNewInstance();
			watermark.frame = { x: 0, y: 0, width: artboard.frame.width, height: artboard.frame.height };
			watermark.parent = artboard;
		});

		Sketch.UI.message('🙌 Successfully! 🙌');
	}
}

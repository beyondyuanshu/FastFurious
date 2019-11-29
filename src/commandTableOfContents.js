import theUI from './lib/TheUI';

let UI = require('sketch/ui');
let Settings = require('sketch/settings');
let Document = require('sketch/dom').Document;

export default function() {
	let document = Document.getSelectedDocument();
	let page = document.selectedPage;
	if (!page) {
		UI.alert('Error', '请选中“文档页”');
		return;
	} else if (page.isSymbolsPage()) {
		UI.alert('Error', '请选中“文档页”，当前选中的是“模板页”');
		return;
	} else if (Settings.layerSettingForKey(page, 'layerType') === 'TOC') {
		UI.alert('Error', '请选中“文档页”，当前选中的是“目录页”');
		return;
	}

	const options = {
		identifier: 'createTableOfContent.ui',
		title: '目录生成',
		redirectTo: '/create_toc',
		width: 600,
		height: 310,
	};

	theUI(options);
}

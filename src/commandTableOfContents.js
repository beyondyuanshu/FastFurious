import theUI from './lib/TheUI';

export default function() {
	const options = {
		identifier: 'createTableOfContent.ui',
		title: '生成目录',
		redirectTo: '/create_toc',
		width: 600,
		height: 310,
	};

	theUI(options);
}

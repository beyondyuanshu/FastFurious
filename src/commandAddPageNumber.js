import theUI from './lib/TheUI';

export default function() {
	const options = {
		identifier: 'addPageNumber.ui',
		title: '添加页码',
		redirectTo: '/add_pageNumber',
		width: 600,
		height: 310,
	};

	theUI(options);
}

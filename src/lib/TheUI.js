import BrowserWindow from 'sketch-module-web-view';
import CreateTableOfContents from '../lib/CreateTableOfContents';
import ExportMetadata from '../lib/ExportMetadata';
import getTheme from '../../resources/views/theme/index';
import { getDefaultExportDir, getExportDir } from './Utilities';
import dialog from '@skpm/dialog';

const theUI = options => {
	const themeColor = typeof MSTheme !== 'undefined' && MSTheme.sharedTheme().isDark() ? 'dark' : 'light';
	const theme = getTheme(themeColor);

	const winOptions = {
		identifier: options.identifier,
		title: options.title,
		width: options.width,
		height: options.height,
		minimizable: false,
		maximizable: false,
		resizable: false,
		fullscreenable: false,
		backgroundColor: theme.bg,
		alwaysOnTop: true,
		show: false,
	};

	let artboardSort = '';
	let artboardInnerLayersSort = '';

	let win = new BrowserWindow(winOptions);
	const contents = win.webContents;

	win.once('ready-to-show', () => {
		win.show();
	});

	// Sending a message to the plugin from the WebView
	win.on('closed', () => {
		win = null;
	});

	contents.on('cancel', () => {
		win.close();
	});

	win.loadURL(require('../../resources/webview.html'));

	contents.on('createTableOfContent', () => {
		console.log('createTableOfContent');
		CreateTableOfContents(artboardSort, artboardInnerLayersSort);
		win.close();
	});

	contents.on('exportMetadata', path => {
		ExportMetadata(path + '/' + getExportDir(), contents, win);
		// win.close();
		// dialog.showMessageBoxSync({
		// 	buttons: ['OK'],
		// 	message: 'Export Finished',
		// })
	});

	contents.on('openFolder', () => {
		let array = dialog.showOpenDialogSync({
			properties: ['openDirectory'],
		});
		if (array && array.length) {
			let result = array[0];
			contents.executeJavaScript(`setExportDir(${JSON.stringify(result)})`);
		}
	});

	contents.on('artboardSort', function(s) {
		artboardSort = s;
	});

	contents.on('artboardInnerLayersSort', function(s) {
		artboardInnerLayersSort = s;
	});

	contents.on('nativeLog', function(s) {
		console.log('nativeLog: ', s);
	});

	const getData = () => {
		// Sending a message to the WebView from your plugin command
		contents.executeJavaScript(`setTheme(${JSON.stringify(themeColor)})`);
		contents.executeJavaScript(`setRedirectTo(${JSON.stringify(options.redirectTo)})`);

		if (options.redirectTo === '/export_metadata') {
			contents.executeJavaScript(`setExportDir(${JSON.stringify(getDefaultExportDir())})`);
		}
	};
	contents.on('did-start-loading', () => getData());
	contents.on('getData', () => getData());
};

export default theUI;

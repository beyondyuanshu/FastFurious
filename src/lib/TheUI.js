import BrowserWindow from 'sketch-module-web-view';
import { createTableOfContents, setParentHeadingOrOverrideValue } from '../lib/CreateTableOfContents';
import { resetParentHeading } from '../lib/ResetParentHeading';
import { addPageNumber } from '../lib/AddPageNumber';
import { exportMetadata, cancelTask, getTargetLayers } from '../lib/ExportMetadata';
import getTheme from '../../resources/views/theme/index';
import { getDefaultExportDir, getExportDir } from './Utilities';
import dialog from '@skpm/dialog';

let handingTask = false;

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

	let win = new BrowserWindow(winOptions);
	const contents = win.webContents;

	win.once('ready-to-show', () => {
		win.show();
	});

	// Sending a message to the plugin from the WebView
	win.on('closed', e => {
		win = null;
	});

	contents.on('cancel', (needShowAlert = true) => {
		if (needShowAlert) {
			contents.executeJavaScript(`showExportAlert()`);
		} else {
			if (handingTask) {
				cancelTask();
			} else {
				win.setClosable(true);
				win.close();
			}
		}
	});

	win.loadURL(require('../../resources/webview.html'));

	contents.on('createTableOfContent', () => {
		createTableOfContents(artboardSort, contents, win);
	});

	contents.on('createContinue', value => {
		setParentHeadingOrOverrideValue(value);
		createTableOfContents(artboardSort, contents, win, true);
	});

	contents.on('resetParentHeadingApply', function(heading) {
		resetParentHeading(heading, contents, win);
	});

	contents.on('resetParentHeadingOK', heading => {
		resetParentHeading(heading, contents, win);
		win.close();
	});

	contents.on('addPageNumber', () => {
		addPageNumber(artboardSort, contents, win);
	});

	contents.on('exportMetadata', path => {
		handingTask = true;
		win.setClosable(false);
		exportMetadata(path + '/' + getExportDir(), contents, win);
		// handingTask = false;
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

			setTimeout(function() {
				contents.executeJavaScript(`setExportNodes(${JSON.stringify(getTargetLayers())})`);
			}, 1000);
		}
	};
	contents.on('did-start-loading', () => getData());
	contents.on('getData', () => getData());
};

export default theUI;

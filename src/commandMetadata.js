import theUI from './lib/TheUI'

export default function() {
	const options = {
		identifier: 'exportMetadata.ui',
		title: 'Export Metadata',
		redirectTo: '/export_metadata',
		width: 600,
		height: 310,
	}

	theUI(options)
}

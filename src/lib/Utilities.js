import { ArtboardSortEnum, ArtbaordLayersSortEnum } from './Constants';
const os = require('os');

let document = require('sketch/dom').getSelectedDocument();

function hasLayers(layer) {
	return typeof layer.layers !== 'undefined' && layer.layers.length !== 0;
}

function checkArtboardSort(artboardSort) {
	if (artboardSort === 'Top to Bottom') {
		return ArtboardSortEnum.Top2BottomByLayerList;
	} else if (artboardSort === 'Bottom to Top') {
		return ArtboardSortEnum.Bottom2TopByLayerList;
	} else if (artboardSort === 'Left to Right') {
		return ArtboardSortEnum.Left2RightByArtboard;
	} else if (artboardSort === 'Right to Left') {
		return ArtboardSortEnum.Right2LeftByArtboard;
	} else if (artboardSort === 'Top to Bottom 1') {
		return ArtboardSortEnum.Top2BottomByArtboard;
	}
}

export function getArtboardsSorted(page, artboardSort) {
	let sort = checkArtboardSort(artboardSort);
	let artboards = [];
	page.layers.slice().forEach(layer => {
		if (layer.type === 'Artboard') artboards.push(layer);
	});

	if (sort === ArtboardSortEnum.Top2BottomByLayerList) {
		return artboards.reverse();
	} else if (sort === ArtboardSortEnum.Bottom2TopByLayerList) {
		return artboards;
	} else if (sort === ArtboardSortEnum.Left2RightByArtboard) {
		return artboards.sort(function(a, b) {
			if (a.frame.y > b.frame.y + b.frame.height / 2) {
				return a.frame.y - b.frame.y + b.frame.height / 2;
			}

			return a.frame.x - b.frame.x;
		});
	} else if (sort === ArtboardSortEnum.Right2LeftByArtboard) {
		return artboards.sort(function(a, b) {
			if (a.frame.y > b.frame.y + b.frame.height / 2) {
				return a.frame.y - b.frame.y + b.frame.height / 2;
			}

			return b.frame.x - a.frame.x;
		});
	} else if (sort === ArtboardSortEnum.Top2BottomByArtboard) {
		return artboards.sort(function(a, b) {
			if (a.frame.x > b.frame.x + b.frame.width / 2) {
				return a.frame.x - b.frame.x + b.frame.width / 2;
			}

			return a.frame.y - b.frame.y;
		});
	} else {
		return undefined;
	}
}

function tailGetLayerPosterities(layer, posterities) {
	// sort from top to bottom by left layer list
	if (!hasLayers(layer)) {
		return posterities;
	}

	let reverse = layer.layers.slice().reverse();
	for (let layer of reverse) {
		posterities.push(layer);
		tailGetLayerPosterities(layer, posterities);
	}
}

export function getPagePosterities(
	page,
	artboardSort = ArtboardSortEnum.Left2RightByArtboard,
	artboardLayersSort = ArtbaordLayersSortEnum.Bottom2TopByLayerList
) {
	let posterities = [];

	// get artboards
	let artboards = getArtboardsSorted(page, artboardSort);

	// get artboards's layers
	for (let artboard of artboards) {
		posterities.push(artboard);
		let list = [];
		tailGetLayerPosterities(artboard, list);
		if (artboardLayersSort === ArtbaordLayersSortEnum.Top2BottomByLayerList) {
			posterities = posterities.concat(list);
		} else if (artboardLayersSort === ArtbaordLayersSortEnum.Bottom2TopByLayerList) {
			posterities = posterities.concat(list.reverse());
		}
	}

	return posterities;
}

export function getDefaultExportDir() {
	let dir = os.homedir() + '/Desktop';
	return dir;
}

export function getExportDir() {
	let documentName = document.path
		.replace(/^.*[\\\/]/, '')
		.replace('.sketch', '')
		.replace(/%20/g, ' ');
	return documentName + '_output';
}

import { ArtboardSortEnum, ArtbaordLayersSortEnum } from './Constants'
const os = require('os')

let document = require('sketch/dom').getSelectedDocument()

function hasLayers(layer) {
	return typeof layer.layers !== 'undefined' && layer.layers.length !== 0
}

function getArtboardsSorted(page, sort = ArtboardSortEnum.Left2RightByArtboard) {
	let layers = page.layers.slice()
	if (sort === ArtboardSortEnum.Top2BottomByLayerList) {
		return layers.reverse()
	} else if (sort === ArtboardSortEnum.Bottom2TopByLayerList) {
		return layers
	} else if (sort === ArtboardSortEnum.Left2RightByArtboard) {
		return layers.sort(function(a, b) {
			if (a.frame.y < b.frame.y) {
				return -1
			} else if (a.frame.y > b.frame.y) {
				return 1
			}
			if (a.frame.x < b.frame.x) {
				return -1
			} else if (a.frame.x > b.frame.x) {
				return 1
			}
			return 0
		})
	} else if (sort === ArtboardSortEnum.Right2LeftByArtboard) {
		return layers.sort(function(a, b) {
			if (a.frame.y < b.frame.y) {
				return -1
			} else if (a.frame.y > b.frame.y) {
				return 1
			}
			if (a.frame.x > b.frame.x) {
				return -1
			} else if (a.frame.x < b.frame.x) {
				return 1
			}
			return 0
		})
	} else if (sort === ArtboardSortEnum.Top2BottomByArtboard) {
		return layers.sort(function(a, b) {
			if (a.frame.x < b.frame.x) {
				return -1
			} else if (a.frame.x > b.frame.x) {
				return 1
			}
			if (a.frame.y < b.frame.y) {
				return -1
			} else if (a.frame.y > b.frame.y) {
				return 1
			}
			return 0
		})
	} else {
		return undefined
	}
}

function tailGetLayerPosterities(layer, posterities) {
	// sort from top to bottom by left layer list
	if (!hasLayers(layer)) {
		return posterities
	}

	let reverse = layer.layers.slice().reverse()
	for (let layer of reverse) {
		posterities.push(layer)
		tailGetLayerPosterities(layer, posterities)
	}
}

export function getPagePosterities(
	page,
	artboardSort = ArtboardSortEnum.Left2RightByArtboard,
	artboardLayersSort = ArtbaordLayersSortEnum.Bottom2TopByLayerList
) {
	let posterities = []

	// get artboards
	let artboards = getArtboardsSorted(page, artboardSort)

	// get artboards's layers
	for (let artboard of artboards) {
		posterities.push(artboard)
		let list = []
		tailGetLayerPosterities(artboard, list)
		if (artboardLayersSort === ArtbaordLayersSortEnum.Top2BottomByLayerList) {
			posterities = posterities.concat(list)
		} else if (artboardLayersSort === ArtbaordLayersSortEnum.Bottom2TopByLayerList) {
			posterities = posterities.concat(list.reverse())
		}
	}

	return posterities
}

export function getHeadingLevel(layer, flag = '#') {
	let name = layer.name
	let title = ''
	for (let j = 0; j < name.length; ++j) {
		if (name.charAt(j) !== flag) break
		title += '#'
	}
	return title.length
}

export function getHeading(layer) {
	let name = layer.name
	return name.slice(getHeadingLevel(layer))
}

export function isTopLayer(layer) {
	return layer.parent.type === 'Page'
}

export function getDefaultExportDir() {
	let dir = os.homedir() + '/Desktop'
	return dir
}

export function getExportDir() {
	let documentName = document.path
		.replace(/^.*[\\\/]/, '')
		.replace('.sketch', '')
		.replace(/%20/g, ' ')
	return documentName + '_output'
}

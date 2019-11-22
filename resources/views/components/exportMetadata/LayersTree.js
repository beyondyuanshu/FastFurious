import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CheckboxTree from 'react-checkbox-tree';
// import 'node_modules/react-checkbox-tree/src/scss/react-checkbox-tree.scss';

function LayersTree() {
	window.setExportNodes = function(nodes) {
		window.postMessage('nativeLog', nodes);
		setNodes(nodes);
	};

	const [nodes, setNodes] = React.useState([]);
	const [checked, setChecked] = React.useState([]);
	const [expanded, setExpanded] = React.useState([]);

	return (
		<CheckboxTree
			nodes={nodes}
			checked={checked}
			expanded={expanded}
			onCheck={checked => setChecked(checked)}
			onExpand={expanded => setExpanded(expanded)}
			showNodeIcon="false"
			// icons={{
			// 	check: <span className="rct-icon rct-icon-check" />,
			// 	uncheck: <span className="rct-icon rct-icon-uncheck" />,
			// 	halfCheck: <span className="rct-icon rct-icon-half-check" />,
			// 	expandClose: <span className="rct-icon rct-icon-expand-close" />,
			// 	expandOpen: <span className="rct-icon rct-icon-expand-open" />,
			// 	expandAll: <span className="rct-icon rct-icon-expand-all" />,
			// 	collapseAll: <span className="rct-icon rct-icon-collapse-all" />,
			// 	parentClose: <span className="rct-icon rct-icon-parent-close" />,
			// 	parentOpen: <span className="rct-icon rct-icon-parent-open" />,
			// 	leaf: <span className="rct-icon rct-icon-leaf" />,
			// }}
		/>
	);
}

export default LayersTree;

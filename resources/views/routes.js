import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';
import CreateTableOfContent from './components/createTableOfContent';
import AddPageNumber from './components/addPageNumber';
import ExportMetadata from './components/exportMetadata';

export default () => {
	const [theme, setTheme] = React.useState({
		palette: {
			type: 'light',
		},
	});

	window.setTheme = function(themeColor) {
		let newPaletteType = themeColor === 'dark' ? 'dark' : 'light';
		setTheme({
			palette: {
				type: newPaletteType,
			},
		});
	};

	const muiTheme = createMuiTheme(theme);

	return (
		<MuiThemeProvider theme={muiTheme}>
			<div id="mainContent">
				<Switch>
					<Route exact path="/create_toc" component={CreateTableOfContent} />
					<Route exact path="/add_pageNumber" component={AddPageNumber} />
					<Route exact path="/export_metadata" component={ExportMetadata} />
				</Switch>
			</div>
		</MuiThemeProvider>
	);
};

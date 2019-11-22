import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import FolderOpenRounded from '@material-ui/icons/FolderOpenRounded';
import ProgressPage from './ProgressPage';
import AlertsDialog from './AlertsDialog';
import LayersTree from './LayersTree';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
	},
	container: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	paper: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: 400,
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
	button: {
		minWidth: 150,
	},
}));

// TODO: 给 UI 赋初始值
window.setExportDir = function(path) {
	window.exportDir = path;
};

function ExportMetadata() {
	const classes = useStyles();

	window.setExportDir = function(path) {
		window.exportDir = path;
		setState({
			...state,
			dir: window.exportDir,
		});
	};

	window.showExportAlert = function() {
		setState({
			...state,
			alert: true,
		});
	};

	const [state, setState] = React.useState({
		dir: window.exportDir,
		exporting: false,
		alert: false,
	});

	const handleFolderOpen = () => {
		window.postMessage('openFolder');
	};

	const handleCancel = () => {
		window.postMessage('cancel', false);
	};

	const handleExport = () => {
		window.postMessage('exportMetadata', window.exportDir);
		setState({
			...state,
			exporting: true,
		});
	};

	const handleCloseAlert = () => {
		setState({
			...state,
			alert: false,
		});
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			{/* <LayersTree></LayersTree> */}
			{state.exporting && <ProgressPage />}
			{!state.exporting && (
				<Container className={classes.container} margin="500px" maxWidth="sm">
					<Grid container spacing={2} alignItems="center" justify="center">
						<Grid item></Grid>
						<Grid item>
							<Paper component="form" className={classes.paper}>
								<InputBase className={classes.input} readOnly="true" value={window.exportDir} />
								<Divider className={classes.divider} orientation="vertical" />
								<IconButton color="primary" className={classes.iconButton} aria-label="directions">
									<FolderOpenRounded
										onClick={() => {
											handleFolderOpen();
										}}
									/>
								</IconButton>
							</Paper>
						</Grid>
						<Grid item></Grid>
					</Grid>
					<Typography style={{ height: '50px' }} />
					<Grid container spacing={2} alignItems="flex-end" justify="center">
						<Grid item>
							<Button className={classes.button} variant="outlined" onClick={() => handleCancel()}>
								Cancel
							</Button>
						</Grid>
						<Grid item>
							<Button
								className={classes.button}
								variant="contained"
								color="primary"
								onClick={() => {
									handleExport();
								}}
							>
								Export
							</Button>
						</Grid>
					</Grid>
				</Container>
			)}
			{state.alert && <AlertsDialog open={state.alert} close={handleCloseAlert} />}
		</div>
	);
}

export default ExportMetadata;

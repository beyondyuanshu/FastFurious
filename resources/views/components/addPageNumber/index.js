import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ProgressPage from './ProgressPage';

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
	button: {
		minWidth: 150,
		borderRadius: 20,
	},
}));

function CreateTableOfContent() {
	const classes = useStyles();

	window.showCreateTocCreate = function() {
		setState({
			...state,
			creating: false,
		});
	};

	const [state, setState] = React.useState({
		arboardSort: 'Left to Right',
		creating: false,
	});

	const handleChange = name => event => {
		setState({
			...state,
			[name]: event.target.value,
		});
	};

	const handleCancel = () => {
		window.postMessage('cancel', false);
	};

	const handleCreate = () => {
		setState({
			...state,
			creating: true,
		});

		setTimeout(() => {
			window.postMessage('artboardSort', state.arboardSort);
			window.postMessage('addPageNumber');
		}, 50);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />

			{state.creating && <ProgressPage />}
			{!state.creating && (
				<Container className={classes.container} margin="500px" maxWidth="sm">
					<Grid container spacing={2} alignItems="center" justify="center">
						<Grid item>
							<Typography variant="subtitle1" color="textPrimary" align="right">
								选择画板顺序:
							</Typography>
						</Grid>
						<Grid item>
							<FormControl className={classes.formControl}>
								<NativeSelect value={state.arboardSort} onChange={handleChange('arboardSort')}>
									<optgroup label="From the Layer List:">
										<option value="Top to Bottom">Top to Bottom</option>
										<option value="Bottom to Top">Bottom to Top</option>
									</optgroup>
									<optgroup label="From the Canvas:">
										<option value="Left to Right">Left to Right</option>
										<option value="Right to Left">Right to Left</option>
										<option value="Top to Bottom 1">Top to Bottom</option>
									</optgroup>
								</NativeSelect>
							</FormControl>
						</Grid>
					</Grid>
					<Typography style={{ height: '50px' }} />
					<Grid container spacing={2} alignItems="flex-end" justify="center">
						<Grid item>
							<Button className={classes.button} variant="outlined" onClick={() => handleCancel()}>
								取消
							</Button>
						</Grid>
						<Grid item>
							<Button
								className={classes.button}
								variant="contained"
								color="primary"
								onClick={() => {
									handleCreate();
								}}
							>
								添加
							</Button>
						</Grid>
					</Grid>
				</Container>
			)}
		</div>
	);
}

export default CreateTableOfContent;

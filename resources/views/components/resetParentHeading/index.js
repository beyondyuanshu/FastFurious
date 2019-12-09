import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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

function ResetParentHeading(props) {
	const classes = useStyles();

	window.resetParentHeading = function(isValidArtboard, heading) {
		setState({
			...state,
			heading: heading,
			selectedInvalidArtboard: isValidArtboard,
			enableApply: checkEnable(heading),
			enableOK: checkEnable(heading),
		});
	};

	const [state, setState] = React.useState({
		heading: '',
		selectedInvalidArtboard: false,
		enableApply: false,
		enableOK: false,
	});

	const handleChange = name => event => {
		setState({
			...state,
			[name]: event.target.value,
			enableApply: checkEnable(event.target.value),
			enableOK: checkEnable(event.target.value),
		});
	};

	function checkEnable(heading) {
		let pattern = /(^[1-9][0-9]{0,}\. )|(^[1-9][0-9]{0,}((\.[1-9][0-9]{0,}){1,5}) )/;
		let regex = new RegExp(pattern);
		return state.selectedInvalidArtboard && regex.test(heading);
	}

	const handleApply = () => {
		window.postMessage('resetParentHeadingApply', state.heading);
	};

	const handleOK = () => {
		window.postMessage('resetParentHeadingOK', state.heading);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Container className={classes.container}>
				<Grid container spacing={2} alignItems="center" justify="center">
					<Grid item>
						<TextField
							error={!state.selectedInvalidArtboard}
							helperText="请选中包含标题的画板"
							required
							id="outlined-required"
							value={state.heading}
							className={classes.textField}
							margin="normal"
							variant="outlined"
							onChange={handleChange('heading')}
							autoFocus="true"
							// disabled={!state.selectedInvalidArtboard}
							onKeyPressCapture={e => {
								if (e.key === 'Enter') {
									handleOK();
								}
							}}
						/>
					</Grid>
				</Grid>
				<Typography style={{ height: '50px' }} />
				<Grid container spacing={2} alignItems="flex-end" justify="center">
					<Grid item>
						<Button
							className={classes.button}
							variant="outlined"
							disabled={!state.enableApply}
							onClick={() => handleApply()}
						>
							应用
						</Button>
					</Grid>
					<Grid item>
						<Button
							className={classes.button}
							variant="contained"
							color="primary"
							disabled={!state.enableOK}
							onClick={() => handleOK()}
						>
							确认
						</Button>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default ResetParentHeading;

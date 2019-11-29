import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import { Grid, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
}));

export default function LinearDeterminate() {
	const classes = useStyles();

	const [completed, setCompleted] = React.useState(0);
	const [progerssVariant, setProgressVariant] = React.useState('indeterminate');
	const [msg, setMsg] = React.useState('fasfda');

	window.exportProgress = function(value) {
		setCompleted(value);
		setProgressVariant('determinate');
	};

	window.exportMessage = function(msg) {
		setMsg(msg);
	};

	const handleCancel = () => {
		window.postMessage('cancel', true);
	};

	return (
		<div className={classes.root}>
			<Grid container alignItems="center" spacing={3} style={{ display: 'flex' }}>
				<Grid item style={{ flexGrow: 1, marginLeft: 10 }}>
					<LinearProgress
						variant={progerssVariant}
						value={completed}
						style={{
							height: 20,
						}}
					/>
				</Grid>
				<Grid item style={{ flexGrow: 0, marginRight: 10 }}>
					<Button onClick={handleCancel} variant="contained" color="primary">
						Cancel
					</Button>
				</Grid>
			</Grid>
			<Typography variant="h6" color="textPrimary" align="center">
				{msg}
			</Typography>
		</div>
	);
}

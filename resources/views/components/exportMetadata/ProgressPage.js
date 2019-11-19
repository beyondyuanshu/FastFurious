import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

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
	const [msg, setMsg] = React.useState('');

	window.exportProgress = function(value) {
		setCompleted(value);
		setProgressVariant('determinate');
	};

	window.exportMessage = function(msg) {
		setMsg(msg);
	};

	return (
		<div className={classes.root}>
			<LinearProgress
				variant={progerssVariant}
				value={completed}
				style={{
					height: 20,
					// borderRadius: 5,
					marginLeft: 10,
					marginRight: 10,
				}}
			/>
			<Typography variant="h6" color="textPrimary" align="center">
				{msg}
			</Typography>
		</div>
	);
}

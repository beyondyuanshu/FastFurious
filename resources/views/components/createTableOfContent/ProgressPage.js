import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
}));

export default function CircularDeterminate() {
	const classes = useStyles();
	const [progress, setProgress] = React.useState(0);

	React.useEffect(() => {
		function tick() {
			// reset when reaching 100%
			setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
		}

		const timer = setInterval(tick, 20);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Grid container direction="column" alignItems="center" spacing="3">
				<Grid item xs={12}>
					<CircularProgress variant="determinate" size={50} thickness="5" value={progress} />
				</Grid>
				<Grid item xs={12}>
					<Typography variant="h6" color="textPrimary" align="center">
						{'正在生成...'}
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
}

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
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
	button: {
		minWidth: 150,
		borderRadius: 20,
	},
}));

export default function HintPage(props) {
	const classes = useStyles();

	// // 当页面隐藏掉时不会响应
	// window.showCreateTocHint = function(title, content) {
	// 	window.postMessage('nativeLog', title);
	// 	setState({
	// 		...state,
	// 		title: title,
	// 		content: content,
	// 	});
	// };

	const [state, setState] = React.useState({
		title: "I'm title ...",
		content: props.content,
		enableContinue: false,
	});

	const handleChange = name => event => {
		let pattern = /(^[1-9][0-9]{0,}\. )|(^[1-9][0-9]{0,}((\.[1-9][0-9]{0,}){1,5}) )/;
		let regex = new RegExp(pattern);
		setState({
			...state,
			[name]: event.target.value,
			enableContinue: regex.test(event.target.value),
		});
	};

	const handleCancel = () => {
		window.postMessage('cancel', false);
	};

	const handleContinue = () => {
		props.hideHinting();
		setTimeout(() => {
			window.postMessage('createContinue', state.content);
		}, 50);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Container className={classes.container}>
				<Grid container direction="column" alignItems="center" spacing={2}>
					<Grid item>
						<Typography variant="h6" color="error" align="center">
							{props.title}
						</Typography>
					</Grid>
					<Grid item alignContent="flex-start">
						<TextField
							required
							id="outlined-required"
							value={state.content}
							className={classes.textField}
							margin="normal"
							variant="outlined"
							onChange={handleChange('content')}
							autoFocus="ture"
						/>
					</Grid>
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
							disabled={!state.enableContinue}
							onClick={() => handleContinue()}
						>
							Continue
						</Button>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

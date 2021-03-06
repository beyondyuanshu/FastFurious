import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog(props) {
	const handleClose = () => {
		props.close();
	};

	const handleOK = () => {
		handleClose();
		window.postMessage('cancel', false);
	};

	return (
		<div>
			<Dialog
				open={props.open}
				onClose={handleClose}
				disableBackdropClick="true"
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				{/* <DialogTitle id="alert-dialog-title">{'Alert'}</DialogTitle> */}
				<DialogContent>
					<DialogContentText id="alert-dialog-description">Do you really want to cancel?</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} variant="outlined">
						Cancel
					</Button>
					<Button onClick={handleOK} variant="contained" color="primary">
						OK
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

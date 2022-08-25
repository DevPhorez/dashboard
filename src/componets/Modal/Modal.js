import './Modal.css'

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';

import { Modal as muiModal, Box, Typography } from '@mui/material';

import { SuccessContainedButton, PrimaryContainedButton } from '../CustomComponets'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	borderRadius: '15px',
	boxShadow: 24,
	p: 4,
};

function Modal (props) {
	
	const handleClose = () => {
		props.setOpen(false);
	};
	
	const Delete = () => props.onDelete()
	
	return (
		<div>
			<Backdrop
				sx={ { zIndex: (theme) => theme.zIndex.drawer + 1 } }
				open={props.open}
				onClick={handleClose}
				className='backdrop'
			>
				<muiModal
					sx={ { zIndex: 999 } }
					onClick={ props.onHide }
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<Typography id="modal-modal-description" sx={ { mt: 2, mb: 3 } }>
							{ props.children }
						</Typography>
						<PrimaryContainedButton onClick={ props.onHide } className='me-3'>
							{ props.cancel }
						</PrimaryContainedButton>
						<SuccessContainedButton onClick={Delete} >
							{ props.ok }
						</SuccessContainedButton>
					</Box>
				</muiModal>
			</Backdrop>
		</div>
	);
}

export { style }
export default Modal
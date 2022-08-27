import { useState } from "react";
import { style as modalStyle } from '../../Modal/Modal'
import { Box, IconButton, Modal } from "@mui/material";
import { Close, FlipCameraIos } from "@mui/icons-material";
import {Col, Row} from "react-bootstrap";

function Image (props) {
	
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	
	const [quarterCircleStyles, setQuarterCircleStyles] = useState(
		{ bottom: 114, right: -75 }
	)
	
	function ShowSetNewProfile () {
		setQuarterCircleStyles({ bottom: 114, right: 0 })
	}
	
	function HideSetNewProfile () {
		setQuarterCircleStyles({ bottom: 114, right: -75 })
	}
	
	return (
		<div className='product-image position-relative overflow-hidden'  onMouseOver={ ShowSetNewProfile } onMouseLeave={ HideSetNewProfile } >
			<img className='img-fluid active' src={`/` + props.product.image} alt={props.product.title}/>
			<div className='half-circle bg-success' style={ quarterCircleStyles } >
				<IconButton className='position-absolute text-white' style={ { left: 25, bottom: 12 } } color={'inherit'} aria-label="upload picture" component="label">
					<FlipCameraIos />
				</IconButton>
			</div>
			<div className='product-sub-image w-100'>
				<div className='border-200 p-1 rounded mx-2 ms-3'>
					<img className='img-fluid mb-0' src={`/` + props.product.image} alt={props.product.title}/>
				</div>
				<div className='border-200 p-1 rounded mx-2'>
					<img className='img-fluid mb-0' src={`/` + props.product.image} alt={props.product.title}/>
				</div>
				<div className='border-200 p-1 rounded mx-2'>
					<img className='img-fluid mb-0' src={`/` + props.product.image} alt={props.product.title}/>
				</div>
				<div className='border-200 p-1 rounded mx-2'>
					<img className='img-fluid mb-0' src={`/` + props.product.image} alt={props.product.title}/>
				</div>
				<div className='border-200 p-1 rounded mx-2'>
					<img className='img-fluid mb-0' src={`/` + props.product.image} alt={props.product.title}/>
				</div>
			</div>
			<Modal
				sx={ { backgroundColor: 'yellow' } }
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				className='backdrop'
			>
				<Box className='p-3' style={ { width: 450, maxWidth: 450 } } sx={modalStyle} >
					<div className='header d-flex justify-content-between'>
						<h3>Edit</h3>
						<IconButton onClick={ handleClose }>
							<Close />
						</IconButton>
					</div>
					<hr className='mt-1' />
					<div className='body'>
						<p className='text-900'>share this product with your friend</p>
					</div>
				</Box>
			</Modal>
		</div>
	)
}

export default Image
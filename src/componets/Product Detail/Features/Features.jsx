import { useState, Fragment } from "react";

import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { Alert, Box, Button, IconButton, Modal, TextField, FormControlLabel } from "@mui/material";
import { Add, Close, Visibility, VisibilityOff } from "@mui/icons-material";

import { style as modalStyle } from "../../Modal/Modal";

import { Col, Row } from "react-bootstrap";

import { MaterialUISwitch } from '../../../Utils'

function Features (props) {
	
	const [displayStatus, setDisplayStatus] = useState(true)
	const [open, setOpen] = useState(false);
	const [showDisplay, setShowDisplay] = useState(false)
	const [features, setFeatures] = useState(props.features)
	const [isNewFeature, setIsNewFeature] = useState(false)
	const [showAlert, setShowAlert] = useState(false)
	const [ID, setID] = useState(null)
	const [title, setTitle] = useState(null)
	const [value, setValue] = useState(null)
	
	if (displayStatus) {
		const handleOpen = () => setOpen(true);
		const handleClose = () => {
			setOpen(false)
			setIsNewFeature(false)
			setShowAlert(false)
			setShowDisplay(false)
		};
		
		function GenerateNewFeature () {
			const newFeature = { id: features.length + 1, title: title, value: value }
			setFeatures(prevState => [...prevState, newFeature])
		}
		
		function AddOrUpdateFeature () {
			if (title && value) {
				if (isNewFeature) {
					GenerateNewFeature()
				} else {
					features.some( feature => {
						if (feature.id === ID ) {
							feature.title = title
							feature.value = value
						}
					})
				}
				
				setOpen(false)
			} else {
				setShowAlert(true)
			}
		}
		
		function DeleteFeature () {
			const newFeatures = features.filter( feature => feature.id !== ID)
			setFeatures(newFeatures)
			setOpen(false)
		}
		
		return (
			<div className='mt-5'>
				<h5 onDoubleClick={ () => {
					setShowDisplay(true)
					handleOpen()
				}}>
					Features
				</h5>
				<ul className='features mb-1'>
					{
						features.map( feature => (
							<li key={feature} onDoubleClick={ (event) =>
							{
								let regExp = /:/
								let elem = event.target
								
								if (!regExp.test(elem.innerText)) {
									elem = event.target.parentElement
								}
								
								regExp = /(.+)\s:/
								let currentFeature = features.find( feature => {
									return feature.title === regExp.exec(elem.innerText)[1]
								})
								setID(currentFeature.id)
								setTitle(currentFeature.title)
								setValue(currentFeature.value)
								
								handleOpen()
							}
							} >{feature.title} : <span>{feature.value}</span></li>
						))
					}
				</ul>
				<Button className='ms-1' startIcon={<Add />} onClick={ () =>
				{
					setIsNewFeature(true)
					setTitle(null)
					setValue(null)
					handleOpen()
				}
				} >Add new feature</Button>
				<Modal
					sx={ { backgroundColor: 'yellow' } }
					open={ open }
					onClose={ handleClose }
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
					className='backdrop'
				>
					<Box className='p-3' style={ { width: 450, maxWidth: 450 } } sx={modalStyle} >
						<div className='header d-flex justify-content-between'>
							<h3>{ isNewFeature ? 'New' : 'Edit' }</h3>
							<IconButton onClick={ handleClose }>
								<Close />
							</IconButton>
						</div>
						<hr className='mt-1' />
						<div className='body'>
							{
								showDisplay ? (
									<FormControlLabel
										control={<MaterialUISwitch sx={ { m: 1 } } defaultChecked />}
										label="Hide / Show"
										onClick={ () => setDisplayStatus(prevState => !prevState) }
									/>
								) : (
									<>
										{
											showAlert && <Alert className='my-3' severity={'error'} onClose={ () => setShowAlert(false) } >All inputs must be filled !!!</Alert>
										}
										{
											isNewFeature && <p className='text-900'>Add a new feature</p>
										}
										
										<Row className='position-relative d-flex justify-content-evenly mb-5'>
											<Col lg={5} className='d-flex align-items-center'>
												<TextField id="standard-basic" label="Feature Title" variant="standard" value={title} onChange={ (event) => setTitle(event.target.value) } />
											</Col>
											<Col lg={1}>
												<h4 className='position-absolute bottom-0' style={ { color: '#aaaaaa' } } >
													:
												</h4>
											</Col>
											<Col md={12} lg={5}>
												<TextField id="standard-basic" label="Feature Value" variant="standard" value={value} onChange={ (event) => setValue(event.target.value) } />
											</Col>
										</Row>
										<Row>
											<Col className='px-1 p-0' sm={12} md={ isNewFeature ? 12 : 6 }>
												<Button fullWidth className='mb-3 p-2' color={'secondary'} variant='outlined' onClick={AddOrUpdateFeature} >
													{
														isNewFeature ? ('Add New') : ('Update')
													}
												</Button>
											</Col>
											{
												!isNewFeature &&
												<Col className='px-1 p-0' sm={12} md={6}>
													<Button fullWidth className='mb-3 p-2' color={'error'} variant='outlined' onDoubleClick={DeleteFeature} >
														Delete feature
													</Button>
												</Col>
											}
										</Row>
									</>
								)
							}
						</div>
					</Box>
				</Modal>
			</div>
		)
	}
}

export default Features
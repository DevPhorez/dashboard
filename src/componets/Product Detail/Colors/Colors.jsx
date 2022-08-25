import './Colors.css'

import { useState } from 'react'

import { Add, Close, DoneOutline, ColorLens, Edit } from '@mui/icons-material'
import { Alert, Box, Button, FormControlLabel, IconButton, Modal, TextField } from "@mui/material";
import { style as modalStyle } from "../../Modal/Modal";
import { Col, Row } from "react-bootstrap";
import { MaterialUISwitch } from '../../../Utils'


function Colors () {
	
	const [colors, setColors] = useState([
		{ id: 1, name: 'pink', backgroundColor: '#d099c5', isChecked: true },
		{ id: 2, name: 'black', backgroundColor: '#000', isChecked: false },
		{ id: 3, name: 'blue', backgroundColor: '#0000ff', isChecked: false },
	])
	
	const [checkedColor, setCheckedColor] = useState('pink')
	
	const [displayStatus, setDisplayStatus] = useState(true)
	const [open, setOpen] = useState(false);
	const [showDisplay, setShowDisplay] = useState(false)
	const [isNewColor, setIsNewColor] = useState(false)
	const [showAlert, setShowAlert] = useState(false)
	const [ID, setID] = useState(null)
	const [name, setName] = useState(null)
	const [color, setColor] = useState(null)
	
	if (displayStatus) {
		const handleOpen = () => setOpen(true);
		const handleClose = () => {
			setOpen(false)
			setIsNewColor(false)
			setShowAlert(false)
			setShowDisplay(false)
		};
		
		function ChangeColor (event) {
			let elem = event.target
			if (!/color-border/g.test(elem.className)) {
				elem = elem.parentElement
			}
			
			let lastColor = checkedColor
			colors.forEach( color => {
				if (color.name === elem.title) {
					color.isChecked = true
					setCheckedColor(color.name)
				}
				if (color.name === lastColor) {
					color.isChecked = false
				}
			})
		}
		
		function AddOrUpdateColor () {
			if (name && color) {
				if (isNewColor) {
					const newColor = { name: name, backgroundColor: color, isChecked: false }
					setColors(prevState => [...prevState, newColor])
				} else {
					colors.some( item => {
						if (item.id === ID ) {
							item.name = name
							item.backgroundColor = color
						}
					})
				}
				
				setOpen(false)
			} else {
				setShowAlert(true)
			}
		}
		
		function DeleteColor () {
			const newColors = colors.filter( item => item.name !== name)
			setColors(newColors)
			setOpen(false)
		}
		
		function convertColor(rgb) {
			rgb = rgb.match(/^rgb\((\d+), \s*(\d+), \s*(\d+)\)$/);
			function hexCode(i) {
				return ("0" + parseInt(i).toString(16)).slice(-2);
			}
			return "#" + hexCode(rgb[1]) + hexCode(rgb[2])
				+ hexCode(rgb[3]);
		}
		
		return (
			<>
				<div className='mt-5'>
					<h5 onDoubleClick={ () => {
						setShowDisplay(true)
						handleOpen()
					}}>
						Color: {checkedColor}
					</h5>
				</div>
				<div className='d-flex flex-wrap'>
					{
						colors.map( item => (
							<div key={item.name} className='d-flex'>
								<Edit className='position-absolute pointer' color={'secondary'} onClick={ event => {
									let elem = event.currentTarget.parentElement.lastChild
									
									let currentColor = colors.find( color => {
										return color.name === elem.title
									})
									setID(currentColor.id)
									setName(currentColor.name)
									setColor(convertColor(elem.firstChild.style.backgroundColor))
									handleOpen()
								} } fontSize='small' />
								
								<div className={`color-border pointer ${ item.isChecked && 'color-border-checked'}`} title={item.name} onClick={ChangeColor} >
									<div className='color d-flex justify-content-center align-items-center' style={ { backgroundColor: item.backgroundColor } }>
										{
											item.isChecked && <DoneOutline className='color-checked' fontSize={'small'} />
										}
									</div>
								</div>
							</div>
						))
					}
				</div>
				<Button className='ms-1' startIcon={<Add />} onClick={ () =>
				{
					setIsNewColor(true)
					setName(null)
					setColor(null)
					handleOpen()
				}
				} >Add new color</Button>
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
							<h3>{ isNewColor ? 'New' : 'Edit' }</h3>
							<IconButton onClick={ handleClose }>
								<Close />
							</IconButton>
						</div>
						<hr className='mt-1' />
						<div className='body'>
							{
								showDisplay ? (
									<>
										<FormControlLabel
											control={<MaterialUISwitch sx={ { m: 1 } } defaultChecked />}
											label="Show / Hide"
											onClick={ () => setDisplayStatus(prevState => !prevState) }
										/>
									</>
								) : (
									<>
										{
											showAlert && <Alert className='my-3' severity={'error'} onClose={ () => setShowAlert(false) } >All inputs must be filled !!!</Alert>
										}
										{
											isNewColor && <p className='text-900'>Add a new color</p>
										}
										
										<Row className='position-relative d-flex justify-content-evenly mb-5'>
											<Col lg={5} className='d-flex align-items-center'>
												<TextField id="standard-basic" label="Color Title" variant="standard" value={name} onChange={ (event) => setName(event.target.value) } />
											</Col>
											<Col lg={1}>
												<h4 className='position-absolute top-50' style={ { color: '#aaaaaa' } } >
													:
												</h4>
											</Col>
											<Col md={12} lg={5}>
												<div className='text-center'>
													<IconButton color={'primary'} aria-label={'color '} component='label'>
														<input type='color' hidden value={ color } onChange={ (event) => setColor(event.target.value) } />
														<ColorLens fontSize={'large'} />
													</IconButton>
													<p>Choose color</p>
												</div>
											</Col>
										</Row>
										<Row>
											<Col className='px-1 p-0' sm={12} md={ isNewColor ? 12 : 6 }>
												<Button fullWidth className='mb-3 p-2' color={'secondary'} variant='outlined' onClick={AddOrUpdateColor} >
													{
														isNewColor ? ('Add New') : ('Update')
													}
												</Button>
											</Col>
											{
												!isNewColor &&
												<Col className='px-1 p-0' sm={12} md={6}>
													<Button fullWidth className='mb-3 p-2' color={'error'} variant='outlined' onDoubleClick={ DeleteColor } >
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
			</>
		)
	}
}

export default Colors
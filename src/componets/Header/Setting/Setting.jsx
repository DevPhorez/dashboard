import React, { useState } from 'react';
import { SwipeableDrawer, ButtonGroup, Button } from '@mui/material';
import { IconButton } from "@mui/material";
import { Settings, Close, LightMode, SettingsBrightness, DarkMode, FormatTextdirectionLToR, FormatTextdirectionRToL } from "@mui/icons-material";
import { Container, Row, Col, Nav } from "react-bootstrap";

function Setting () {
	const [isOpen, setIsOpen] = useState(false);
	const [modes, setModes] = useState([
		{ mode: 'light', icon: <LightMode />, isActive: true},
		{ mode: 'system', icon: <SettingsBrightness />, isActive: false},
		{ mode: 'dark', icon: <DarkMode />, isActive: false},
	])
	const [directions, setDirections] = useState([
		{ direction: 'Left to Right', icon: <FormatTextdirectionLToR />, isActive: true},
		{ direction: 'Right to Left', icon: <FormatTextdirectionRToL />, isActive: false},
	])

	function ChangeModeIsActive (newActive) {
		let newModes = []
		modes.forEach(mode => {
			if ( mode.isActive === true ) {
				mode.isActive = false
			}
			if ( mode.mode === newActive ) {
				mode.isActive = true
			}

			newModes.push(mode)
		})

		setModes(newModes)
	}

	function ChangeDirectionIsActive (newActive) {
		let newDirections = []
		directions.forEach(direction => {
			if ( direction.isActive === true ) {
				direction.isActive = false
			}
			if ( direction.direction === newActive ) {
				direction.isActive = true
			}

			newDirections.push(direction)
		})

		setDirections(newDirections)
	}

	function ToggleDrawer () {
		setIsOpen(prevState => !prevState)
	}

	function CloseDrawer () {
		setIsOpen(false)
	}

	return (
		<div>
			<Nav.Link onClick={ ToggleDrawer }>
				<IconButton>
					<Settings className='text-primary' />
				</IconButton>
			</Nav.Link>

			<SwipeableDrawer
			anchor='right'
			open={ isOpen }
			onClose={ ToggleDrawer }
			onOpen={ ToggleDrawer }
			>
				<Container>
					<Row className='my-4'>
						<Col>
							<p className='text-900 fs-5 m-0'>Settings</p>
						</Col>
						<Col className='position-relative'>
							<IconButton className='position-absolute top-50 end-0' style={ { marginTop: -19 } } >
								<Close className='text-primary' onClick={ CloseDrawer } />
							</IconButton>
						</Col>
					</Row>
				</Container>
				<hr className='m-0 mb-4' />
				<Container>
					<p className='text-black-50 fw-bold mb-3' style={ { fontSize: 12, letterSpacing: 2 } }>MODE</p>
					<ButtonGroup className='d-flex justify-content-center text-success mb-4' variant="outlined" aria-label="outlined button group">
						{
							modes.map(mode => (
								<Button key={mode.mode} className={`group-button ${ mode.isActive && 'active' }`} sx={ { borderRadius: '12px' } } style={ { padding: '12px 24px', textTransform: 'capitalize' } } color={"inherit"} startIcon={ mode.icon } onClick={ () => ChangeModeIsActive(mode.mode) } >{ mode.mode }</Button>
							))
						}
					</ButtonGroup>
					<p className='text-black-50 fw-bold mb-3' style={ { fontSize: 12, letterSpacing: 2 } }>DIRECTION</p>
					<ButtonGroup className='d-flex justify-content-center text-success' variant="outlined" aria-label="outlined button group">
						{
							directions.map(direction => (
								<Button key={direction.direction} className={`group-button w-50 ${ direction.isActive && 'active' }`} sx={ { borderRadius: '12px' } } style={ { padding: '12px 24px', textTransform: 'none' } } color={"inherit"} startIcon={ direction.icon } onClick={ () => ChangeDirectionIsActive(direction.direction) } >{ direction.direction }</Button>
							))
						}
					</ButtonGroup>
				</Container>
			</SwipeableDrawer>
		</div>
	);
}

export default Setting
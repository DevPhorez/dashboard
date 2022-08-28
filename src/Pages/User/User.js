import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { TextField, IconButton, Alert, Button } from '@mui/material'
import { Image } from 'react-bootstrap'

import { Container, Row, Col } from 'react-bootstrap'

import Slider from '../../componets/Profile Slider/Slider';

import { Face, SystemUpdateAlt } from '@mui/icons-material';

import { userRows as users } from "../../data";
import {Helmet} from "react-helmet";

function User () {
	
	const [open, setOpen] = useState(false);
	const ShowSlider = () => {
		setOpen(true);
	};
	
	const { userID } = useParams()
	const currentUser = users.find( user => {
		return user.id === Number(userID)
	})
	
	const [alertMessage, setAlertMessage] = useState()
	const [showError, setShowError] = useState(false)
	// window.onclick = () => setShowError(false)
	
	// inputs value start
	const [profile, setProfile] = useState('/' + currentUser.avatar)
	function newProfile (event) {
		const file = event.target.files[0]
		// TODO show second alert and another alerts ...
		if (file.type === 'image/png' || file.type === 'image/jpg') {
			if (file.size > 6e6) {
				setAlertMessage({message: 'You can just upload an Image smaller than 6 MB !!!', status: 'error'})
				setShowError(true)
			} else {
				setProfile(file);
			}
		} else {
			setAlertMessage({message: 'You must select a png/jpg file !!!', status: 'error'})
			setShowError(true)
		}
	}
	
	const [username, setUsername] = useState(currentUser.username)
	const [firstname, setFirstname] = useState(currentUser.firstname)
	const [lastname, setLastname] = useState(currentUser.lastname)
	const [email, setEmail] = useState(currentUser.email)
	const [number, setNumber] = useState(currentUser.number)
	const [country, setCountry] = useState(currentUser.country)
	const [city, setCity] = useState(currentUser.city)
	const [role, setRole] = useState(currentUser.role)
	
	function SubmitHandler (event) {
		event.preventDefault()
		
		// TODO coding a regex for valid emails
		if (false) {
			currentUser.email = email
		} else {
			setAlertMessage({message: 'Email is not a valid !!! pleas enter a valid email', status: 'error'})
			setShowError(true)
			return false
		}
		
		currentUser.username = username
		currentUser.firstname = firstname
		currentUser.lastname = lastname
		currentUser.number = number
		currentUser.country = country
		currentUser.city = city
		currentUser.role = role
		
		console.log(currentUser)
		
		setAlertMessage({message: 'All changes submitted :)', status: 'success'})
		setShowError(true)
	}
	
	// inputs value end
	
	const screenWidth = document.body.offsetWidth
	
	const [quarterCircleStyles, setQuarterCircleStyles] = useState(
		{ bottom: -50, right: -75 }
	)
	
	function ShowSetNewProfile () {
		setQuarterCircleStyles({ bottom: 0, right: 0 })
	}
	
	function HideSetNewProfile () {
		setQuarterCircleStyles({ bottom: -50, right: -75 })
	}
	
	return (
		<>
			<Container className='float-end ps-3 pe-4' style={ { width: screenWidth >= 768 ? screenWidth - 212.828 : '100%' } }>
				<Helmet>
					<title>Phorez | { currentUser.username }</title>
				</Helmet>
				<div className='mt-3'>
					{
						showError && <Alert severity={alertMessage.status} onClose={ () => setShowError(false) } >{ alertMessage.message }</Alert>
					}
				</div>
				<div className='d-flex justify-content-center w-100 mt-5 mb-5'>
					<div className='position-relative overflow-hidden' style={ { borderRadius: '10px' } } onMouseOver={ ShowSetNewProfile } onMouseLeave={ HideSetNewProfile } >
						<Image className='profile' src={'/' + currentUser.avatar} alt={currentUser.username} />
						<div className='half-circle' style={ quarterCircleStyles } >
							<IconButton className='position-absolute text-primary' style={ { left: 35, top: 10 } } color={'inherit'} onClick={ShowSlider} >
								<Face />
							</IconButton>
							<IconButton className='position-absolute text-success' style={ { left: 15, bottom: 0 } } color={'inherit'} aria-label="upload picture" component="label">
								<input type="file" accept='image/*' hidden onChange={ newProfile }/>
								<SystemUpdateAlt />
							</IconButton>
						</div>
					</div>
				</div>
				<Slider open={open} setOpen={setOpen} />
				{/* TODO enter === tab when client press enter go next element(input)*/}
				<form onSubmit={ SubmitHandler }>
					<Row className='text-center'>
						<Col className='mb-5' lg={4} md={6} sm={12}>
							<TextField color={'secondary'} label='User Name' variant="standard" type={'text'} value={ username } onChange={ (event) => setUsername(event.target.value) } required />
						</Col>
						<Col className='mb-5' lg={4} md={6} sm={12}>
							<TextField color={'secondary'} label='First Name' variant="standard" type={'text'} value={ firstname } onChange={ (event) => setFirstname(event.target.value) } required />
						</Col>
						<Col className='mb-5' lg={4} md={6} sm={12}>
							<TextField color={'secondary'} label='Last Name' variant="standard" type={'text'} value={ lastname } onChange={ (event) => setLastname(event.target.value)} required />
						</Col>
						<Col className='mb-5' lg={4} md={6} sm={12}>
							<TextField color={'secondary'} label='Email' variant="standard" type={'email'} value={ email } onChange={ (event) => setEmail(event.target.value)} required />
						</Col>
						<Col className='mb-5' lg={4} md={6} sm={12}>
							<TextField color={'secondary'} label='Phone Number' variant="standard" type={'text'} value={ number } onChange={ (event) => setNumber(event.target.value)} required />
						</Col>
						<Col className='mb-5' lg={4} md={6} sm={12}>
							<TextField color={'secondary'} label='Country' variant="standard" type={'text'} value={ country } onChange={ (event) => setCountry(event.target.value)} />
						</Col>
						<Col className='mb-5' lg={4} md={6} sm={12}>
							<TextField color={'secondary'} label='City' variant="standard" type={'text'} value={ city } onChange={ (event) => setCity(event.target.value)} />
						</Col>
						<Col className='mb-5' lg={4} md={6} sm={12}>
							<TextField color={'secondary'} label='Role' variant="standard" type={'text'} value={ role } required />
						</Col>
						<Col className='mb-5' lg={4} md={6} sm={12}>
							<TextField color={'secondary'} label='PH ID' variant="standard" type={'text'} value={ currentUser.phid() } disabled />
						</Col>
						<div className='mb-5 ps-5 pe-4'>
							<Button className='w-100' type='submit' color={'secondary'} variant={'outlined'}>
								Submit
							</Button>
						</div>
					</Row>
				</form>
			</Container>
		</>
	)
}

export default User

// ([^\s$\d$]+.)
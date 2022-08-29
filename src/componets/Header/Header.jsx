import { useState, useEffect, useRef } from 'react';

import { IconButton, LinearProgress } from '@mui/material'
import { Language } from '@mui/icons-material';

import { Container, Navbar, Nav } from 'react-bootstrap'

import ProfileMini from "../Profile Mini/ProfileMini";
import Setting from "./Setting/Setting";
import Notification from "./Norification/Notification";

function Header () {
	
	const [progress, setProgress] = useState(0);
	const [buffer, setBuffer] = useState(10);
	
	const progressRef = useRef(() => {});
	useEffect(() => {
		progressRef.current = () => {
			if (progress > 100) {
				setProgress(0);
				setBuffer(10);
			} else {
				const diff = Math.random() * 10;
				const diff2 = Math.random() * 10;
				setProgress(progress + diff);
				setBuffer(progress + diff + diff2);
			}
		};
	}, )
	
	useEffect(() => {
		const timer = setInterval(() => {
			progressRef.current();
		}, 500);
		
		return () => {
			clearInterval(timer);
		};
	}, []);
	return (
		<>
			<div style={ { width: '100%', height: '46px', padding: '8px 0', marginBottom: 16 } }></div>
			<Navbar className='shadow' bg='white' fixed={'top'}>
				<Container fluid className='mx-2 d-flex align-items-center'>
					<Navbar.Brand className='text-success fs-4 fw-bold'>PHOREZ DASHBOARD</Navbar.Brand>
					<Navbar.Collapse>
						<Nav className="position-absolute end-0">
							<Notification />
							<Nav.Link>
								<IconButton>
									<Language className='text-primary' />
								</IconButton>
							</Nav.Link>
							<Setting />
							<Nav.Link className='pe-0'>
								<ProfileMini id={6} />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			
			<LinearProgress color={'secondary'} variant="buffer" value={progress} valueBuffer={buffer} />
			
		</>
	)
}

export default Header
import { IconButton } from '@mui/material'
import { Language } from '@mui/icons-material';

import { Container, Navbar, Nav } from 'react-bootstrap'

import ProfileMini from "../Profile Mini/ProfileMini";
import Setting from "./Setting/Setting";
import Notification from "./Norification/Notification";

function Header () {
	return (
		<Navbar>
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
							<ProfileMini id={'profile'} />
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header
import { Container } from 'react-bootstrap';

import { Visibility } from '@mui/icons-material';
import { Box, Avatar } from '@mui/material';
import { Item } from '../../Pages/Home/Home';

import { PrimaryContainedButton } from '../CustomComponets'

import { useState } from 'react'

function Members () {
	
	const [users] = useState([
		{ id: 1, fullName: 'phorez babaee', profile: '', job: 'Web Developer'},
		{ id: 2, fullName: 'judi babaee', profile: '', job: 'SEO Eng'},
		{ id: 3, fullName: 'ho3ain tohi', profile: '', job: 'IOS Developer'},
		{ id: 4, fullName: 'Sorosh Hichckas', profile: '', job: 'Android Developer'},
	])
	
	function stringToColor (string: string) {
		let hash = 0;
		let i;
		
		/* eslint-disable no-bitwise */
		for (i = 0; i < string.length; i += 1) {
			hash = string.charCodeAt(i) + ((hash << 5) - hash);
		}
		
		let color = '#';
		
		for (i = 0; i < 3; i += 1) {
			const value = (hash >> (i * 8)) & 0xff;
			color += `00${value.toString(16)}`.slice(-2);
		}
		/* eslint-enable no-bitwise */
		
		return color;
	}
	
	function stringAvatar(name: string) {
		return {
			sx: {
				bgcolor: stringToColor(name),
			},
			children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
		};
	}
	
	return (
		<Box
			sx={{
				p: 2,
				bgcolor: 'background.default',
				display: 'block',
				width: '100%',
				paddingLeft: 0
			}}
		>
			<Item className='m-auto px-2 py-4' elevation={6}>
				<Container>
					<h4 className='text-lg-start text-center'>New Join Members</h4>
					<ul className='list-unstyled'>
						{
							users.map( user => (
								<li className='m-4 mx-2'>
									<div className='d-inline-block'>
										<Avatar {...stringAvatar(user.fullName)} />
									</div>
									<div className='d-flex justify-content-center' style={ { marginTop: -37 } }>
										<p><b>{ user.fullName }</b></p>
									</div>
									<div className='d-flex justify-content-center' style={ { marginTop: -20 } }>
										<p className='fw-light mb-0'>{ user.job }</p>
									</div>
									<PrimaryContainedButton className='float-end rounded-3 py-1' variant='contained' style={ { marginTop: -40, minWidth: 20, maxWidth: 25 } }>
											<Visibility fontSize='small' />
									</PrimaryContainedButton>
								</li>
							))
						}
					</ul>
				</Container>
			</Item>
		</Box>
	);
}

export default Members
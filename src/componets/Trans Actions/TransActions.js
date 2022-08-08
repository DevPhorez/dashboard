import { Container, Table} from 'react-bootstrap';

import { Box, Avatar } from '@mui/material';
import { Item } from '../../Pages/Home/Home';

import Chip from '../Chip/Chip'

import { useState } from 'react'

function TransActions () {
	
	const [users] = useState([
		{ id: 1, fullName: 'phorez babaee', profile: '', date: '12 Jun 2022', amount: 123, status: 'Approved'},
		{ id: 2, fullName: 'judi babaee', profile: '', date: '23 Jul 2022', amount: 123, status: 'Declined'},
		{ id: 3, fullName: 'ho3ain tohi', profile: '', date: '28 May 2022', amount: 123, status: 'Pending'},
		{ id: 4, fullName: 'Sorosh Hichckas', profile: '', date: '1 Feb 2022', amount: 123, status: 'Approved'},
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
			<Item className='m-auto px-2 pt-4' style={ { paddingBottom: '1.1rem'}} elevation={6}>
				<Container>
					<h4 className='text-lg-start text-center'>Latest TransActions</h4>
					<Table responsive="md">
						<thead>
							<tr>
								<th className='border-0'>Customer</th>
								<th className='border-0 text-center'>Date</th>
								<th className='border-0 text-center'>Amount</th>
								<th className='border-0 text-center'>Status</th>
							</tr>
						</thead>
						<tbody>
							{
								users.map( user => (
									<tr>
										<td className='border-0' style={ { width: 250 } }>
											<div className='d-inline-block'>
												<Avatar {...stringAvatar(user.fullName)} />
											</div>
											<span className='ms-3 fs-6'>{ user.fullName }</span>
										</td>
										
										<td className='border-0 text-center'>
											<p className='text-900'>{ user.date }</p>
										</td>
										
										<td className='border-0 text-center'>
											<p className='text-900'>${ user.amount }</p>
										</td>
										
										<td className='border-0 text-center'>
											<Chip className='user-select-none' label={user.status} />
										</td>
									</tr>
								))
							}
						</tbody>
					</Table>
					
				</Container>
			</Item>
		</Box>
	);
}

export default TransActions
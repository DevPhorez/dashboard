import { useState } from 'react'
import { Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Container, Row, Col } from 'react-bootstrap'

import HomeBox from '../../componets/Box/Box'
import Chart from '../../componets/Chart/Chart'
import Members from '../../componets/Members/Members';
import TransActions from '../../componets/Trans Actions/TransActions';
import { Helmet } from "react-helmet";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: 30,
	borderRadius: 12,
	boxShadow: '0 0 15px -10px rgb(0 0 0 / 75%)'
}));

function Home () {
	
	const [boxes] = useState([
		{ title: 'Revanue', money: 2415, changes: -11.4},
		{ title: 'Sales', money: 2415, changes: -1.4},
		{ title: 'Cost', money: 2415, changes: +2.4},
	])
	
	return (
		<Container fluid>
			<Helmet>
				<title>Phorez | Dashboard</title>
			</Helmet>
			<Row className='d-flex justify-content-end overflow-hidden'>
				<Col className='overflow-hidden px-3' sm={10}>
					<Row>
						{
							boxes.map( box => (
								<HomeBox key={box.title} {...box} />
							))
						}
					</Row>
				</Col>
				<Col className='pe-0' sm={10}>
					<Chart />
				</Col>
				<Col className='pe-0' md={10} lg={4}>
					<Members />
				</Col>
				<Col className='pe-0' md={10} lg={6}>
					<TransActions />
				</Col>
			</Row>
		</Container>
	)
}

export { Item }
export default Home
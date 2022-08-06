import './NavBar.css'

import { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import { MenuList, MenuItem, ListItemIcon, ListItemText } from '@mui/material'
import { Home, Timeline, TrendingUp, PeopleOutline, PersonAddAlt, StorefrontOutlined, AttachMoneyOutlined, ReportProblemOutlined, EmailOutlined, DynamicFeedOutlined, MessageOutlined } from '@mui/icons-material'


function NavBar () {

	const [navbarItems, setNavbarItems] = useState([
		{
			category: 'Dashboard',
			items: [
				{ title: 'Home', icon: <Home />, isActive: true },
				{ title: 'Analytics', icon: <Timeline />, isActive: false },
				{ title: 'Sales', icon: <TrendingUp />, isActive: false },
			]
		},
		{
			category: 'Quick Menu',
			items: [
				{ title: 'Users', icon: <PeopleOutline />, isActive: false },
				{ title: 'New User', icon: <PersonAddAlt />, isActive: false },
				{ title: 'Products', icon: <StorefrontOutlined />, isActive: false },
				{ title: 'Transactions', icon: <AttachMoneyOutlined />, isActive: false },
				{ title: 'Reports', icon: <ReportProblemOutlined />, isActive: false },
			]
		},
		{
			category: 'Notifications',
			items: [
				{ title: 'Mail', icon: <EmailOutlined />, isActive: false },
				{ title: 'Feedback', icon: <DynamicFeedOutlined />, isActive: false },
				{ title: 'Messages', icon: <MessageOutlined />, isActive: false },
			]
		},
	])

	function ChangeNavActive (newActive) {
		let newNavbar = []
		navbarItems.forEach( category => {
			category.items.map( item => {
				if ( item.isActive === true ) {
					item.isActive = false
				}
				if ( item.title === newActive ) {
					item.isActive = true
				}
			})
			newNavbar.push(category)
		})
		setNavbarItems(newNavbar)
	}

	return (
		<Row style={ { maxWidth: '100%' } } >
			<Col lg={3}>
				<Container fluid className='ms-2'>
					{
						navbarItems.map( item => (
							<div key={item.category}>
								<p className='text-black-50 opacity-75 mb-1' style={ { fontSize: 14, fontWeight: 900, letterSpacing: 1 } }>{ item.category }</p>
								<MenuList>
									{
										item.items.map( item => (
											<MenuItem key={item.title} className={`nav-item-ph p-1 mb-1 ${ item.isActive && 'nav-active' }`} onClick={ () => ChangeNavActive(item.title) }>
												{/*<span className='me-2'>{ item.icon }</span> { item.title }*/}
												<ListItemIcon>
													{ item.icon }
												</ListItemIcon>
												<ListItemText>{ item.title }</ListItemText>
											</MenuItem>
										) )
									}
								</MenuList>
							</div>
						))
					}
				</Container>
			</Col>
			<Col lg={9}>
				<h1>hello</h1>
			</Col>
		</Row>
	)
}

export default NavBar
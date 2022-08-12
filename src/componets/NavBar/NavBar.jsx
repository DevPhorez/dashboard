import './NavBar.css'

import { useState } from "react";

import { Container } from "react-bootstrap";

import { MenuList, MenuItem, ListItemIcon, ListItemText, Fab } from '@mui/material'
import { Home as HomeIcon, Timeline, TrendingUp, PeopleOutline, PersonAddAlt, StorefrontOutlined, AttachMoneyOutlined, ReportProblemOutlined, EmailOutlined, DynamicFeedOutlined, MessageOutlined } from '@mui/icons-material'

import LGNavBar from './LG NavBar/LGNavBar';
import MDNavBar from './MD NavBar/MDNavBar';

function NavBar () {
	
	const [navbarItems, setNavbarItems] = useState([
		{
			category: 'Dashboard',
			items: [
				{ title: 'Home', icon: <HomeIcon />, link: '/', isActive: true },
				{ title: 'Analytics', icon: <Timeline />, isActive: false },
				{ title: 'Sales', icon: <TrendingUp />, link: '/sales', isActive: false },
			]
		},
		{
			category: 'Quick Menu',
			items: [
				{ title: 'Users', icon: <PeopleOutline />, link: '/users', isActive: false },
				{ title: 'New User', icon: <PersonAddAlt />, link: '/new-users', isActive: false },
				{ title: 'Products', icon: <StorefrontOutlined />, link: '/products', isActive: false },
				{ title: 'Transactions', icon: <AttachMoneyOutlined />, link: '/transactions', isActive: false },
				{ title: 'Reports', icon: <ReportProblemOutlined />, isActive: false },
			]
		},
		{
			category: 'Notifications',
			items: [
				{ title: 'Mail', icon: <EmailOutlined />, link: '/mails', isActive: false },
				{ title: 'Feedback', icon: <DynamicFeedOutlined />, link: '/feedbacks', isActive: false },
				{ title: 'Messages', icon: <MessageOutlined />, link: '/messages', isActive: false },
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
		<>
			<LGNavBar navbarItems={navbarItems} setNavbarItems={setNavbarItems} onChange={ChangeNavActive} />
			<MDNavBar navbarItems={navbarItems} setNavbarItems={setNavbarItems} onChange={ChangeNavActive} />
		</>
	)
}

export default NavBar
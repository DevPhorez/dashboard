import { Container } from "react-bootstrap";

import { MenuList, MenuItem, ListItemIcon, ListItemText } from '@mui/material'

import { Link } from 'react-router-dom'

function LGNavBar (props) {
	
	return (
		<div className='position-sticky d-lg-flex d-none justify-content-start float-start bg-white pt-3' style={ { maxWidth: 212.828, width: 212.828, zIndex: 99 } } >
			<Container fluid className='ms-2'>
				{
					props.navbarItems.map( item => (
						<div key={item.category}>
							<p className='text-black-50 opacity-75 mb-1' style={ { fontSize: 14, fontWeight: 900, letterSpacing: 1 } }>{ item.category }</p>
							<MenuList>
								{
									item.items.map( item => (
										<Link key={item.title} className='text-decoration-none text-900' to={`${item.link}`}>
											<MenuItem className={`nav-item-ph p-1 mb-1 ${ item.isActive && 'nav-active' }`} onClick={ () => props.onChange(item.title) }>
												<ListItemIcon>
													{ item.icon }
												</ListItemIcon>
												<ListItemText>{ item.title }</ListItemText>
											</MenuItem>
										</Link>
									) )
								}
							</MenuList>
						</div>
					))
				}
			</Container>
		</div>
	)
}

export default LGNavBar
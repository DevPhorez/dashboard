import '../NavBar.css'

import { useState } from 'react';

import {Backdrop, SpeedDial, SpeedDialIcon, SpeedDialAction, MenuList, MenuItem, ListItemIcon} from '@mui/material';
import { MoreHoriz } from '@mui/icons-material'

import { Link } from 'react-router-dom'

import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import {IconButton, List, ListItem, ListSubheader, ListItemText, Popover, Badge} from "@mui/material";
import { Notifications } from "@mui/icons-material";
import { Nav } from "react-bootstrap";

export default function MDNavBar (props) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	
	function moreItems () {
		return (
			<PopupState variant="popover" popupId="demo-popup-popover">
				{(popupState) => (
					<div>
						<SpeedDialAction
							key={'more'}
							icon={<MoreHoriz />}
							tooltipTitle={'More'}
							tooltipOpen
							// onClick={  }
						/>
						
						<Popover
							{...bindPopover(popupState)}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
						>
							<List
								sx={ {
									width: 300,
									maxWidth: 300,
									position: 'relative',
									overflow: 'auto',
									maxHeight: 300,
									'& ul': { padding: 0 },
								} }
							>
								{
									props.navbarItems.map( item => (
										<li key={ item.category }>
											<ul>
												<ListSubheader>
													<p className='text-black-50 opacity-75 mb-1' style={ { fontSize: 14, fontWeight: 900, letterSpacing: 1 } }>{ item.category }</p>
												</ListSubheader>
												<MenuList>
													{
														item.items.map( item => (
															<MenuItem key={item.title} className={`nav-item-ph mx-2 mb-1 p-1 ${ item.isActive && 'nav-active' }`} onClick={ () => props.onChange(item.title) }>
																<ListItemIcon>
																	{ item.icon }
																</ListItemIcon>
																<ListItemText>{ item.title }</ListItemText>
															</MenuItem>
														) )
													}
												</MenuList>
											</ul>
										</li>
									))
								}
							</List>
						</Popover>
					</div>
				)}
			</PopupState>
		)
	}
	
	return (
		<>
			<Backdrop open={open} sx={ { zIndex: 200 } } />
			<SpeedDial
				ariaLabel="SpeedDial tooltip"
				sx={ { position: 'fixed', bottom: 16, right: 16, zIndex: 200 } }
				icon={<SpeedDialIcon />}
				onClose={handleClose}
				onOpen={handleOpen}
				open={open}
				color={'error'}
				className='d-lg-none'
			>
				{
					props.navbarItems[0].items.map( item => (
						<SpeedDialAction
							key={item.title}
							icon={item.icon}
							tooltipTitle={item.title}
							tooltipOpen
							onClick={handleClose}
							className={ item.isActive && 'nav-md-active' }
						/>
					))
				}
				<SpeedDialAction
					key={'more'}
					icon={<MoreHoriz />}
					tooltipTitle={'More'}
					tooltipOpen
					onClick=''
				/>
			</SpeedDial>
		</>
	);
}

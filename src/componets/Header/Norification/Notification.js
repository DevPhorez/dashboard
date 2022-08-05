import { useState } from 'react';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import {IconButton, List, ListItem, ListItemText, Popover, Badge, Typography, Divider} from "@mui/material";
import { Notifications } from "@mui/icons-material";
import { Nav } from "react-bootstrap";

function Notification () {
	const [notifications] = useState([
		{
			id: 1,
			title: 'Aggregate data like in Excel, but easier!',
			body: 'Aggregation functions and summary rows are now available in the MUI X Premium Data Grid. Check out our blog post.',
		},
		{
			id: 2,
			title: 'MUI\'s company retreat in Tenerife',
			body: 'In late June 2022, MUI team members gathered in the Canary Islands for a company retreat. Check out the recap here.',
		},
		{
			id: 3,
			title: 'Get a first look at Joy UI 🚀',
			body: 'Joy UI is MUI\'s new starting point for your design system. Check out the blog post to see what\'s in store for this new library.',
		},
		{
			id: 4,
			title: 'Premium passengers, please proceed to the boarding gate 🚀',
			body: 'Check out our blog post introducing the MUI X Premium plan, and the new licensing model.',
		},
	])
	
	return (
		<PopupState variant="popover" popupId="demo-popup-popover">
			{(popupState) => (
				<div>
					<Nav.Link>
						<IconButton>
							<Badge badgeContent={notifications.length} color="error">
								<Notifications className='text-primary' aria-describedby={ 'notifications' } { ...bindTrigger(popupState) } />
							</Badge>
						</IconButton>
					</Nav.Link>
					
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
								notifications.map( (notification, index) => (
									<ListItem key={ notification.id } className='d-block p-0'>
										<ListItemText className='px-3'>
											<p className='mb-1'><b>{ notification.title }</b></p>
											<>
												<Typography
													sx={ { display: 'inline' } }
													component="span"
													variant="body2"
													color="text.primary"
												>
													Ali Connors
												</Typography>
												{" — I'll be in your neighborhood doing errands this…"}
											</>
										</ListItemText>
										{
											notifications.length - 1 !== index && (
												<Divider className='my-3' sx={ { opacity: '10%' } } color={'1000'} />
											)
										}
									</ListItem>
								))
							}
						</List>
					</Popover>
				</div>
			)}
		</PopupState>
	);
}

export default Notification

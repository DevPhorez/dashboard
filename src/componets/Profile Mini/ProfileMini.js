import { useState } from "react";

import { SuccessOutlineButton } from "../CustomComponets"
import {
	ListItemAvatar,
	Avatar,
	Popover,
	IconButton,
	Badge,
	List,
	ListItem,
	ListItemText,
	Typography, Divider
} from "@mui/material";
import {Container, Nav} from "react-bootstrap";
import PopupState, {bindPopover, bindTrigger} from "material-ui-popup-state";
import {Notifications} from "@mui/icons-material";

function ProfileMini (props) {
	
	const [adminInfo] = useState({
		id: 1,
		fullName: 'phorez',
		aboutMe: 'Lorem ipsum my dolor is sit and amet, about consectetur yes adipisicing bro elit. Alias is consequatur and eius eveniet magni me omnis to quibusdam quisquam?'
	})
	
	return (
		<PopupState variant="popover" popupId="demo-popup-popover">
			{(popupState) => (
				<>
					<ListItemAvatar { ...bindTrigger(popupState) }>
						<Avatar src='Images/profile.jfif'></Avatar>
					</ListItemAvatar>
					
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
						<Container>
							<ListItemAvatar className='d-flex justify-content-center' style={ { maxWidth: 300, width: 300 } }>
								<Avatar className='my-3' style={ { width: 100, height: 100 } } src='Images/profile.jfif'></Avatar>
							</ListItemAvatar>
							<h3 className='text-center text-success'>
								{ adminInfo.fullName }
							</h3>
							
							<h6 className='text-primary ms-3'>
								About Me:
							</h6>
							<div style={ { width: 300 } } >
								<p className='text-center text-900 px-4'>
									{ adminInfo.aboutMe }
								</p>
							</div>
							<div className='d-grid mb-3'>
								<SuccessOutlineButton variant="outlined">See more and Edit</SuccessOutlineButton>
							</div>
						</Container>
					</Popover>
				</>
			)}
		</PopupState>
	);
}

export default ProfileMini
import { useState } from 'react';

import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Button,
	Modal,
	Box,
	IconButton,
	FormControlLabel,
	Switch,
	Chip, Alert
} from '@mui/material'
import { Close, Edit } from "@mui/icons-material";
import { style as modalStyle } from "../../Modal/Modal";
import { styled } from "@mui/material/styles";
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';

import { MaterialUISwitch as StatusToggleButton } from '../../../Utils'
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
	width: 62,
	height: 34,
	padding: 7,
	'& .MuiSwitch-switchBase': {
		margin: 1,
		padding: 0,
		transform: 'translateX(6px)',
		'&.Mui-checked': {
			color: '#fff',
			transform: 'translateX(22px)',
			'& .MuiSwitch-thumb:before': {
				backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="${encodeURIComponent('#fff')}" xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><path d="M14 7h-4c-1.1 0-2 .9-2 2v6h2v7h4v-7h2V9c0-1.1-.9-2-2-2z"/> <circle  cx="12" cy="4" r="2"></circle> </svg>')`,
			},
			'& + .MuiSwitch-track': {
				opacity: 1,
				backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
			},
		},
	},
	'& .MuiSwitch-thumb': {
		backgroundColor: '#d099c5',
		width: 32,
		height: 32,
		'&:before': {
			content: "''",
			position: 'absolute',
			width: '100%',
			height: '100%',
			left: 0,
			top: 0,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="${encodeURIComponent('#fff')}" xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><circle cx="14.5" cy="10.5" r="1.25"></circle><circle cx="9.5" cy="10.5" r="1.25"></circle><path d="M22.94 12.66c.04-.21.06-.43.06-.66s-.02-.45-.06-.66c-.25-1.51-1.36-2.74-2.81-3.17-.53-1.12-1.28-2.1-2.19-2.91C16.36 3.85 14.28 3 12 3s-4.36.85-5.94 2.26c-.92.81-1.67 1.8-2.19 2.91-1.45.43-2.56 1.65-2.81 3.17-.04.21-.06.43-.06.66s.02.45.06.66c.25 1.51 1.36 2.74 2.81 3.17.52 1.11 1.27 2.09 2.17 2.89C7.62 20.14 9.71 21 12 21s4.38-.86 5.97-2.28c.9-.8 1.65-1.79 2.17-2.89 1.44-.43 2.55-1.65 2.8-3.17zM19 14c-.1 0-.19-.02-.29-.03-.2.67-.49 1.29-.86 1.86C16.6 17.74 14.45 19 12 19s-4.6-1.26-5.85-3.17c-.37-.57-.66-1.19-.86-1.86-.1.01-.19.03-.29.03-1.1 0-2-.9-2-2s.9-2 2-2c.1 0 .19.02.29.03.2-.67.49-1.29.86-1.86C7.4 6.26 9.55 5 12 5s4.6 1.26 5.85 3.17c.37.57.66 1.19.86 1.86.1-.01.19-.03.29-.03 1.1 0 2 .9 2 2s-.9 2-2 2zM7.5 14c.76 1.77 2.49 3 4.5 3s3.74-1.23 4.5-3h-9z"/></svg>')`,
		},
	},
	'& .MuiSwitch-track': {
		opacity: 1,
		backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
		borderRadius: 20 / 2,
	},
}));

const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: 48 * 4.5 + 8,
			width: 250,
			color: '#d099c5',
		},
	},
};

function getStyles(name: string, personName, theme: Theme) {
	return {
		fontWeight:
			personName.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

function Size () {
	const [sizes, setSizes] = useState([
		{ category: 'Adult', items: ['SM', 'MD', 'LG', 'XL', 'XXl'], isCurrent: true },
		{ category: 'Baby', items: ['2-4 Years', '4-6 Years', '6-8 Years', '8-10 Years', '10-12 Years'], isCurrent: false},
	])
	
	const [availableSizes, setAvailableSizes] = useState(['SM', 'MD', 'LG', 'XL', 'XXl'])
	
	const [displayStatus, setDisplayStatus] = useState(true)
	const [open, setOpen] = useState(false);
	const [showDisplay, setShowDisplay] = useState(false)
	const [size, setSize] = useState([availableSizes[0]])
	const [showAlert, setShowAlert] = useState(false)
	
	const theme = useTheme();
	
	if (displayStatus) {
		const handleChange = (event) => {
			const {
				target: {value},
			} = event;
			
			// TODO don't let delete all size :(
			// if (!availableSizes.length === 1) {
			setAvailableSizes(value);
			// } else {
			// 	setShowAlert(true)
			// }
		};
		
		const handleOpen = () => setOpen(true);
		const handleClose = () => {
			setOpen(false)
			setShowDisplay(false)
		};
		
		function ChangeCategorySize() {
			sizes.some(size => {
				size.isCurrent = !size.isCurrent
				if (size.isCurrent) {
					setSize(size.items[0])
				}
			})
			
			setAvailableSizes(sizes.find(size => size.isCurrent).items)
			console.log(availableSizes[0])
		}
		
		return (
			<div className='mt-5'>
				<h5 onDoubleClick={() => {
					setShowDisplay(true)
					handleOpen()
				}}>
					Color: {size}
				</h5>
				<FormControl color={'primary'} sx={{m: 1, minWidth: 120}}>
					<InputLabel htmlFor="size-select">Size</InputLabel>
					<Select defaultValue="0" id="size-select" label="Size"
							onChange={(event) => setSize(sizes.find((size, index) => {
								if (size.isCurrent) {
									return true
								}
							}).items[event.target.value])}>
						{
							availableSizes.map((size, index) => (
								<MenuItem value={index}>{size}</MenuItem>
							))
						}
					</Select>
				</FormControl>
				<br/>
				<Button className='ms-1' startIcon={<Edit color={'secondary'}/>} onClick={() => {
					handleOpen()
				}
				}>Edit</Button>
				<Modal
					sx={{backgroundColor: 'yellow'}}
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
					className='backdrop'
				>
					<Box className='p-3' style={{width: 450, maxWidth: 450}} sx={modalStyle}>
						<div className='header d-flex justify-content-between'>
							<h3>Edit</h3>
							<IconButton onClick={handleClose}>
								<Close/>
							</IconButton>
						</div>
						<hr className='mt-1'/>
						<div className='body'>
							{
								showDisplay ? (
									<FormControlLabel
										control={<StatusToggleButton sx={ { m: 1 } } defaultChecked />}
										label="Hide / Show"
										onClick={ () => setDisplayStatus(prevState => !prevState) }
									/>
								) : (
									<>
										{
											showAlert &&
											<Alert className='my-3' severity={'error'} onClose={() => setShowAlert(false)}>Available
												size can't be less than One !!!</Alert>
										}
										<FormControlLabel
											control={<MaterialUISwitch sx={{m: 1}} defaultChecked/>}
											label="Baby / Adult"
											onClick={() => {
												ChangeCategorySize()
											}}
										/>
										<div>
											<FormControl sx={{m: 1, width: 300}}>
												<InputLabel id="available-sizes">Available Sizes</InputLabel>
												<Select
													labelId="available-sizes"
													id="multiple-size"
													multiple
													value={availableSizes}
													onChange={handleChange}
													input={<OutlinedInput id="select-multiple-size" label="Availble Sizes \t"/>}
													renderValue={(selected) => (
														<Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
															{selected.map((value) => (
																<Chip key={value} label={value}/>
															))}
														</Box>
													)}
													MenuProps={MenuProps}
												>
													{sizes.map(category => (
														category.isCurrent && category.items.map(size => (
															<MenuItem
																key={size}
																value={size}
																style={getStyles(size, availableSizes, theme)}
															>
																{size}
															</MenuItem>
														))
													))}
												</Select>
											</FormControl>
										</div>
									</>
								)
							}
						</div>
					</Box>
				</Modal>
			</div>
		)
	}
}

export default Size
import './Product.css'

import { useState } from 'react';
import { useParams } from "react-router-dom";

import { Container, Row, Col } from 'react-bootstrap'

import {
	IconButton,
	Alert,
	Breadcrumbs,
	Typography,
	Link,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Popover,
	Modal,
	Box,
	Button
} from '@mui/material'
import { MoreHoriz, FavoriteBorder, Share, ReportGmailerrorred, Close, ContentCopy, WhatsApp, Twitter, Facebook, Star, Add } from '@mui/icons-material'

import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";

import '../../componets/Modal/Modal.css'
import { style as modalStyle } from '../../componets/Modal/Modal'

import { CopyToClipboard } from 'react-copy-to-clipboard';

import Options from '../../componets/Our Options/Options';

import Image from '../../componets/Product Detail/Image/Image'
import Features from '../../componets/Product Detail/Features/Features'
import Colors from '../../componets/Product Detail/Colors/Colors'
import Size from '../../componets/Product Detail/Size/Size'
import Tabs from '../../componets/Product Detail/Tabs/Tabs'

import { products } from '../../data'

function RateSum (comments) {
	if (comments.length === 0) {
		return 5
	} else {
		let rates = null
		comments.forEach( comment => {
			rates += comment.rate
		})
		
		const result = parseFloat(rates / comments.length).toFixed(1)
		
		if (result > 5) {
			return 5
		}
		return result
	}
}

function Product () {
	
	const params = useParams()
	
	const [currentProduct] = useState(products.find( product => product.id === +params.productID ))
	
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	
	const [copyLink, setCopyLink] = useState('copy link')
	const CopyLinkHandler = () => {
		setCopyLink('link copied')
		setTimeout( () => {
			setCopyLink('copy link')
		}, 5000 )
	}
	
	return (
		<Container className='mt-4'>
			<Alert severity={'info'}>Double click to update values</Alert>
			<div className='topbar position-relative d-flex mt-3'>
				<h2>
					MIS Monitor
				</h2>
				<PopupState variant="popover" popupId="demo-popup-popover">
					{(popupState) => (
						<>
							<IconButton { ...bindTrigger(popupState) } color={'secondary'} style={ { fontSize: '36px' } } >
								<MoreHoriz fontSize={'inherit'} />
							</IconButton>
							
							<Popover
								{...bindPopover(popupState)}
								anchorOrigin={{
									vertical: 'center',
									horizontal: 'left',
								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
							>
								<nav style={ { width: 200 } } aria-label="main mailbox folders">
									<List>
										<ListItem disablePadding>
											<ListItemButton >
												<ListItemIcon>
													<FavoriteBorder />
												</ListItemIcon>
												<ListItemText  primary="Add to Favorite" />
											</ListItemButton>
										</ListItem>
										<ListItem onClick={handleOpen} disablePadding>
											<ListItemButton >
												<ListItemIcon>
													<Share />
												</ListItemIcon>
												<ListItemText  primary="Share" />
											</ListItemButton>
										</ListItem>
										<ListItem disablePadding>
											<ListItemButton >
												<ListItemIcon>
													<ReportGmailerrorred />
												</ListItemIcon>
												<ListItemText  primary="Report" />
											</ListItemButton>
										</ListItem>
									</List>
								</nav>
								<Modal
									sx={ { backgroundColor: 'yellow' } }
									open={open}
									onClose={handleClose}
									aria-labelledby="modal-modal-title"
									aria-describedby="modal-modal-description"
									className='backdrop'
								>
									<Box className='p-3' style={ { width: 450, maxWidth: 450 } } sx={modalStyle} >
										<div className='header d-flex justify-content-between'>
											<h3>Share</h3>
											<IconButton onClick={ handleClose }>
												<Close />
											</IconButton>
										</div>
										<hr className='mt-1' />
										<div className='body'>
											<p className='text-900'>share this product with your friend</p>
											<CopyToClipboard text={window.location.href}>
												<Button className='mb-3 p-2' fullWidth color={'secondary'} variant='outlined' startIcon={<ContentCopy />} onClick={ CopyLinkHandler }>
													{copyLink}
												</Button>
											</CopyToClipboard>
											<Row>
												<Col md={12} lg={6}>
													<Button className='my-2 p-2 text-capitalize' style={ { backgroundColor: '#43A047', color: '#fff' } } fullWidth variant='contained' startIcon={<WhatsApp />}>Whats App</Button>
												</Col>
												<Col md={12} lg={6}>
													<Button className='my-2 p-2 text-capitalize' style={ { backgroundColor: '#4FC3F7', color: '#fff' } } fullWidth variant='contained' startIcon={<Twitter />}>Twitter</Button>
												</Col>
												<Col md={12} lg={6}>
													<Button className='my-2 p-2 text-capitalize' style={ { backgroundColor: '#1976D2', color: '#fff' } } fullWidth variant='contained' startIcon={<Facebook />}>Face Book</Button>
												</Col>
											</Row>
										</div>
									</Box>
								</Modal>
							</Popover>
						</>
					)}
				</PopupState>
			</div>
			<Row>
				<Col md={12} lg={5}>
					<Image product={currentProduct} />
				</Col>
				<Col className='mt-half-5' md={12} lg={7}>
					<Breadcrumbs aria-label="breadcrumb">
						<Link underline="hover" color="inherit" href="/">
							MUI
						</Link>
						<Link
							underline="hover"
							color="inherit"
							href="/material-ui/getting-started/installation/"
						>
							Core
						</Link>
						<Typography color="text.primary">Breadcrumbs</Typography>
					</Breadcrumbs>
					<hr className='mb-0' />
					<div style={ { fontSize: 12 } }>
						<span>
							<Star style={ { fontSize: 16, color: '#F9A825' } } fontSize='inherit' color='inherit' />
						</span>
						{/*<span className='fw-bold'>3.3 </span>*/}
						<span className='fw-bold'>{ RateSum(currentProduct.comments) } </span>
						<span className='text-black-50'>({ currentProduct.comments.length })</span>
						
						<span className='dotted text-primary fw-bold pointer'>
							{ currentProduct.comments.length } Comments
						</span>
						
						<span className='dotted text-primary fw-bold pointer'>
							2 Questions
						</span>
					</div>
					<Size />
					<Colors colors={ currentProduct.colors } />
					<Features open={open} setOpen={setOpen} features={ currentProduct.features }/>
				</Col>
			</Row>
			<Row>
				<Options/>
				<Tabs product={currentProduct} />
			</Row>
		</Container>
	)
}

export { RateSum }
export default Product
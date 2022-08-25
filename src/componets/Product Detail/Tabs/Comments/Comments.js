import './Comments.css'

import * as React from "react";
import { Rating, Box, Button, IconButton, TextField, Modal, Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { Container, Row, Col, Badge } from "react-bootstrap";
import { style as modalStyle } from "../../../Modal/Modal";
import { Close, Sort, ThumbUpOffAlt, ThumbDownOffAlt, Add, HorizontalRule, Delete } from "@mui/icons-material";

import { Link } from 'react-router-dom'

const labels: { [index: string]: string } = {
	1: 'Useless',
	2: 'Poor',
	3: 'Ok',
	4: 'Good',
	5: 'Excellent',
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 10,
	borderRadius: 5,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor: '#51bfa0',
	},
}));

function Comments (props) {
	
	const [titleValue, setTitleValue] = React.useState('')
	const [negativePointValue, setNegativePointValue] = React.useState('')
	const [positivePointValue, setPositivePointValue] = React.useState('')
	const [descriptionValue, setDescriptionValue] = React.useState('')
	const [isAnonymousValue, setIsAnonymousValue] = React.useState(false)
	// rating
	const [rateValue, setRateValue] = React.useState(5);
	const [hover] = React.useState(-1);
	
	
	const [negativePointError, setNegativePointError] = React.useState(false)
	const [positivePointError, setPositivePointError] = React.useState(false)
	
	const [negativePoints, setNegativePoints] = React.useState([])
	const [positivePoints, setPositivePoints] = React.useState([])
	
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false)
	};
	
	function NewPositivePoint () {
		if (positivePointValue.length > 3) {
			setPositivePoints(prevState => [...prevState, [positivePoints.length + 1, positivePointValue]])
			setPositivePointValue('')
			setPositivePointError(false)
		} else {
			setPositivePointError(true)
		}
	}
	function NewNegativePoint () {
		if (negativePointValue.length > 3) {
			setNegativePoints(prevState => [...prevState, [negativePoints.length + 1, negativePointValue]])
			setNegativePointValue('')
			setNegativePointError(false)
		} else {
			setNegativePointError(true)
		}
	}
	
	function AddNewComment () {
		const date = new Date()
		const year = date.getFullYear()
		const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		const month = months[date.getMonth()]
		const day = date.getDay()
		
		const newComment = {
			id: props.product.comments.length + 1,
			rate: rateValue,
			owner: 'phorez',
			title: titleValue,
			positivePoints,
			negativePoints,
			description: descriptionValue,
			isAnonymous: isAnonymousValue,
			date: `${month} / ${day} / ${year}`,
		}
		props.product.comments.push(newComment)
		
		setRateValue(5)
		setTitleValue('')
		setDescriptionValue('')
		setPositivePointValue('')
		setNegativePointValue('')
		setPositivePoints([])
		setNegativePoints([])
		setIsAnonymousValue(false)
		
		handleClose()
	}
	
	function RateSum (comments) {
		if (comments.length === 0) {
			return 5
		} else {
			let rates = null
			comments.forEach( comment => {
				rates += comment.rate
			})
			
			return Math.round(rates / comments.length)
		}
	}
	
	return (
		<Container>
			<Row>
				<Col sm={4}>
					<div className='mb-4'>
						<p className='d-inline h3'>4</p>
						<p className='d-inline text-900 fw-bold opacity-50' style={ { fontSize: 12 } }> from 5</p>
					</div>
					<div className='d-flex align-items-center'>
						<Rating name="read-only" value={ RateSum(props.product.comments) } readOnly />
						<p className='d-inline-block text-900 fw-bold opacity-50 m-0 mt-1 ms-3' style={ { fontSize: 12 } }>
							{ props.product.comments.length } Comments
						</p>
					</div>
					<div className='mt-4'>
						<div className='my-3'>
							<p className='text-900 fw-bold opacity-75' style={ { fontSize: 14 } }>Quality</p>
							<div className='position-relative'>
								<BorderLinearProgress style={ { width: '90%' } } variant="determinate" value={82} />
								<p className='position-absolute end-0 d-inline' style={ { fontSize: 14, top: -5 } }>82%</p>
							</div>
						</div>
						<div className='my-3'>
							<p className='text-900 fw-bold opacity-75' style={ { fontSize: 14 } }>Quality</p>
							<div className='position-relative'>
								<BorderLinearProgress style={ { width: '90%' } } variant="determinate" value={82} />
								<p className='position-absolute end-0 d-inline' style={ { fontSize: 14, top: -5 } }>82%</p>
							</div>
						</div>
						<div className='my-3'>
							<p className='text-900 fw-bold opacity-75' style={ { fontSize: 14 } }>Quality</p>
							<div className='position-relative'>
								<BorderLinearProgress style={ { width: '90%' } } variant="determinate" value={82} />
								<p className='position-absolute end-0 d-inline' style={ { fontSize: 14, top: -5 } }>82%</p>
							</div>
						</div>
						<div className='my-3'>
							<p className='text-900 fw-bold opacity-75' style={ { fontSize: 14 } }>Quality</p>
							<div className='position-relative'>
								<BorderLinearProgress style={ { width: '90%' } } variant="determinate" value={82} />
								<p className='position-absolute end-0 d-inline' style={ { fontSize: 14, top: -5 } }>82%</p>
							</div>
						</div>
						<div className='my-3'>
							<p className='text-900 fw-bold opacity-75' style={ { fontSize: 14 } }>Quality</p>
							<div className='position-relative'>
								<BorderLinearProgress style={ { width: '90%' } } variant="determinate" value={82} />
								<p className='position-absolute end-0 d-inline' style={ { fontSize: 14, top: -5 } }>82%</p>
							</div>
						</div>
					</div>
					<div className='mt-4 mx-2'>
						<p className='text-900 fw-bold opacity-75' style={ { fontSize: 14 } }>
							You also add a comment on this product
						</p>
						<Button className='py-2 rounded-3' fullWidth variant={'outlined'} onClick={ handleOpen }>
							Add Comment
						</Button>
						<Modal
							sx={ { backgroundColor: 'yellow' } }
							open={ open }
							onClose={ handleClose }
							aria-labelledby="modal-modal-title"
							aria-describedby="modal-modal-description"
							className='backdrop'
						>
							<Box className='p-0 pt-3 ' style={ { width: 750, maxWidth: 750 } } sx={modalStyle} >
								<div className='header ps-3'>
									<div className='d-flex justify-content-between'>
										<h4>Your Comment</h4>
										<IconButton onClick={ handleClose }>
											<Close />
										</IconButton>
									</div>
									<p className='text-black-50 fw-bold opacity-75' style={ { fontSize: 14 } }>About { props.product.title }</p>
									<hr className='mt-1 opacity-25 me-3 mb-0' />
								</div>
								<div className='body overflow-auto' style={ { maxHeight: '400px' } }>
									<Container>
										<Row className='ps-3'>
											<Col md={12} lg={6}>
												<div className='d-flex justify-content-start align-items-center mt-3'>
													<Rating
														size={'large'}
														name="simple-controlled"
														value={rateValue}
														onChange={(event, newValue) => {
															setRateValue(newValue);
														}}
													/>
													{rateValue !== null && (
														<Box sx={{ ml: 2, marginBottom: 0 }}>{labels[hover !== -1 ? hover : rateValue]}</Box>
													)}
												</div>
												<hr className='text-black-50 opacity-25' />
												<div className='mb-5 mt-4'>
													<TextField
														label="Title"
														fullWidth
														value={ titleValue }
														onChange={ (event) => setTitleValue(event.target.value) }
														required
													/>
												</div>
												
												<div className='my-5'>
													<div className='d-flex'>
														<TextField
															label="Positive points"
															fullWidth
															value={ positivePointValue }
															onChange={ (event) => setPositivePointValue(event.target.value) }
															onKeyUp={ (event) => event.key === 'Enter' && NewPositivePoint() }
															error={positivePointError}
															helperText={ positivePointError && 'The Text most be more than 3 characters'}
														/>
														<Add className='d-flex align-self-center text-success pointer' color={'inherit'} fontSize={'inherit'} style={ { right: 5, top: 13, fontSize: '30px' } } onClick={ NewPositivePoint } />
													</div>
													{
														positivePoints.map( item => (
															<div key={item[0]} className='position-relative d-flex my-2 w-100'>
																<Add color={'secondary'} />
																<p className='m-0'>{item[1]}</p>
																<Delete className='position-absolute end-0 text-black-50 opacity-75 pointer' color={'inherit'} onClick={ () => setPositivePoints(prevState => prevState.filter( point => point[0] !== item[0] )) } />
															</div>
														))
													}
												</div>
												
												<div className='my-5'>
													<div className='d-flex'>
														<TextField
															label="Negative points"
															fullWidth
															value={ negativePointValue }
															onChange={ (event) => setNegativePointValue(event.target.value) }
															onKeyUp={ (event) => event.key === 'Enter' && NewNegativePoint() }
															error={negativePointError}
															helperText={ negativePointError && 'The Text most be more than 3 characters'}
														/>
														<Add className='d-flex align-self-center text-success pointer' color={'inherit'} fontSize={'inherit'} style={ { right: 5, top: 13, fontSize: '30px' } } onClick={ NewNegativePoint } />
													</div>
													{
														negativePoints.map( item => (
															<div key={item[0]} className='position-relative d-flex my-2 w-100'>
																<HorizontalRule color={'error'} />
																<p className='m-0'>{item[1]}</p>
																<Delete className='position-absolute end-0 text-black-50 opacity-75 pointer' color={'inherit'} onClick={ () => setNegativePoints(prevState => prevState.filter( point => point[0] !== item[0] )) } />
															</div>
														))
													}
												</div>
												
												<div className='mt-5 mb-3'>
													<TextField
														label="Description"
														placeholder='Wright for us...'
														multiline
														rows={4}
														required
														fullWidth
														value={ descriptionValue }
														onChange={ (event) => setDescriptionValue(event.target.value) }
													/>
												</div>
												
												<div className='d-flex align-items-center mb-3'>
													<Checkbox
														color='secondary'
														checked={isAnonymousValue}
														onChange={ () => setIsAnonymousValue(!isAnonymousValue) }
														inputProps={{ 'aria-label': 'controlled' }}
														className='m-0'
													/>
													<p className='text-900 fw-bold opacity-75 mb-0' style={ { fontSize: 14 } }>Send comments anonymously</p>
												</div>
											</Col>
											
											<Col className='d-none d-lg-block' lg={6}>
												<div className='box'>
													<p className='h5'>Lorem ipsum dolor sit amet, consectetur</p>
													<p className='text-900 opacity-75 mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at eos omnis? Beatae, culpa cum delectus dignissimos est eum illo nisi non quaerat sed tenetur totam veniam? Amet, exercitationem, ipsum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda autem consequatur dicta ea enim illum laborum quas quo, ratione. Culpa ea, explicabo modi perferendis porro quaerat recusandae velit vitae!lorem	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto aspernatur autem consequuntur distinctio dolores dolorum illum in.</p>
												</div>
											</Col>
										</Row>
										<Row>
											<hr className='opacity-25 me-3 mb-1' />
										</Row>
										<Row className='p-4'>
											<Col className='order-1 order-lg-0' md={12} lg={6}>
												<Button color={'primary'} variant='contained' fullWidth sx={
													{ color: '#fff', paddingTop: '12px', paddingBottom: '12px', '&:hover': { backgroundColor: '#d099c5' } }
												} onClick={ AddNewComment }>
													Add comment
												</Button>
											</Col>
											<Col className='d-flex align-items-center justify-content-lg-start justify-content-center order-0 order-lg-1' md={12} lg={6}>
												<p className='text-center mb-lg-0' style={ { fontSize: 12 } }>Add a comment means agreeing with <Link className='text-decoration-none' to="/"><b className='text-success'>Phorez emissions.</b></Link></p>
											</Col>
										</Row>
									</Container>
								</div>
							</Box>
						</Modal>
					</div>
				</Col>
				<Col className='ps-5' sm={8}>
					<div className='sorting d-flex justify-content-between mb-4' style={ { fontSize: 14, width: '70%' } }>
						<p className='text-dark fw-bold'>
							<Sort className='me-2' />
							Sorting by
						</p>
						<p className='text-primary pointer'>Latest</p>
						<p className='text-900 pointer'>the most Helpful</p>
						<p className='text-900 pointer'>Customers Comment</p>
					</div>
					<div className='comments'>
						{ props.product.comments.length > 0 ? (
							<>
								{
									props.product.comments.map( comment => (
										<>
											<div key={comment.id} className='comment mt-5'>
												<p className='d-flex align-self-center h5'>
													<Badge className={`me-3 bg-rating-${comment.rate}`}>{ comment.rate }.0</Badge>{ comment.title }
												</p>
												<div className='pt-2 ps-5'>
													<div className='border-bottom pb-3' style={ { fontSize: 12, marginBottom: '34px' } }>
												<span className='text-black-50 opacity-75 fw-bold'>
													{ comment.isAnonymous ? ('Phorez\'s customer') : (comment.owner) }
												</span>
														<span className='dotted text-black-50 opacity-75 fw-bold'>
													{ comment.date }
												</span>
													</div>
													<p className='text-900 mb-3 px-1 pb-2'>{ comment.description }</p>
													{
														comment.positivePoints.map( item => (
															<div key={item[0]} className='d-flex my-2'>
																<Add color={'secondary'} />
																<p className='m-0'>{item[1]}</p>
															</div>
														))
													}
													{
														comment.negativePoints.map( item => (
															<div key={item[0]} className='d-flex my-2'>
																<HorizontalRule color={'error'} />
																<p className='m-0'>{item[1]}</p>
															</div>
														))
													}
													<hr className='text-black-50 opacity-25'/>
												</div>
												<div className='d-flex justify-content-end align-items-center text-900 opacity-75 mt-4'>
													<p className='mb-0 me-3' style={ { fontSize: '14px' } }>
														Was this comment helpful ?
													</p>
													<IconButton color={'success'}>
														<div className='d-flex align-items-center pointer'>
															<ThumbUpOffAlt color={'success'} />
															<p style={ { fontSize: '12px', color: '#2e7d32' } }>3</p>
														</div>
													</IconButton>
													<IconButton color={'error'}>
														<div className='d-flex align-items-center pointer'>
															<p className='text-danger' style={ { fontSize: '12px' } }>3</p>
															<ThumbDownOffAlt color={'error'} />
														</div>
													</IconButton>
												</div>
											</div>
											<hr/>
										</>
									))
								}
							</>
						) : (
							<p className='text-center text-black-50' style={ { marginTop: '10rem' } }>No comment yet :( <br/> Be first :)</p>
						)
						}
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default Comments

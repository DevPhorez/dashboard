import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import './Slider.css';

import { FreeMode } from "swiper";

import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { ArrowRightAltOutlined } from '@mui/icons-material'

import { Link } from 'react-router-dom'

const BorderLinearProgress = styled(LinearProgress)( () => ({
	height: 5,
	borderRadius: 5,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor: 'rgba(81,191,160,0.4)',
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor: '#d099c5',
	},
}));

function Slider (props) {
	return (
		<div className='slider rounded-4 bg-success my-5 m-auto px-1' style={ { width: '95%', height: '350px' } }>
			<h3 className='text-white m-3'>Same Products</h3>
		
			<Swiper
				slidesPerView={5}
				spaceBetween={5}
				freeMode={true}
				modules={[FreeMode]}
				className="mySwiper"
			>
				{
					props.products.map( product => (
						<SwiperSlide className='d-block text-black p-3 pointer'>
							<Link className='text-decoration-none' to={`/product/${product.id}/${product.title.replace(' ', '-')}`} >
								<img className='img-fluid d-flex align-self-start' src={'/' + product.image} alt={product.title}/>
								<p className='d-flex justify-content-start text-dark mt-3 mb-0'>
									{product.price - 100}$
								</p>
								<p className='d-flex justify-content-start text-black-50 mt-1 mb-1'>
									<del className='fw-bold' style={ { fontSize: '13px' ,color: '#c3c3c3' } }>
										{product.price}$
									</del>
								</p>
							</Link>
							<BorderLinearProgress variant="determinate" value={50} />
						</SwiperSlide>
					))
				}
				<SwiperSlide className='d-block text-black p-5'>
					<Link className='text-decoration-none' to='/'>
						<div className='d-flex justify-content-center mt-5'>
							<p className='d-flex justify-content-center align-items-center border rounded-circle h2' style={ { width: 50, height: 50 } }>
								<ArrowRightAltOutlined className='' color={'primary'} fontSize={'inherit'} />
							</p>
						</div>
						<p className='text-900 opacity-75 fw-bold mt-1'>
							See All
						</p>
					</Link>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Slider

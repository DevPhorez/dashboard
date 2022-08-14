import "swiper/css";
import "swiper/css/effect-cards";
import './Slider.css';
import '../Modal/Modal.css';

import { Backdrop } from '@mui/material'

import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { defaultAvatars } from '../../data'

function Slider (props) {
	
	const handleClose = () => {
		props.setOpen(false);
	};
	
	return (
		<>
			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={props.open}
				onClick={handleClose}
				className='backdrop'
			>
				<Swiper
					effect={"cards"}
					grabCursor={true}
					modules={[EffectCards]}
					className="mySwiper"
				>
					{
						defaultAvatars.map( avatar => (
							<SwiperSlide key={avatar.id}>
								<img src={`/Images/Default Avatars/${avatar.src}`} alt={avatar.src} />
							</SwiperSlide>
						))
					}
				</Swiper>
			</Backdrop>
		</>
	);
}

export default Slider
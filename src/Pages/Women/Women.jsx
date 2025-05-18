import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Women.css"; // Custom styles for 3D effect

const images = [
	"public/assets/images2/image1.png",
	"public/assets/images2/image2.png",
	"public/assets/images2/image3.png",
	"public/assets/images2/image1.png",
	"public/assets/images2/image1.png",
	"public/assets/images2/image1.png",
	"public/assets/images2/image1.png",
	"public/assets/images2/image2.png",
];

const Slider3D = () => {
	return (
		<div className="slider-container">
			<div className="heading">
				{" "}
				<p>Home Grown Brand</p>
			</div>

			<Swiper
				effect="coverflow"
				grabCursor={true}
				centeredSlides={true}
				slidesPerView="auto"
				loop={true}
				navigation
				pagination={{ clickable: true }}
				coverflowEffect={{
					rotate: 1,
					stretch: 0,
					depth: 100,
					modifier: 6,
					slideShadows: true,
				}}
				modules={[EffectCoverflow, Navigation, Pagination]}
				className="mySwiper"
			>
				{images.map((img, index) => (
					<SwiperSlide key={index}>
						<img
							src={img}
							alt={`Slide ${index + 1}`}
							className="carousel-image"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Slider3D;

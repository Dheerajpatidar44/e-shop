import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Home = () => {
	const navigate = useNavigate(); // ✅ Define useNavigate properly

	const handleImageClick = (image) => {
		if (image.includes("4.png") || image.includes("7.png")) {
			navigate("/women");
		} else {
			navigate("/men");
		}
	};

	// Array of image paths
	const images = [
		"public/assets/images/1.png",
		"public/assets/images/2.png",
		"public/assets/images/3.png",
		"public/assets/images/4.png",
		"public/assets/images/5.png",
		"public/assets/images/6.png",
		"public/assets/images/7.png",
		"public/assets/images/8.png",
	];

	const images2 = [
		"public/assets/images/img1.png",
		"public/assets/images/img2.png",
		"public/assets/images/img3.png",
		"public/assets/images/img4.png",
	];

	const images3 = [
		{
			src: "public/assets/images2/image1.png",
			title: "FRATINI",
			discount: "UP TO 50% OFF",
		},
		{
			src: "public/assets/images2/image2.png",
			title: "BRAND 2",
			discount: "UP TO 40% OFF",
		},
		{
			src: "public/assets/images2/image3.png",
			title: "BRAND 3",
			discount: "UP TO 60% OFF",
		},
	];

	return (
		<>
			<div className="home">
				<Carousel data-bs-theme="dark" className="carousel">
					{images.map((image, index) => (
						<Carousel.Item key={index}>
							<img
								className="d-block w-100 carousel-img"
								src={image}
								onClick={() => handleImageClick(image)}
								alt={`Slide ${index + 1}`}
							/>
						</Carousel.Item>
					))}
				</Carousel>
			</div>

			<div>
				<img
					className="discount-img"
					src="public/assets/images/discount.png"
					alt="Discount Offer"
				/>
			</div>

			<div>
				<span>
					<p className="tittle">FEATURED BRANDS</p>
				</span>

				<div className="brands">
					<Carousel data-bs-theme="dark" className="carousel">
						{images2.map((image, index) => (
							<Carousel.Item key={index}>
								<img
									className="d-block w-100 carousel-img"
									src={image}
									alt={`Slide ${index + 1}`}
								/>
							</Carousel.Item>
						))}
					</Carousel>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Home;

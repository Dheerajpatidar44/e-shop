import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaHeart, FaCheckCircle } from "react-icons/fa";
import "./Men.css";
import Footer from "../../Components/Footer/Footer";

const Men = () => {
	const { addToCart, addToWishlist } = useContext(CartContext);
	const [products, setProducts] = useState([]);
	const [wishlist, setWishlist] = useState([]);
	const [toastMessage, setToastMessage] = useState(null);

	const categories = [
		"mens-shirts",
		"mens-watches",
		"mens-shoes",
		"fragrances",
		"mens-jeans",
		"mens-socks",
		"mens-tshirts",
		"mens-jackets",
		"mens-trousers",
	];

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const promises = categories.map((category) =>
					axios.get(
						`https://dummyjson.com/products/category/${category}?limit=100`
					)
				);
				const responses = await Promise.all(promises);
				const allProducts = responses.flatMap((res) => res.data.products);
				setProducts(allProducts);
			} catch (error) {
				console.error("Failed to fetch men's products!");
			}
		};
		fetchProducts();
	}, []);

	const showToast = (message) => {
		setToastMessage(message);
		setTimeout(() => {
			setToastMessage(null);
		}, 2000);
	};

	const toggleWishlist = (product) => {
		if (wishlist.includes(product.id)) {
			setWishlist(wishlist.filter((id) => id !== product.id));
		} else {
			setWishlist([...wishlist, product.id]);
			addToWishlist(product);
			showToast("Added to your Wishlist");
		}
	};

	const handleAddToCart = (product) => {
		addToCart(product);
		showToast("Added to your Cart");
	};

	//slider
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 5,
			slidesToSlide: 1, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 768 },
			items: 3,
			slidesToSlide: 3, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 767, min: 464 },
			items: 2,
			slidesToSlide: 1, // optional, default to 1.
		},
	};
	const sliderImageUrl = [
		"public/assets/images2/11.png",
		"public/assets/images2/12.png",
		"public/assets/images2/13.png",
		"public/assets/images2/14.png",
		"public/assets/images2/15.png",
		"public/assets/images2/16.png",
		"public/assets/images2/17.png",
	];
	return (
		<>
			<div className="parent">
				<Carousel
					responsive={responsive}
					autoPlay={true}
					swipeable={true}
					draggable={true}
					showDots={true}
					infinite={true}
					partialVisible={false}
					dotListClass="custom-dot-list-style"
				>
					{sliderImageUrl.map((images, index) => {
						return (
							<div className="slider" key={index}>
								<img src={images} alt="movie" />
							</div>
						);
					})}
				</Carousel>
			</div>
			<Container className="mt-4">
				<Row>
					{products.map((product) => (
						<Col key={product.id} sm={6} md={4} lg={3} className="mb-4">
							<Card className="h-100 shadow-sm position-relative">
								<FaHeart
									className={`wishlist-icon ${
										wishlist.includes(product.id) ? "wishlist-active" : ""
									}`}
									onClick={() => toggleWishlist(product)}
								/>
								<Link to={`/product/${product.id}`} className="product-link">
									<Card.Img
										variant="top"
										src={product.thumbnail}
										height="250px"
										loading="lazy"
									/>
								</Link>
								<Card.Body>
									<Card.Title>{product.title.substring(0, 20)}...</Card.Title>
									<Card.Text>Price: ${product.price}</Card.Text>
									<Button
										variant="primary"
										onClick={() => handleAddToCart(product)}
									>
										Add to Cart
									</Button>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>

			{/* Toast Notification */}
			{toastMessage && (
				<div className="toast-message">
					<FaCheckCircle className="toast-icon" />
					{toastMessage}
				</div>
			)}
			<Footer />
		</>
	);
};

export default Men;

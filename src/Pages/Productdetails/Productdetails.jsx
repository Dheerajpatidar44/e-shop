import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Card, Button } from "react-bootstrap";
import { CartContext } from "../../Context/CartContext";
import { FaCheckCircle } from "react-icons/fa";
import "./Productdetails.css";

const ProductDetails = () => {
	const { id } = useParams();
	const { addToCart, addToWishlist } = useContext(CartContext);
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [toastMessage, setToastMessage] = useState(null);

	useEffect(() => {
		axios
			.get(`https://dummyjson.com/products/${id}`)
			.then((response) => {
				setProduct(response.data);
				setLoading(false);
			})
			.catch(() => setLoading(false));
	}, [id]);

	const showToast = (message) => {
		setToastMessage(message);
		setTimeout(() => {
			setToastMessage(null);
		}, 2000);
	};

	if (loading) return <h2 className="text-center mt-5">Loading...</h2>;
	if (!product)
		return <h2 className="text-center mt-5 text-danger">Product not found</h2>;

	return (
		<Container className="mt-5">
			<Card className="p-4 shadow-lg">
				<Card.Img variant="top" src={product.thumbnail} height="400px" />
				<Card.Body>
					<Card.Title>{product.title}</Card.Title>
					<Card.Text>{product.description}</Card.Text>
					<Card.Text>
						<strong>Price:</strong> ${product.price}
					</Card.Text>
					<Button
						variant="primary"
						className="me-3"
						onClick={() => {
							addToCart(product);
							showToast("Added to Cart");
						}}
					>
						Add to Cart
					</Button>
					<Button
						variant="danger"
						onClick={() => {
							addToWishlist(product);
							showToast("Added to Wishlist");
						}}
					>
						Add to Wishlist
					</Button>
				</Card.Body>
			</Card>

			{/* Toast Notification */}
			{toastMessage && (
				<div className="toast-message">
					<FaCheckCircle className="toast-icon" />
					{toastMessage}
				</div>
			)}
		</Container>
	);
};

export default ProductDetails;

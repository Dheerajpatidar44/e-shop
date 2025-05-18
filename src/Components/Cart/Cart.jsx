import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import "./Cart.css";

const Cart = () => {
	const { cart, setCart, wishlist, setWishlist } = useContext(CartContext);
	const [showModal, setShowModal] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);

	// Open Modal
	const handleShow = (item) => {
		setSelectedItem(item);
		setShowModal(true);
	};

	// Close Modal
	const handleClose = () => {
		setShowModal(false);
	};

	// Remove item from cart
	const removeFromCart = () => {
		setCart(cart.filter((item) => item.id !== selectedItem.id));
		setShowModal(false);
	};

	// Move to Wishlist
	const moveToWishlist = () => {
		setCart(cart.filter((item) => item.id !== selectedItem.id));
		setWishlist([...wishlist, selectedItem]);
		setShowModal(false);
	};

	// Increase quantity
	const increaseQuantity = (id) => {
		setCart(
			cart.map((item) =>
				item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
			)
		);
	};

	// Decrease quantity
	const decreaseQuantity = (id) => {
		setCart(
			cart.map((item) =>
				item.id === id && item.quantity > 1
					? { ...item, quantity: item.quantity - 1 }
					: item
			)
		);
	};

	// Calculate Total Price
	const totalPrice = cart.reduce(
		(acc, item) => acc + item.price * (item.quantity || 1),
		0
	);

	return (
		<Container className="cart-container mt-4">
			<h2 className="text-center mb-4">🛒 Your Cart</h2>
			{cart.length === 0 ? (
				<h5 className="text-center text-muted">Your cart is empty.</h5>
			) : (
				<>
					{cart.map((item) => (
						<Row key={item.id} className="cart-item align-items-center">
							{/* ❌ Cross Button Right Corner */}
							<button className="cross-button" onClick={() => handleShow(item)}>
								<FaTimes size={20} />
							</button>

							{/* Product Image (Left Side) */}
							<Col xs={2} className="cart-img-container">
								<img src={item.thumbnail} className="cart-img" alt="product" />
							</Col>

							{/* Product Info (Middle Section) */}
							<Col xs={6} className="cart-info">
								<h5 className="product-title">{item.title}</h5>
								<p className="product-description">
									{item.description.substring(0, 50)}...
								</p>
								<p className="product-price">₹{item.price}</p>
							</Col>

							{/* Quantity Controls (Right Side) */}
							<Col xs={3} className="quantity-section">
								<div className="quantity-controls">
									<Button
										variant="outline-dark"
										size="sm"
										className="quantity-btn"
										onClick={() => decreaseQuantity(item.id)}
									>
										-
									</Button>
									<span className="quantity">{item.quantity || 1}</span>
									<Button
										variant="outline-dark"
										size="sm"
										className="quantity-btn"
										onClick={() => increaseQuantity(item.id)}
									>
										+
									</Button>
								</div>
							</Col>
						</Row>
					))}

					{/* Total Price Section */}
					<div className="cart-total">
						<h4>Total Price: ₹{totalPrice.toFixed(2)}</h4>
					</div>
				</>
			)}

			{/* Modal for Remove/Move to Wishlist */}
			<Modal show={showModal} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Remove from Bag</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row className="align-items-center">
						<Col xs={3}>
							<img
								src={selectedItem?.thumbnail}
								className="modal-img"
								alt="product"
							/>
						</Col>
						<Col xs={9}>
							<h5 className="product-title">{selectedItem?.title}</h5>
							<p>You can save it to your Wishlist to buy it later.</p>
						</Col>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="dark" onClick={removeFromCart}>
						Remove
					</Button>
					<Button variant="light" onClick={moveToWishlist}>
						Move to Wishlist
					</Button>
				</Modal.Footer>
			</Modal>
		</Container>
	);
};

export default Cart;

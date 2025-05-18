import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import "./Wishlist.css";
import { BsXLg } from "react-icons/bs"; // Import close icon

const Wishlist = () => {
	const { wishlist, setWishlist, cart, setCart } = useContext(CartContext);
	const [showModal, setShowModal] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);

	const handleRemoveClick = (item) => {
		setSelectedItem(item);
		setShowModal(true);
	};

	const confirmRemove = () => {
		if (selectedItem) {
			setWishlist((prevWishlist) =>
				prevWishlist.filter((item) => item.id !== selectedItem.id)
			);
		}
		setShowModal(false);
	};

	const addToCart = (item) => {
		setCart([...cart, item]); // Add to cart
		setWishlist((prevWishlist) =>
			prevWishlist.filter((wishlistItem) => wishlistItem.id !== item.id)
		);
	};

	return (
		<>
			<Container className="wishlist-container mt-4">
				<h2 className="text-center mb-4">❤️ Wishlist</h2>
				{wishlist.length === 0 ? (
					<h5 className="text-center text-muted">Your wishlist is empty.</h5>
				) : (
					<Row>
						{wishlist.map((item) => (
							<Col md={6} lg={4} key={item.id} className="mb-4">
								<Card className="wishlist-item">
									{/* Close (X) Button */}
									<BsXLg
										className="remove-icon"
										onClick={() => handleRemoveClick(item)}
									/>
									<Card.Img
										variant="top"
										src={item.thumbnail}
										className="wishlist-img"
									/>
									<Card.Body className="text-center">
										<Card.Title>{item.title}</Card.Title>
										<Card.Text>₹{item.price}</Card.Text>
										<Button
											variant="dark"
											size="sm"
											className="add-to-bag-btn"
											onClick={() => addToCart(item)}
										>
											Add To Bag
										</Button>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				)}
			</Container>

			{/* Confirmation Modal */}
			<Modal show={showModal} onHide={() => setShowModal(false)} centered>
				<Modal.Body className="text-center">
					<h5>
						Are you sure you want to delete this product from your wishlist?
					</h5>
					<div className="modal-buttons mt-4">
						<Button variant="dark" className="yes-btn" onClick={confirmRemove}>
							YES
						</Button>
						<Button
							variant="outline-dark"
							className="no-btn"
							onClick={() => setShowModal(false)}
						>
							NO
						</Button>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default Wishlist;

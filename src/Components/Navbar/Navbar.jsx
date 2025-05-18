import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaHeart, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

const CustomNavbar = () => {
	return (
		<Navbar expand="lg">
			<Container>
				{/* Logo */}
				<Navbar.Brand href="/">
					<img
						src="public/assets/images/logo.png"
						alt="Logo"
						width="150"
						height="40"
						className="d-inline-block align-top me-2"
					/>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="main-navbar" />

				<Navbar.Collapse id="main-navbar">
					{/* Nav Links */}
					<Nav className="me-auto ms-3 items">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/men">Men</Nav.Link>
						<Nav.Link href="/women">Women</Nav.Link>
						<Nav.Link href="/kids">Kids</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
					</Nav>

					{/* Icon Links */}
					<Nav className="ms-auto d-flex align-items-center gap-3">
						<Nav.Link href="/wishlist" className="d-flex align-items-center">
							<FaHeart size={20} />
						</Nav.Link>
						<Nav.Link href="/cart" className="d-flex align-items-center">
							<FaShoppingCart size={20} />
						</Nav.Link>
						<Nav.Link href="/profile" className="d-flex align-items-center">
							<FaUserCircle size={22} />
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default CustomNavbar;

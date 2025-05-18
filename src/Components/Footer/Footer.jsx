import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row className="footer-top">
					{/* About */}
					<Col md={3} sm={6} className="footer-section">
						<h5>About Us</h5>
						<p>
							We are the best eCommerce platform, providing high-quality
							products at the best prices.
						</p>
					</Col>

					{/* Quick Links */}
					<Col md={3} sm={6} className="footer-section">
						<h5>Quick Links</h5>
						<ul>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/men">Men</a>
							</li>
							<li>
								<a href="/women">Women</a>
							</li>
                            <li>
								<a href="/kids">Kids</a>
							</li>
							<li>
								<a href="/about">About Us</a>
							</li>
						</ul>
					</Col>

					{/* Customer Service */}
					<Col md={3} sm={6} className="footer-section">
						<h5>Customer Service</h5>
						<ul>
							<li>
								<a href="/">FAQ</a>
							</li>
							<li>
								<a href="/">Returns</a>
							</li>
							<li>
								<a href="/">Shipping Info</a>
							</li>
							<li>
								<a href="/">Privacy Policy</a>
							</li>
						</ul>
					</Col>

					{/* Social Media */}
					<Col md={3} sm={6} className="footer-section">
						<h5>Follow Us</h5>
						<div className="social-icons">
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaFacebook />
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaInstagram />
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer" 
							>
								<FaTwitter />
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaLinkedin />
							</a>
						</div>
					</Col>
				</Row>

				<hr />

				{/* Copyright */}
				<Row className="footer-bottom">
					<Col className="text-center">
						<p>
							© {new Date().getFullYear()} ShopCart. All Rights Reserved.
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;

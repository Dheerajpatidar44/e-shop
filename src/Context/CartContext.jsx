import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [wishlist, setWishlist] = useState([]);

	const addToCart = (product) => {
		setCart((prevCart) => [...prevCart, product]);
	};

	const addToWishlist = (product) => {
		setWishlist((prevWishlist) => [...prevWishlist, product]);
	};

	return (
		<CartContext.Provider
			value={{ cart, setCart, addToCart, wishlist, setWishlist, addToWishlist }}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;

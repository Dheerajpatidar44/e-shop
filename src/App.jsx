import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CartProvider from "./Context/CartContext";
import Home from "./Pages/Home.jsx";
import Men from "./Pages/Men/Men.jsx";
import ProductDetails from "./Pages/ProductDetails/ProductDetails.jsx";
import Women from "./Pages/Women/Women.jsx";
import Kids from "./Pages/Kids/Kids.jsx";
import About from "./Pages/About/About.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Wishlist from "./Components/Wishlist/Wishlist.jsx";
import NavbarComponent from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import AuthPage from "./Components/Authpage/AuthPage.jsx";


function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<NavbarComponent />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/men" element={<Men />} />
					<Route path="/product/:id" element={<ProductDetails />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/wishlist" element={<Wishlist />} />
					<Route path="/women" element={<Women />} />
					<Route path="/kids" element={<Kids />} />
					<Route path="/about" element={<About />} />
					<Route path="/profile" element={<AuthPage />} />
				</Routes>


			</BrowserRouter>
		</CartProvider>
	);
}

export default App;

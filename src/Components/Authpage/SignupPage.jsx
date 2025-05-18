import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
	});
	const navigate = useNavigate();

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:4000/api/users/signup", form);
			alert("Signup successful!");
			navigate("/login");
		} catch (error) {
			alert(error.response.data.error);
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className="mb-3">
				<Form.Label>Full Name</Form.Label>
				<Form.Control
					type="text"
					name="name"
					onChange={handleChange}
					required
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Email</Form.Label>
				<Form.Control
					type="email"
					name="email"
					onChange={handleChange}
					required
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Password</Form.Label>
				<Form.Control
					type="password"
					name="password"
					onChange={handleChange}
					required
				/>
			</Form.Group>

			<Button type="submit" className="w-100" variant="success">
				Sign Up
			</Button>
		</Form>
	);
};

export default SignupForm;

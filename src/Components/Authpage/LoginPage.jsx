import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
	const [form, setForm] = useState({ email: "", password: "" });
	const navigate = useNavigate();

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:4000/api/users/login", form);
			alert("Login successful!");
			navigate("/");
		} catch (error) {
			alert(error.response.data.error);
		}
	};

	return (
		<Form onSubmit={handleSubmit}>
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
			<Button type="submit" className="w-100" variant="primary">
				Login
			</Button>
		</Form>
	);
};

export default LoginForm;

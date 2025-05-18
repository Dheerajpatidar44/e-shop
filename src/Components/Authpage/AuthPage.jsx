import React, { useState } from "react";
import { Container, Card, Tab, Tabs } from "react-bootstrap";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import "./AuthPage.css";

const AuthPage = () => {
	const [activeTab, setActiveTab] = useState("login");

	return (
		<Container className="d-flex justify-content-center align-items-center vh-100">
			<Card style={{ width: "400px" }} className="p-4">
				<Tabs
					activeKey={activeTab}
					onSelect={(k) => setActiveTab(k)}
					className="mb-3"
				>
					<Tab eventKey="login" title="Login">
						<LoginPage />
					</Tab>
					<Tab eventKey="signup" title="Sign Up">
						<SignupPage />
					</Tab>
				</Tabs>
			</Card>
		</Container>
	);
};

export default AuthPage;

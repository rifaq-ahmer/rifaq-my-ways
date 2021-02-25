import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../index.css";
import close from "../Images/close.png";
const Login = () => {
	return (
		<>
			<Navbar />
			<form id="form" style={{ width: "30%", margin: "auto", marginTop: "5%" }}>
				<h3 style={{ display: "inline" }}>Login</h3>
				<Link
					style={{ float: "right", textDecoration: "none", color: "green" }}
					to="/"
				>
					<h5>
						<img style={{ width: "20px" }} src={close} alt="close" />
					</h5>
				</Link>
				<div
					style={{
						border: "1px solid gray",
						borderRadius: "10px",
						padding: "30px",
					}}
				>
					<h5
						style={{
							textDecoration: "underLine",
							textAlign: "center",
							margin: "40px 0px",
							color: "#7ECB20",
						}}
					>
						Student
					</h5>
					<div class="form-group">
						<input
							type="email"
							class="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
						/>
					</div>
					<div class="form-group">
						<input
							type="password"
							class="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
						/>
					</div>
					<p style={{ color: "green", float: "right" }}>Forgot Password?</p>
					<button
						style={{
							marginTop: "5px",
							width: "100%",
							backgroundColor: "#7ECB20",
						}}
						type="submit"
						class="btn btn-success"
					>
						Login
					</button>
					<h5 style={{ textAlign: "center", marginTop: "10px" }}>
						New to MyWays ? Sign Up here
					</h5>
				</div>
			</form>
		</>
	);
};

export default Login;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../index.css";
import close from "../Images/close.png";
const SignUp = () => {
	return (
		<>
			<Navbar />
			<form
				id="form"
				style={{ width: "30%", margin: "auto", marginTop: "10%" }}
			>
				<div style={{ marginBottom: "40px", textAlign: "center" }}>
					<h3>Sign Up</h3>
					<h5>it's quik and easy</h5>
					<Link
						style={{ float: "right", textDecoration: "none", color: "green" }}
						to="/"
					>
						<h5>
							<img style={{ width: "15px" }} src={close} alt="close" />
						</h5>
					</Link>
				</div>
				<div style={{ marginBottom: "14px" }} class="row">
					<div class="col">
						<input type="text" class="form-control" placeholder="First name" />
					</div>
					<div class="col">
						<input type="text" class="form-control" placeholder="Last name" />
					</div>
				</div>
				<div class="form-group">
					<input
						type="email"
						class="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Email"
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

				<button
					style={{ width: "100%", backgroundColor: "#7ECB20" }}
					type="submit"
					class="btn btn-success"
				>
					Sign Up
				</button>
			</form>
		</>
	);
};

export default SignUp;

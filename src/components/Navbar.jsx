import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import logo from "../Images/logo.png";
import power from "../Images/power.png";
import "../index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<a class="navbar-brand" href="#">
					<img style={{ width: "40px" }} src={logo} alt="logo" />
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavDropdown">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdownMenuLink"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								For you
							</a>
							<div
								class="dropdown-menu"
								aria-labelledby="navbarDropdownMenuLink"
							>
								<a class="dropdown-item" href="#">
									Find matching internships
								</a>
								<a class="dropdown-item" href="#">
									Hire right talent
								</a>
								<a class="dropdown-item" href="#">
									work from home
								</a>
							</div>
						</li>
						<li class="nav-item active">
							<a class="nav-link" href="#">
								<img style={{ width: "25px" }} src={power} alt="power" />
								Instant apply <span class="sr-only">(current)</span>
							</a>
						</li>
						<li class="nav-item active">
							<a class="nav-link" href="#">
								Pricing
							</a>
						</li>
						<li class="nav-item active">
							<a class="nav-link" href="#">
								About Us
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								<Link style={{ color: "green" }} to="/SignUp">
									Sign Up
								</Link>
							</a>
						</li>
						<li class="nav-item">
							<Link class="nav-link" to="/Login">
								<button
									style={{
										border: "none",
										borderRadius: "40px",
										padding: "5px 30px",
										fontSize: "13px",
										backgroundColor: "#7ECB20",
									}}
									className="btn btn-success"
								>
									LOGIN
								</button>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;

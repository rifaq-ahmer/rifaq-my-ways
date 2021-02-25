import React, { Component } from "react";
import Navbar from "./Navbar";

const Home = () => {
	return (
		<>
			<Navbar />
			<div style={{ textAlign: "center", width: "70%", margin: "15%" }}>
				<h2
					style={{
						fontFamily: "Open Sans",
						fontWeight: "Bold",
						fontSize: "41",
						Color: "#000000",
						CharacterSpacing: "0",
						lineSpacing: "56",
					}}
				>
					Apply and hear back every time.
				</h2>
				<h5
					style={{
						fontFamily: "Open Sans",
						fontWeight: "Regular",
						fontSize: "28px",
						Color: "#000000",
						CharacterSpacing: "0",
						lineSpacing: "38",
					}}
				>
					Exploring internships or jobs? Say good-bye to the typical job portals
					and use the power of Artificial Intelligence to become successful,
					faster.
				</h5>
				<button
					style={{
						borderRadius: "20px",
						padding: "10px 30px",
						marginTop: "30px",
					}}
					className="btn btn-success"
					style={{ backgroundColor: "#7ECB20" }}
				>
					Get's Started
				</button>
			</div>
		</>
	);
};

export default Home;

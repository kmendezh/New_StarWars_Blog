import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { func } from "prop-types";
import { Context } from "../store/appContext";
import "/workspace/react-hello-webapp/src/styles/login.css";

export function LogIn() {
	const handleSubmit = e => {
		e.preventDefault();

		console.log("Button pressed");
	};

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<form onSubmit={handleSubmit}>
			<div className="container">
				<h1 className="header"> Login</h1>

				<div className="input-group input-group-lg userInput">
					<div className="input-group-prepend">
						<span className="input-group-text" id="inputGroup-sizing-lg">
							<i style={{ color: "black", fontSize: "18px" }} className="fab fa-galactic-republic" />
						</span>
					</div>
					<input
						onChange={e => setEmail(e.target.value)}
						type="text"
						className="form-control"
						aria-label="Large"
						aria-describedby="inputGroup-sizing-sm"
						placeholder="Email"
					/>
				</div>

				<div className="input-group input-group-lg userInput">
					<div className="input-group-prepend">
						<span className="input-group-text" id="inputGroup-sizing-lg">
							<i style={{ color: "black", fontSize: "18px" }} className="fab fa-galactic-senate" />
						</span>
					</div>
					<input
						onChange={e => setPassword(e.target.value)}
						type="password"
						className="form-control"
						aria-label="Large"
						aria-describedby="inputGroup-sizing-sm"
						placeholder="Password"
					/>
				</div>
				<div style={{ textAlign: "center", marginBottom: "20px" }}>
					<button type="submit" className="btn btn-light">
						Login
					</button>
				</div>

				<div className="footer">
					<p> Do not have an account? Sign up</p>
				</div>
			</div>
		</form>
	);
}

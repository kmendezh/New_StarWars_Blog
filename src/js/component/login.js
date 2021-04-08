import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import { func } from "prop-types";
import { Context } from "../store/appContext";
import "/workspace/New_StarWars_Blog/src/styles/login.css";

const urlAPI = "https://3000-salmon-scorpion-k7oalosd.ws-us03.gitpod.io/login";

export function LogIn() {
	const handleSubmit = e => {
		e.preventDefault();

		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		const raw = JSON.stringify({
			email: email,
			password: password
		});

		const requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		fetch(urlAPI, requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log(result.msg);
				// If the credentials were correct, enter to Home and save the token and user ID
				if (result.msg == "ok") {
					setAuth(true);
					sessionStorage.setItem("token", result.token);
					console.log(result.token);
				}
			})
			.catch(error => {
				console.log("error", error);
			});
	};

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [authentication, setAuth] = useState(false);

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
			{authentication ? <Redirect to="/home" /> : null}
		</form>
	);
}

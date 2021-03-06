import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import { func } from "prop-types";
import { Context } from "../store/appContext";
import "/workspace/New_StarWars_Blog/src/styles/login.css";

const urlAPI = "https://3000-salmon-scorpion-k7oalosd.ws-us03.gitpod.io/login";

export function LogIn() {
	// Get Store
	const { store, actions } = useContext(Context);

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
					sessionStorage.setItem("login", "True");
					console.log(result.token);
				} else {
					setValidationError(true);
					setErrorMsg(result.msg);
				}
			})
			.catch(error => {
				console.log("error", error);
			});
	};

	const closeWindow = () => {
		setValidationError(false);
		setErrorMsg("");
	};

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [authentication, setAuth] = useState(false);
	const [validationError, setValidationError] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");

	return (
		<form onSubmit={handleSubmit}>
			{validationError ? (
				<div
					className="alert alert-danger alert-dismissible fade show"
					role="alert"
					style={{ width: "50%", margin: "auto" }}>
					{errorMsg}
					<button
						type="button"
						className="close"
						data-dismiss="alert"
						aria-label="Close"
						onClick={closeWindow}>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			) : null}
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
					Do not have an account?
					<Link to={"/register"}> Sign up</Link>
				</div>
			</div>
			{authentication ? <Redirect to="/home" /> : null}
		</form>
	);
}

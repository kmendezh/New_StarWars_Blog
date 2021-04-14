import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import { func } from "prop-types";
import { Context } from "../store/appContext";
import "/workspace/New_StarWars_Blog/src/styles/login.css";

const urlAPI = "https://3000-salmon-scorpion-k7oalosd.ws-us03.gitpod.io/add_new_user";

export function Register() {
	// Get Store
	const { store, actions } = useContext(Context);

	const handleSubmit = async e => {
		e.preventDefault();

		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		const raw = JSON.stringify({
			email: email,
			pswd: password,
			user_name: userName
		});

		const requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		await fetch(urlAPI, requestOptions)
			.then(response => {
				response.json();
				console.log("Password", password);
				console.log("Username", userName);
				console.log("Email", email);
				// If the password was empty, print the error message
				if (response.status == 401) {
					setValidationError(true);
					setErrorMsg("Invalid password, username or email");
				}

				// If the username is repeated, print the error message
				else if (response.status == 402) {
					setValidationError(true);
					setErrorMsg("The username is being used by someone else");
				}

				// If the email is repeated, print the error message
				else if (response.status == 403) {
					setValidationError(true);
					setErrorMsg("The email is already registered");
				}
			})
			.then(result => {
				if (!validationError) {
					setAuth(true);
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
	const [userName, setUserName] = useState("");
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
				<h1 className="header"> Sign up</h1>

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

				<div className="input-group input-group-lg userInput">
					<div className="input-group-prepend">
						<span className="input-group-text" id="inputGroup-sizing-lg">
							<i style={{ color: "black", fontSize: "18px" }} className="fab fa-jedi-order" />
						</span>
					</div>
					<input
						onChange={e => setUserName(e.target.value)}
						type="text"
						className="form-control"
						aria-label="Large"
						aria-describedby="inputGroup-sizing-sm"
						placeholder="username"
					/>
				</div>
				<div style={{ textAlign: "center", marginBottom: "20px" }}>
					<button type="submit" className="btn btn-light">
						Register
					</button>
				</div>
			</div>
			{authentication ? <Redirect to="/" /> : null}
		</form>
	);
}

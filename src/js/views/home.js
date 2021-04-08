import React, { useState, useEffect, useContext } from "react";
import "/workspace/New_StarWars_Blog/src/styles/home.css";

import { CardCharacter, CardPlanet, CardVehicle } from "/workspace/New_StarWars_Blog/src/js/component/cards.js";

import { Context } from "../store/appContext";

export const Home = () => {
	// Get Store
	const { store, actions } = useContext(Context);

	// Planet Array
	let planetCards = store.planetsArray.map(element => <CardPlanet key={element.result._id} planetInfo={element} />);

	// People Array
	let peopleCards = store.peopleArray.map(element => <CardCharacter key={element.result._id} peopleInfo={element} />);

	// StarShips/Vehicles Array
	let starshipsCards = store.starshipsArray.map(element => (
		<CardVehicle key={element.result._id} starshipsInfo={element} />
	));

	// URL API
	const urlAPI = "https://3000-salmon-scorpion-k7oalosd.ws-us03.gitpod.io/";

	// Fetch the data from the SW API when home is loaded
	useEffect(() => {
		// Store the username and user ID of the person that logged in
		// Build the header for the fetch
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		let authString = "Bearer " + sessionStorage.getItem("token");
		myHeaders.append("Authorization", authString);

		// Request Options
		const requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow"
		};

		// Endpoint to get the username
		let tmpUrl = urlAPI + "get_logged_user";

		fetch(tmpUrl, requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log(result.id);
				console.log(result.username);
				actions.setUserName(result.username);
				actions.setUserID(result.id);
				actions.setVisibility();
			})
			.catch(error => {
				console.log("error", error);
			});

		// Get the Favorite List

		// Endpoint to get the favorite list
		let tmpUrl2 = urlAPI + "get_fav_user_logged";

		fetch(tmpUrl2, requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log(JSON.stringify(result));
			})
			.catch(error => {
				console.log("error", error);
			});
	}, []);

	return (
		<div className="flexBox">
			<div className="flexHeader">
				<h1> Characters</h1>
				<i className="fab fa-jedi-order" style={{ color: "white", fontSize: "40px" }} />
			</div>

			<div className="flexContainer">{peopleCards}</div>

			<div className="d-flex justify-content-center mt-3 mb-3">
				<button
					type="button"
					className="btn btn-secondary"
					style={{ width: "15%" }}
					onClick={() => actions.showMore("People")}>
					Show More
				</button>
			</div>

			<div className="flexHeader">
				<h1> Planets </h1>
				<i className="fas fa-globe-americas" style={{ color: "white", fontSize: "40px" }} />
			</div>

			<div className="flexContainer">{planetCards}</div>

			<div className="d-flex justify-content-center mt-3 mb-3">
				<button
					type="button"
					className="btn btn-secondary"
					style={{ width: "15%" }}
					onClick={() => actions.showMore("Planet")}>
					Show More
				</button>
			</div>

			<div className="flexHeader">
				<h1> Vehicles </h1>
				<i className="fas fa-fighter-jet" style={{ color: "white", fontSize: "40px" }} />
			</div>

			<div className="flexContainer">{starshipsCards}</div>

			<div className="d-flex justify-content-center mt-3 mb-3">
				<button
					type="button"
					className="btn btn-secondary"
					style={{ width: "15%" }}
					onClick={() => actions.showMore("Starship")}>
					Show More
				</button>
			</div>
		</div>
	);
};

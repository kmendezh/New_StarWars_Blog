import React, { useState, useEffect, useContext } from "react";
import "/workspace/New_StarWars_Blog/src/styles/home.css";
import { Link, useParams, Redirect } from "react-router-dom";
import { CardCharacter, CardPlanet, CardVehicle } from "/workspace/New_StarWars_Blog/src/js/component/cards.js";
import { Context } from "../store/appContext";

export const Home = () => {
	// Get Store
	const { store, actions } = useContext(Context);

	// Planet Array
	let planetCards = store.planetsArray.map(element => <CardPlanet key={element.id} planetInfo={element} />);

	// People Array
	let peopleCards = store.peopleArray.map(element => <CardCharacter key={element.id} peopleInfo={element} />);

	// StarShips/Vehicles Array
	let starshipsCards = store.starshipsArray.map(element => <CardVehicle key={element.id} starshipsInfo={element} />);

	// Fetch the data from the SW API when home is loaded
	useEffect(() => {
		if (sessionStorage.getItem("login") == "True") {
			// Store the username and user ID of the person that logged in
			actions.getUserLogged();

			sessionStorage.setItem("login", "Done");
		}
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

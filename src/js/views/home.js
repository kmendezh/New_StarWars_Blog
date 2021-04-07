import React, { useState, useEffect, useContext } from "react";
import "/workspace/react-hello-webapp/src/styles/home.css";

import { CardCharacter, CardPlanet, CardVehicle } from "/workspace/react-hello-webapp/src/js/component/cards.js";

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

import React, { useState, useEffect, useContext } from "react";
import { CardDescription } from "/workspace/New_StarWars_Blog/src/js/component/cards.js";
import { func } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

// Global data
const urlCharacterDescription = "https://radiorumba.fm/wp-content/uploads/2015/11/DarthVader-675x450.jpg";
const urlPlanetDescription = "https://i.pinimg.com/originals/2b/78/19/2b7819e79666f6a4be99011fbbd42ab0.jpg";
const urlVehicleDescription = "https://wallpapercave.com/wp/wp4162371.jpg";

export function CardInfo() {
	return <CardDescription />;
}

// Full Character Description
export function CharacterDescription(props) {
	// Get the ID of the Character to be displayed
	const params = useParams();

	// Get the store data
	const { store, actions } = useContext(Context);

	// Find the element to be displayed
	const findId = obj => {
		return obj.result._id == params.id;
	};

	let characterToBeDisplayed = store.peopleArray.find(findId);

	// Store local data in case of page refresh
	if (store.peopleArray.length != 0) {
		localStorage.setItem("obj", JSON.stringify(characterToBeDisplayed));
	} else {
		characterToBeDisplayed = JSON.parse(localStorage.getItem("obj"));
	}

	// Render the information
	return (
		<div>
			<div className="row">
				<div className="col-6">
					<img src={urlCharacterDescription} />
				</div>
				<div className="col-6">
					<h1>
						<strong> {characterToBeDisplayed.result.properties.name} </strong>
					</h1>
					<p className="textDescription">{characterToBeDisplayed.result.description}</p>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-4">
					<p style={{ fontSize: "40px", color: "white" }}>
						<strong> Height: </strong>
						{characterToBeDisplayed.result.properties.height}
					</p>
				</div>
				<div className="col-4">
					<p style={{ fontSize: "40px", color: "white" }}>
						<strong> Hair color: </strong>
						{characterToBeDisplayed.result.properties.hair_color}
					</p>
				</div>
				<div className="col-4">
					<p style={{ fontSize: "40px", color: "white" }}>
						<strong> Birth-year: </strong>
						{characterToBeDisplayed.result.properties.birth_year}
					</p>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-4">
					<p style={{ fontSize: "40px", color: "white" }}>
						<strong> Mass: </strong>
						{characterToBeDisplayed.result.properties.mass}
					</p>
				</div>
				<div className="col-4">
					<p style={{ fontSize: "40px", color: "white" }}>
						<strong> Skin color: </strong>
						{characterToBeDisplayed.result.properties.skin_color}
					</p>
				</div>
				<div className="col-4">
					<p style={{ fontSize: "40px", color: "white" }}>
						<strong> Gender: </strong>
						{characterToBeDisplayed.result.properties.gender}
					</p>
				</div>
			</div>
		</div>
	);
}

// Full Planet Description
export function PlanetDescription(props) {
	// Get the ID of the Character to be displayed
	const params = useParams();

	// Get the store data
	const { store, actions } = useContext(Context);

	// Find the element to be displayed
	const findId = obj => {
		return obj.result._id == params.id;
	};

	let PlanetToBeDisplayed = store.planetsArray.find(findId);

	// Store local data in case of page refresh
	if (store.planetsArray.length != 0) {
		localStorage.setItem("obj", JSON.stringify(PlanetToBeDisplayed));
	} else {
		PlanetToBeDisplayed = JSON.parse(localStorage.getItem("obj"));
	}

	// Render the information
	return (
		<div>
			<div className="row">
				<div className="col-6">
					<img src={urlPlanetDescription} />
				</div>
				<div className="col-6">
					<h1>
						<strong> {PlanetToBeDisplayed.result.properties.name} </strong>
					</h1>
					<p className="textDescription">{PlanetToBeDisplayed.result.description}</p>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-4">
					<p style={{ fontSize: "40px", color: "white" }}>
						<strong> Diameter: </strong>
						{PlanetToBeDisplayed.result.properties.diameter}
					</p>
				</div>
				<div className="col-4">
					<p style={{ fontSize: "40px", color: "white" }}>
						<strong> Population: </strong>
						{PlanetToBeDisplayed.result.properties.population}
					</p>
				</div>
				<div className="col-4">
					<p style={{ fontSize: "40px", color: "white" }}>
						<strong> Climate: </strong>
						{PlanetToBeDisplayed.result.properties.climate}
					</p>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-4">
					<p style={{ fontSize: "40px", color: "white" }}>
						<strong> Terrain: </strong>
						{PlanetToBeDisplayed.result.properties.terrain}
					</p>
				</div>
				<div className="col-4">
					<p style={{ fontSize: "40px", color: "white" }}>
						<strong> Rotation Period: </strong>
						{PlanetToBeDisplayed.result.properties.rotation_period}
					</p>
				</div>
				<div className="col-4">
					<p style={{ fontSize: "40px", color: "white" }}>
						<strong> Orbital Period: </strong>
						{PlanetToBeDisplayed.result.properties.orbital_period}
					</p>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-4">
					<p style={{ fontSize: "40px", color: "white" }}>
						<strong> Surface Water: </strong>
						{PlanetToBeDisplayed.result.properties.surface_water}
					</p>
				</div>
			</div>
		</div>
	);
}

// Full Starships Description
export function StarshipDescription(props) {
	// Get the ID of the Character to be displayed
	const params = useParams();

	// Get the store data
	const { store, actions } = useContext(Context);

	// Find the element to be displayed
	const findId = obj => {
		return obj.result._id == params.id;
	};

	let StarshipToBeDisplayed = store.starshipsArray.find(findId);

	// Store local data in case of page refresh
	if (store.starshipsArray.length != 0) {
		localStorage.setItem("obj", JSON.stringify(StarshipToBeDisplayed));
	} else {
		StarshipToBeDisplayed = JSON.parse(localStorage.getItem("obj"));
	}
	console.log("Vehicle error");
	console.log(StarshipToBeDisplayed);

	// Render the information
	return (
		<div>
			<div className="row">
				<div className="col-6">
					<img src={urlVehicleDescription} style={{ width: "100%", height: "450px" }} />
				</div>
				<div className="col-6">
					<h1>
						<strong> {StarshipToBeDisplayed.result.properties.name} </strong>
					</h1>
					<p className="textDescription">{StarshipToBeDisplayed.result.description}</p>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-4">
					<p style={{ fontSize: "40px", color: "white" }}>
						<strong> Model: </strong>
						{StarshipToBeDisplayed.result.properties.model}
					</p>
				</div>
				<div className="col-4">
					<p style={{ fontSize: "40px", color: "white" }}>
						<strong> Starship Class: </strong>
						{StarshipToBeDisplayed.result.properties.starship_class}
					</p>
				</div>
				<div className="col-4">
					<p style={{ fontSize: "40px", color: "white" }}>
						<strong> Manufacturer: </strong>
						{StarshipToBeDisplayed.result.properties.manufacturer}
					</p>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-4">
					<p style={{ fontSize: "40px", color: "white" }}>
						<strong> Cost In Credits: </strong>
						{StarshipToBeDisplayed.result.properties.cost_in_credits}
					</p>
				</div>
				<div className="col-4">
					<p style={{ fontSize: "40px", color: "white" }}>
						<strong> Length: </strong>
						{StarshipToBeDisplayed.result.properties.length}
					</p>
				</div>
				<div className="col-4">
					<p style={{ fontSize: "40px", color: "white" }}>
						<strong> Crew: </strong>
						{StarshipToBeDisplayed.result.properties.crew}
					</p>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-4">
					<p style={{ fontSize: "40px", color: "white" }}>
						<strong> Passengers: </strong>
						{StarshipToBeDisplayed.result.properties.passengers}
					</p>
				</div>
				<div className="col-4">
					<p style={{ fontSize: "40px", color: "white" }}>
						<strong> Consumables: </strong>
						{StarshipToBeDisplayed.result.properties.consumables}
					</p>
				</div>
				<div className="col-4">
					<p style={{ fontSize: "40px", color: "white" }}>
						<strong> Max Atmosphering Speed: </strong>
						{StarshipToBeDisplayed.result.properties.max_atmosphering_speed}
					</p>
				</div>
			</div>
		</div>
	);
}

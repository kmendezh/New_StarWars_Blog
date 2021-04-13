import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "/workspace/New_StarWars_Blog/src/styles/cards.css";
import { func } from "prop-types";
import { Context } from "../store/appContext";

const urlImage = "https://sm.ign.com/ign_es/screenshot/default/mandalorian-baby-yoda-macarons_1nqk.jpg";
const urlPlanetImage = "https://i.pinimg.com/originals/e7/e6/6e/e7e66e9a5d91ee1b10cf2caa5d046590.jpg";
const urlVehicle = "https://i.pinimg.com/originals/13/ee/70/13ee7069b749b7cfb394bdab3687ae57.jpg";
const urlImageDescription = "https://radiorumba.fm/wp-content/uploads/2015/11/DarthVader-675x450.jpg";

// Function to print the character card
export function CardCharacter(prop) {
	// Get Store
	const { store, actions } = useContext(Context);

	// Create a tmp variable to classify the type of card in case that the user add it as favorite
	let tmpObject = {
		id: prop.peopleInfo.id,
		name: prop.peopleInfo.name,
		height: prop.peopleInfo.height,
		mass: prop.peopleInfo.mass,
		hair_color: prop.peopleInfo.hair_color,
		skin_color: prop.peopleInfo.skin_color,
		eye_color: prop.peopleInfo.eye_color,
		birth_year: prop.peopleInfo.birth_year,
		gender: prop.peopleInfo.gender,
		created: prop.peopleInfo.created,
		edited: prop.peopleInfo.edited,
		homeworld: prop.peopleInfo.homeworld,
		description: prop.peopleInfo.description,
		url: prop.peopleInfo.url,
		type: "C"
	};
	return (
		<div className="card mr-2" style={{ marginBottom: "20px" }}>
			<img
				className="card-img-top"
				src={urlImage}
				alt="Card image cap"
				style={{ width: "100%", height: "200px" }}
			/>
			<div className="card-body">
				<h4 className="card-title">{prop.peopleInfo.name}</h4>
				<div className="card-text">
					<div className="row">
						<p> Height: {prop.peopleInfo.height}</p>
					</div>
					<div className="row">
						<p> Mass: {prop.peopleInfo.mass}</p>
					</div>
					<div className="row">
						<p> Gender: {prop.peopleInfo.gender}</p>
					</div>
				</div>
				<div className="row">
					<div className="col-8">
						<Link to={"/character/" + prop.peopleInfo.id}>
							<div className="btn btn-secondary"> More information </div>
						</Link>
					</div>
					<div className="col-4">
						<a href="#!" className="btn btn-secondary" onClick={() => actions.addFavorites(tmpObject)}>
							<i className="fas fa-heart" style={{ color: "white", fontSize: "20px" }} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

// Function to print the planet card
export function CardPlanet(prop) {
	// Get Store
	const { store, actions } = useContext(Context);

	let tmpObject = {
		id: prop.planetInfo.id,
		name: prop.planetInfo.name,
		diameter: prop.planetInfo.diameter,
		rotation_period: prop.planetInfo.rotation_period,
		orbital_period: prop.planetInfo.orbital_period,
		gravity: prop.planetInfo.gravity,
		population: prop.planetInfo.population,
		climate: prop.planetInfo.climate,
		terrain: prop.planetInfo.terrain,
		surface_water: prop.planetInfo.surface_water,
		created: prop.planetInfo.created,
		edited: prop.planetInfo.edited,
		url: prop.planetInfo.url,
		description: prop.planetInfo.description,
		type: "P"
	};

	return (
		<div className="card mr-2" style={{ marginBottom: "20px" }}>
			<img
				className="card-img-top"
				src={urlPlanetImage}
				alt="Card image cap"
				style={{ width: "100%", height: "200px" }}
			/>
			<div className="card-body">
				<h4 className="card-title">{prop.planetInfo.name}</h4>
				<div className="card-text">
					<div className="row">
						<p> Diameter: {prop.planetInfo.diameter}</p>
					</div>
					<div className="row">
						<p> Population: {prop.planetInfo.population}</p>
					</div>
					<div className="row">
						<p> Climate: {prop.planetInfo.climate}</p>
					</div>
				</div>
				<div className="row">
					<div className="col-8">
						<Link to={"/planet/" + prop.planetInfo.id}>
							<div className="btn btn-secondary"> More information </div>
						</Link>
					</div>
					<div className="col-4">
						<a href="#!" className="btn btn-secondary" onClick={() => actions.addFavorites(tmpObject)}>
							<i className="fas fa-heart" style={{ color: "white", fontSize: "20px" }} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

// Function to print the Vehicle Card
export function CardVehicle(prop) {
	// Get Store
	const { store, actions } = useContext(Context);

	let tmpObject = {
		id: prop.starshipsInfo.id,
		name: prop.starshipsInfo.model,
		starship_class: prop.starshipsInfo.starship_class,
		manufacturer: prop.starshipsInfo.manufacturer,
		cost_in_credits: prop.starshipsInfo.cost_in_credits,
		length: prop.starshipsInfo.length,
		crew: prop.starshipsInfo.crew,
		passengers: prop.starshipsInfo.passengers,
		max_atmosphering_speed: prop.starshipsInfo.max_atmosphering_speed,
		hyperdrive_rating: prop.starshipsInfo.hyperdrive_rating,
		mglt: prop.starshipsInfo.mglt,
		cargo_capacity: prop.starshipsInfo.cargo_capacity,
		consumables: prop.starshipsInfo.consumables,
		url: prop.starshipsInfo.url,
		description: prop.starshipsInfo.description,
		type: "S"
	};

	return (
		<div className="card mr-2" style={{ marginBottom: "20px" }}>
			<img
				className="card-img-top"
				src={urlVehicle}
				alt="Card image cap"
				style={{ width: "100%", height: "200px" }}
			/>
			<div className="card-body">
				<h4 className="card-title">{prop.starshipsInfo.model}</h4>
				<div className="card-text">
					<div className="row">
						<p> Model: {prop.starshipsInfo.model}</p>
					</div>
					<div className="row">
						<p> Length: {prop.starshipsInfo.length}</p>
					</div>
					<div className="row">
						<p> Crew: {prop.starshipsInfo.crew}</p>
					</div>
				</div>
				<div className="row">
					<div className="col-8">
						<Link to={"/starship/" + prop.starshipsInfo.id}>
							<div className="btn btn-secondary"> More information </div>
						</Link>
					</div>
					<div className="col-4">
						<a href="#!" className="btn btn-secondary" onClick={() => actions.addFavorites(tmpObject)}>
							<i className="fas fa-heart" style={{ color: "white", fontSize: "20px" }} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

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
						<a
							href="#!"
							className="btn btn-secondary"
							onClick={() => actions.addFavorites(prop.peopleInfo.name)}>
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
	return (
		<div className="card mr-2" style={{ marginBottom: "20px" }}>
			<img
				className="card-img-top"
				src={urlPlanetImage}
				alt="Card image cap"
				style={{ width: "100%", height: "200px" }}
			/>
			<div className="card-body">
				<h4 className="card-title">{prop.planetInfo.result.properties.name}</h4>
				<div className="card-text">
					<div className="row">
						<p> Diameter: {prop.planetInfo.result.properties.diameter}</p>
					</div>
					<div className="row">
						<p> Population: {prop.planetInfo.result.properties.population}</p>
					</div>
					<div className="row">
						<p> Climate: {prop.planetInfo.result.properties.climate}</p>
					</div>
				</div>
				<div className="row">
					<div className="col-8">
						<Link to={"/planet/" + prop.planetInfo.result._id}>
							<div className="btn btn-secondary"> More information </div>
						</Link>
					</div>
					<div className="col-4">
						<a
							href="#!"
							className="btn btn-secondary"
							onClick={() => actions.addFavorites(prop.planetInfo.result.properties.name)}>
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
	return (
		<div className="card mr-2" style={{ marginBottom: "20px" }}>
			<img
				className="card-img-top"
				src={urlVehicle}
				alt="Card image cap"
				style={{ width: "100%", height: "200px" }}
			/>
			<div className="card-body">
				<h4 className="card-title">{prop.starshipsInfo.result.properties.name}</h4>
				<div className="card-text">
					<div className="row">
						<p> Model: {prop.starshipsInfo.result.properties.model}</p>
					</div>
					<div className="row">
						<p> Length: {prop.starshipsInfo.result.properties.length}</p>
					</div>
					<div className="row">
						<p> Crew: {prop.starshipsInfo.result.properties.crew}</p>
					</div>
				</div>
				<div className="row">
					<div className="col-8">
						<Link to={"/starship/" + prop.starshipsInfo.result._id}>
							<div className="btn btn-secondary"> More information </div>
						</Link>
					</div>
					<div className="col-4">
						<a
							href="#!"
							className="btn btn-secondary"
							onClick={() => actions.addFavorites(prop.starshipsInfo.result.properties.name)}>
							<i className="fas fa-heart" style={{ color: "white", fontSize: "20px" }} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export function CardDescription() {
	return (
		<div className="row">
			<div className="col-6">
				<img src={urlImageDescription} />
			</div>
			<div className="col-6">
				<h1>
					<strong> Title </strong>
				</h1>
				<p className="textDescription">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel eros lacus. Sed convallis justo
					quis scelerisque ullamcorper. Etiam cursus.
				</p>
			</div>
		</div>
	);
}

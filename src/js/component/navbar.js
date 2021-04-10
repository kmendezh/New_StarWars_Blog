import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "/workspace/New_StarWars_Blog/src/styles/navbar.css";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Context } from "/workspace/New_StarWars_Blog/src/js/store/appContext.js";

export const Navbar = () => {
	// Variables needed to control the dropdown
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen(prevState => !prevState);
	const [dropdownOpen2, setDropdownOpen2] = useState(false);
	const toggle2 = () => setDropdownOpen2(prevState => !prevState);

	// Get the store data
	const { store, actions } = useContext(Context);

	// Dropdown Favorite Item Format
	const ddFavoriteItems = store.arrayOfFavorites.map(element => (
		<div className="ddicon" key={element.id.toString()}>
			<div className="row" style={{ width: "95%" }}>
				<div className="col-8">
					<DropdownItem>{element.name}</DropdownItem>
				</div>
				<div className="col-4">
					<DropdownItem onClick={() => actions.removeFavorites(element)}>
						<i className="fas fa-trash" />
					</DropdownItem>
				</div>
			</div>
		</div>
	));

	return (
		<nav
			style={{
				backgroundColor: "black",
				height: "120px"
			}}
			className="navbar navbar-light mb-3">
			<Link to="/">
				<img src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-symbol.jpg" className="swImage" />
			</Link>
			<div className="row" style={{ width: "25%" }}>
				<div className="col-6">
					<div className="ddicon dropdown ">
						<Dropdown isOpen={dropdownOpen} toggle={toggle} size="lg">
							<DropdownToggle className="ddtext" caret>
								Favorites
								<span className="fa-stack">
									<i className="fas fa-heart fa-stack-1x" style={{ color: "white" }} />
									<i className="fa-stack-1x" style={{ color: "black", fontSize: "15px" }}>
										<span>
											<strong>{store.arrayOfFavorites.length}</strong>
										</span>
									</i>
								</span>
							</DropdownToggle>
							<DropdownMenu>
								<DropdownItem header>Items stored</DropdownItem>
								{ddFavoriteItems}
							</DropdownMenu>
						</Dropdown>
					</div>
				</div>
				<div className="col-6">
					<div className="ddicon dropdown " style={{ visibility: store.visibilityUsername }}>
						<Dropdown isOpen={dropdownOpen2} toggle={toggle2} size="lg">
							<DropdownToggle className="ddtext" caret>
								{store.userName}
							</DropdownToggle>
							<DropdownMenu>
								<DropdownItem>Logout</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>
				</div>
			</div>
		</nav>
	);
};

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "/workspace/react-hello-webapp/src/styles/navbar.css";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Context } from "/workspace/react-hello-webapp/src/js/store/appContext.js";

export const Navbar = () => {
	// Variables needed to control the dropdown
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen(prevState => !prevState);

	// Get the store data
	const { store, actions } = useContext(Context);

	// Dropdown Item Format
	const ddFavoriteItems = store.arrayOfFavorites.map((element, index) => (
		<div className="ddicon" key={index.toString()}>
			<div className="row">
				<div className="col-8">
					<DropdownItem>{element}</DropdownItem>
				</div>
				<div className="col-4">
					<DropdownItem onClick={() => actions.removeFavorites(index)}>
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
			<div className="ml-auto">
				<div className="ddicon dropdown">
					<Dropdown isOpen={dropdownOpen} toggle={toggle}>
						<DropdownToggle className="ddtext" caret>
							Favorites
							<span className="fa-stack">
								<i className="fas fa-heart fa-stack-1x" style={{ color: "white" }} />
								<i className="fa-stack-1x" style={{ color: "black", fontSize: "18px" }}>
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
		</nav>
	);
};

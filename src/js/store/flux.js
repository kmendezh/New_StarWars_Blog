// State definition
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planetsArray: [],

			peopleArray: [],

			starshipsArray: [],

			arrayOfFavorites: [],

			indexArray: [
				{ peopleStartIndex: 0, peopleIndex: 6 },
				{ planetStartIndex: 0, planetIndex: 6 },
				{ starshipStartIndex: 0, starshipIndex: 6 }
			],

			visibilityUsername: "hidden",

			userName: "",

			userId: ""
		},
		actions: {
			// Load the initial favorite list
			loadInitialFavList: () => {
				// Get the actions
				const actions = getActions();

				let myHeaders = new Headers();
				let authString = "Bearer " + sessionStorage.getItem("token");
				myHeaders.append("Authorization", authString);

				let requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};
				// Endpoint to get the favorite list
				fetch("https://3000-salmon-scorpion-k7oalosd.ws-us03.gitpod.io/get_fav_user_logged", requestOptions)
					.then(response => response.json())
					.then(result => {
						console.log("Favorites");
						console.log(result[0].id);
						// Load the favorites obtained from the user logged
						if (result[0].id != undefined) {
							actions.loadFavorites(result);
						}
					})
					.catch(error => console.log("error", error));
			},

			// Get the user that logged in
			getUserLogged: () => {
				let myHeaders2 = new Headers();
				let authString2 = "Bearer " + sessionStorage.getItem("token");
				myHeaders2.append("Authorization", authString2);

				var requestOptions2 = {
					method: "GET",
					headers: myHeaders2,
					redirect: "follow"
				};

				fetch("https://3000-salmon-scorpion-k7oalosd.ws-us03.gitpod.io/get_logged_user", requestOptions2)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},

			// Set the username
			setUserName: user => {
				//get the store
				const store = getStore();
				let tmp = store.userName;
				tmp = user;
				//reset the global store
				setStore({ userName: tmp });
			},

			// Set the userID
			setUserID: id => {
				//get the store
				const store = getStore();
				let tmp = store.userId;
				tmp = id;
				//reset the global store
				setStore({ userId: tmp });
			},

			setVisibility: () => {
				//get the store
				const store = getStore();
				// Change the visibility
				let vis = store.visibilityUsername;
				vis = "visible";
				//reset the global store
				setStore({ visibilityUsername: vis });
			},

			showMore: type => {
				// Get the store
				const store = getStore();
				let position = store.indexArray;

				// Get the actions
				const actions = getActions();

				// Increase the number of items fetched by 6
				if (type == "People") {
					position[0].peopleStartIndex = position[0].peopleIndex;
					position[0].peopleIndex = position[0].peopleIndex + 6;
					setStore({ indexArray: position });
					actions.getPeopleFetch();
				} else if (type == "Planet") {
					position[1].planetStartIndex = position[1].planetIndex;
					position[1].planetIndex = position[1].planetIndex + 6;
					setStore({ indexArray: position });
					actions.getPlanetFetch();
				} else {
					position[2].starshipStartIndex = position[2].starshipIndex;
					position[2].starshipIndex = position[2].starshipIndex + 6;
					setStore({ indexArray: position });
					actions.getStarShipsFetch();
				}
			},

			loadFavorites: fav_Array => {
				// Get the store
				const store = getStore();
				// Create tmp variable to store the favorites array
				let tmpArray = store.arrayOfFavorites;
				tmpArray = fav_Array;
				setStore({ arrayOfFavorites: tmpArray });
			},

			addFavorites: async cardObject => {
				// If the like button was pressed twice, remove the item from the list
				// Get the store
				const store = getStore();
				let tmpArray = store.arrayOfFavorites;
				// Get actions
				const actions = getActions();

				// Create a tmp object to store the id and the name
				let tmpObj = {
					name: cardObject.name,
					id: cardObject.id
				};

				// If it is already in the list, remove it
				for (let i = 0; i < tmpArray.length; i++) {
					if (cardObject.name == tmpArray[i].name) {
						actions.removeFavorites(tmpObj);
					}
				}

				// Load the Selected Favorite to the list
				var myHeaders = new Headers();
				let auth = "Bearer " + sessionStorage.getItem("token");
				myHeaders.append("Authorization", auth);
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					object_Type: cardObject.type,
					object_Name: cardObject.name
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://3000-salmon-scorpion-k7oalosd.ws-us03.gitpod.io/add_fav_to_list", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));

				tmpArray.push(tmpObj);
				console.log(tmpArray);
				// reset the global store
				setStore({ arrayOfFavorites: tmpArray });
				console.log(cardObject);
			},

			removeFavorites: async favObj => {
				// Get the store
				const store = getStore();
				let tmpArray = store.arrayOfFavorites;
				let auxArray = [];
				for (let i = 0; i < store.arrayOfFavorites.length; i++) {
					// Copy all the data except the item to be removed
					if (tmpArray.name != favObj.name) {
						auxArray.push(store.arrayOfFavorites[i]);
					}
				}
				tmpArray = auxArray;
				//reset the global store
				setStore({ arrayOfFavorites: tmpArray });
				console.log(store.arrayOfFavorites);

				// Remove the Favorite from the API
				let myHeaders = new Headers();
				let auth = "Bearer " + sessionStorage.getItem("token");
				myHeaders.append("Authorization", auth);

				let requestOptions = {
					method: "DELETE",
					headers: myHeaders,
					redirect: "follow"
				};

				let url =
					"https://3000-salmon-scorpion-k7oalosd.ws-us03.gitpod.io/delete_fav_from_list/" +
					favObj.id.toString();

				await fetch(url, requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},

			getPeopleFetch: async () => {
				// Get Store
				const store = getStore();

				// Define initial amount of items to retrieve and page
				let startIdx = store.indexArray[0].peopleStartIndex;
				let limitLength = store.indexArray[0].peopleIndex;
				// URLs of the SWAPI
				let urlStringPeople = "https://3000-salmon-scorpion-k7oalosd.ws-us03.gitpod.io/get_character_by_id/";

				// GET Request Header
				let requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				let tmpArray = store.peopleArray;
				let tmpUrl = "";
				for (let i = startIdx; i < limitLength; i++) {
					tmpUrl = urlStringPeople + (i + 1).toString();
					await fetch(tmpUrl, requestOptions)
						.then(response => response.json())
						.then(result => {
							result.name != undefined ? tmpArray.push(result) : console.log("Undefined message");
						})
						.catch(error => console.log("error", error));
				}

				//reset the global store
				setStore({ peopleArray: tmpArray });
			},

			getPlanetFetch: async () => {
				// Get Store
				const store = getStore();

				// Define initial amount of items to retrieve and page
				let startIdx = store.indexArray[1].planetStartIndex;
				let limitLength = store.indexArray[1].planetIndex;
				// URLs of the SWAPI
				let urlStringPlanet = "https://3000-salmon-scorpion-k7oalosd.ws-us03.gitpod.io/get_planet_by_id/";

				// GET Request Header
				let requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				let tmpArray = store.planetsArray;
				let tmpUrl = "";
				for (let i = startIdx; i < limitLength; i++) {
					tmpUrl = urlStringPlanet + (i + 1).toString();
					await fetch(tmpUrl, requestOptions)
						.then(response => response.json())
						.then(result => {
							result.name != undefined ? tmpArray.push(result) : console.log("Undefined message");
						})
						.catch(error => console.log("error", error));
				}

				//reset the global store
				setStore({ planetsArray: tmpArray });
			},

			getStarShipsFetch: async () => {
				// Get Store
				const store = getStore();

				// Define initial amount of items to retrieve and page
				let startIdx = store.indexArray[2].starshipStartIndex;
				let limitLength = store.indexArray[2].starshipIndex;
				// URLs of the SWAPI
				let urlStringStarships = "https://3000-salmon-scorpion-k7oalosd.ws-us03.gitpod.io/get_starship_by_id/";

				// GET Request Header
				let requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				let tmpArray = store.starshipsArray;
				let tmpUrl = "";
				for (let i = startIdx; i < limitLength; i++) {
					tmpUrl = urlStringStarships + (i + 1).toString();
					await fetch(tmpUrl, requestOptions)
						.then(response => response.json())
						.then(result => {
							result.model != undefined ? tmpArray.push(result) : console.log("Undefined message");
						})
						.catch(error => console.log("error", error));
				}

				//reset the global store
				setStore({ starshipsArray: tmpArray });
			}
		}
	};
};

export default getState;

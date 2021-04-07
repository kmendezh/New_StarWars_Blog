// State definition
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			planetsArray: [],

			peopleArray: [],

			starshipsArray: [],

			arrayOfFavorites: [],

			indexArray: [
				{ peopleStartIndex: 0, peopleIndex: 6 },
				{ planetStartIndex: 0, planetIndex: 6 },
				{ starshipStartIndex: 1, starshipIndex: 11 }
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
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

			addFavorites: cardName => {
				// Get the store
				const store = getStore();

				// Get actions
				const actions = getActions();

				let tmpArray = store.arrayOfFavorites;
				// If it is already in the list, remove it
				for (let i = 0; i < tmpArray.length; i++) {
					if (cardName == tmpArray[i]) {
						actions.removeFavorites(i);
					}
				}
				tmpArray.push(cardName);
				//reset the global store
				setStore({ tmpArray: tmpArray });
			},

			removeFavorites: index => {
				// Get the store
				const store = getStore();
				let tmpArray = store.arrayOfFavorites;
				let auxArray = [];
				for (let i = 0; i < store.arrayOfFavorites.length; i++) {
					// Copy all the data except the item to be removed
					if (i != index) {
						auxArray.push(store.arrayOfFavorites[i]);
					}
				}
				tmpArray = auxArray;
				//reset the global store
				setStore({ arrayOfFavorites: tmpArray });
				console.log(store.arrayOfFavorites);
			},

			getPeopleFetch: async () => {
				// Get Store
				const store = getStore();

				// Define initial amount of items to retrieve and page
				let startIdx = store.indexArray[0].peopleStartIndex;
				let limitLength = store.indexArray[0].peopleIndex;
				console.log("Limit Length:");
				console.log(limitLength);
				// URLs of the SWAPI
				let urlStringPeople = "https://www.swapi.tech/api/people/";

				// GET Request Header
				let requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				let tmpArray = store.peopleArray;
				let tmpUrl = "";
				for (let i = startIdx; i < limitLength; i++) {
					tmpUrl = urlStringPeople + (i + 1).toString();
					console.log(tmpUrl);
					await fetch(tmpUrl, requestOptions)
						.then(response => response.json())
						.then(result => {
							result.message == "ok" ? tmpArray.push(result) : console.log("Undefined message");
							console.log(result);
						})
						.catch(error => console.log("error", error));
				}

				//reset the global store
				setStore({ tmpArray: tmpArray });
			},

			getPlanetFetch: async () => {
				// Get Store
				const store = getStore();

				// Define initial amount of items to retrieve and page
				let startIdx = store.indexArray[1].planetStartIndex;
				let limitLength = store.indexArray[1].planetIndex;
				// URLs of the SWAPI
				let urlStringPlanet = "https://www.swapi.tech/api/planets/";

				// GET Request Header
				let requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				let tmpArray = store.planetsArray;
				let tmpUrl = "";
				for (let i = startIdx; i < limitLength; i++) {
					tmpUrl = urlStringPlanet + (i + 1).toString();
					console.log(tmpUrl);
					await fetch(tmpUrl, requestOptions)
						.then(response => response.json())
						.then(result => {
							result.message == "ok" ? tmpArray.push(result) : console.log("Undefined message");
						})
						.catch(error => console.log("error", error));
				}

				//reset the global store
				setStore({ tmpArray: tmpArray });
			},

			getStarShipsFetch: async () => {
				// Get Store
				const store = getStore();

				// Define initial amount of items to retrieve and page
				let startIdx = store.indexArray[2].starshipStartIndex;
				let limitLength = store.indexArray[2].starshipIndex; // Some indexes never worked like /1 and /4
				// URLs of the SWAPI
				let urlStringStarships = "https://www.swapi.tech/api/starships/";

				// GET Request Header
				let requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				let tmpArray = store.starshipsArray;
				let tmpUrl = "";
				for (let i = startIdx; i < limitLength; i++) {
					tmpUrl = urlStringStarships + (i + 1).toString();
					console.log(tmpUrl);
					await fetch(tmpUrl, requestOptions)
						.then(response => response.json())
						.then(result => {
							result.message == "ok" ? tmpArray.push(result) : console.log("Undefined message");
						})
						.catch(error => console.log("error", error));
				}

				//reset the global store
				console.log(tmpArray);
				setStore({ tmpArray: tmpArray });
			}
		}
	};
};

export default getState;

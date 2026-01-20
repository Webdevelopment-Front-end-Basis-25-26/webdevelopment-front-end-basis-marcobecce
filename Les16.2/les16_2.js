// DEEL 1: Simpele array voor ingrediënten
let ingredienten = [];

document.getElementById("addIngredient").addEventListener("click", () => {

	let ingredient = document.getElementById("ingredientInput").value.trim();

	if (ingredient === "") {
		document.getElementById("ingredientenResultaat").innerHTML = "Voer een ingrediënt in!";
	}
	else {

		// Controleer of dit ingrediënt al in de array zit
		let bestaatAl = false;
		ingredienten.forEach(item => {
			if (item.toLowerCase() === ingredient.toLowerCase()) {
				bestaatAl = true;
			}
		});

		if (bestaatAl) {
			document.getElementById("ingredientenResultaat").innerHTML = ingredient + " staat al in de lijst!";
		}
		else {
			// Voeg toe met push()
			ingredienten.push(ingredient);
			document.getElementById("ingredientenResultaat").innerHTML = ingredient + " toegevoegd!";
		}

		document.getElementById("ingredientInput").value = "";
	}
});

document.getElementById("showIngredients").addEventListener("click", () => {

	if (ingredienten.length === 0) {
		document.getElementById("ingredientenResultaat").innerHTML = "Nog geen ingrediënten toegevoegd";
	}
	else {
		// Gebruik join() om alle ingrediënten te combineren
		let lijst = ingredienten.join(", ");

		document.getElementById("ingredientenResultaat").innerHTML =
			"<strong>" + ingredienten.length + " ingrediënten:</strong><br>" + lijst;
	}
});

// DEEL 2: Array van pizza objecten
let pizzas = [];

document.getElementById("addPizza").addEventListener("click", () => {
	let naam = document.getElementById("pizzaNaam").value.trim();
	let prijs = +document.getElementById("pizzaPrijs").value;
	let aantal = +document.getElementById("pizzaAantal").value;

	if (naam === "" || isNaN(prijs) || isNaN(aantal) || prijs < 0.01 || aantal < 1) {
		document.getElementById("pizzasResultaat").innerHTML = "Vul alle velden correct in!";
	}
	else {

		// Controleer of deze pizza al bestaat
		let bestaatAl = false;
		for (pizza of pizzas) {
			if (pizza.naam.toLowerCase() === naam.toLowerCase()) {
				// Update het prijs en aantal
				pizza.prijs = prijs;
				pizza.aantal = aantal;
				bestaatAl = true;
				document.getElementById("pizzasResultaat").innerHTML = "Pizza " + naam + " aangepast!";
			}
		}

		if (!bestaatAl) {
			// Maak een pizza object
			let pizza = {
				naam: naam,
				prijs: prijs,
				aantal: aantal
			};

			pizzas.push(pizza);

			document.getElementById("pizzasResultaat").innerHTML = "Pizza " + naam + " toegevoegd!";
		}

		document.getElementById("pizzaNaam").value = "";
		document.getElementById("pizzaPrijs").value = "";
		document.getElementById("pizzaAantal").value = "1";
	}
});

document.getElementById("showPizzas").addEventListener("click", () => {

	if (pizzas.length === 0) {
		document.getElementById("pizzasResultaat").innerHTML =
			"Nog geen pizza's toegevoegd";
	}
	else {
		// Toon tabel
		toonPizzaTabel(pizzas);
	}

});

function toonPizzaTabel(pizzaList) {

	// Maak tabel header - gebruik for...in om eigenschappen te krijgen
	let html = "<table>";
	html += "<tr>";

	// Loop door eigenschappen van eerste pizza voor headers
	for (let eigenschap in pizzaList[0]) {
		html += "<th>" + eigenschap + "</th>";
	}
	html += "<th>subtotaal</th>";
	html += "</tr>";

	// Loop door array van pizza's voor rijen
	pizzaList.forEach(pizza => {
		html += "<tr>";
		// Loop door eigenschappen voor cellen
		for (let eigenschap in pizza) {
			html += "<td>" + pizza[eigenschap] + "</td>";
		}
		// Bereken subtotaal
		let subtotaal = pizza.prijs * pizza.aantal;
		html += "<td>€" + subtotaal.toFixed(2) + "</td>";


		html += "</tr>";
	});
	html += "</table>";

	document.getElementById("pizzasResultaat").innerHTML = html;

}


document.getElementById("showTotal").addEventListener("click", () => {

	if (pizzas.length === 0) {
		document.getElementById("pizzasResultaat").innerHTML =
			"Voeg eerst pizza's toe!";
	} else {

		// Gebruik map() om subtotalen te berekenen
		let subtotalen = pizzas.map(pizza => {
			return pizza.prijs * pizza.aantal;
		});

		// Gebruik reduce() om het totaal te berekenen
		let totaal = subtotalen.reduce((som, bedrag) => {
			return som + bedrag;
		}, 0);

		// Toon tabel
		toonPizzaTabel(pizzas);

		// Voeg totaal toe
		document.getElementById("pizzasResultaat").innerHTML +=
			"<div class='totaal'>Totaal: €" + totaal.toFixed(2) + "</div>";

	}

});

document.getElementById("filterPizzas").addEventListener("click", () => {

	let minAantal = +document.getElementById("minAantal").value;

	if (isNaN(minAantal) || minAantal < 1) {
		document.getElementById("pizzasResultaat").innerHTML ="Voer een geldig aantal in!";
	} else {
		if (pizzas.length === 0) {
			document.getElementById("pizzasResultaat").innerHTML =
				"Voeg eerst pizza's toe!";
		}
		else {
			// Gebruik filter() om pizza's te selecteren
			let gefilterdePizzas = pizzas.filter(pizza => {
				return pizza.aantal >= minAantal;
			});

			if (gefilterdePizzas.length === 0) {
				document.getElementById("pizzasResultaat").innerHTML =
					"Geen pizza's gevonden met minimaal " + minAantal + " stuks";
			} else {
				console.log(gefilterdePizzas);
				toonPizzaTabel(gefilterdePizzas);
			}
		}
	}
});
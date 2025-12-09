function VraagGetal(waarde) {
    let getal;

    do {

        getal = prompt(waarde);

    }
    while (getal === "" || getal == null || isNaN(getal))
    {
        return Number(getal);
    }






}

function vergelijkGetallen(getal1, getal2) {
    if (getal1 > getal2) {
        return "Getal 1 is groter";
    }
    else if (getal1 < getal2) {
        return "Getal 2 is groter";
    }
    else {
        return "getallen zijn gelijk";
    }

}


document.getElementById("oefening1").onclick = function () {
    const getal1 = VraagGetal("Geef het 1e getal in");
    const getal2 = VraagGetal("Geef het 2e getal in");

    document.getElementById("getal1").innerText = getal1;
    document.getElementById("getal2").innerText = getal2;

    const resultaat = vergelijkGetallen(getal1, getal2);
    document.getElementById("resultaat1").innerText = resultaat;
}



function vraagGetalInBereik(waarde,min, max){
    let getal;
    do {
        getal = VraagGetal(waarde);
        if (getal < min || getal > max || isNaN(getal) || getal === "") {
            alert(`Ongeldige invoer. Voer een getal in tussen ${min} en ${max}.`);
        }
    }while (getal < min || getal > max || isNaN(getal));
    return getal;
}


function genereerTafels(getal)
{
    let tekst = "";
    for (let i = 1; i <= 10; i++) {
        tekst += getal + " x " + i + " = " + (getal * i) + "<br>";
    }
    return tekst;
}


document.getElementById("oefening2").onclick = function () 
{

    const gekozenGetal = vraagGetalInBereik("Geef een getal tussen 1 en 20:", 1, 20);
    document.getElementById("getal").textContent = gekozenGetal;
    const tafelTekst = genereerTafels(gekozenGetal);
    document.getElementById("resultaat2").innerHTML = tafelTekst;


}


document.getElementById("oefening3").addEventListener("click", () => {
	demonstreerVarVsLet();
});

function demonstreerVarVsLet() {
	let resultaatDiv = document.getElementById("resultaat3");
	resultaatDiv.innerHTML = "<h3>Verschil tussen var en let:</h3>";

	
	resultaatDiv.innerHTML += "<strong>1. Block Scope:</strong><br>";
	if (true) {
		var varGetal = 10;
		let letGetal = 20;
	}
	resultaatDiv.innerHTML += "var buiten block: " + varGetal + "<br>";
	
	resultaatDiv.innerHTML += "let buiten block: niet toegankelijk (ReferenceError)<br><br>";

	
	resultaatDiv.innerHTML += "<strong>2. Loop Scope Probleem:</strong><br>";
	for (var i = 0; i < 3; i++) {
		setTimeout(function () {
			console.log("var i:", i); 
			resultaatDiv.innerHTML += "var i in timeout: " + i + "<br>"; 
		}, 100);
	}
	resultaatDiv.innerHTML += "var i na loop: " + i + "<br>";

	for (let j = 0; j < 3; j++) {
		setTimeout(function () {
			console.log("let j:", j); 
			resultaatDiv.innerHTML += "var j in timeout: " + j + "<br>"; 
		}, 100);
	}
	
	resultaatDiv.innerHTML += "let j na loop: niet toegankelijk (ReferenceError)<br><br>";
}




function getFizzBuzzWaarde(getal) 
{
	if (getal % 3 === 0 && getal % 5 === 0) {
		return "FizzBuzz";
	} else if (getal % 3 === 0) {
		return "Fizz";
	} else if (getal % 5 === 0) {
		return "Buzz";
	} else {
		return getal;
	}
}

document.getElementById("oefening4").onclick = function()
{
    let tot = vraagGetalInBereik("Tot welk getal wil je FizzBuzz spelen? (1-100)", 1, 100);

    let resultaat = "";
	for (let i = 1; i <= tot; i++) {
		const waarde = getFizzBuzzWaarde(i);
		resultaat += i + " : " + waarde + "<br>";
	}
	document.getElementById("resultaat4").innerHTML = resultaat;

}

function toonPriemgetallen(van, tot) {
	let resultaat = "";
	let aantalPriemen = 0;

	for (let i = van; i <= tot; i++) {
		if (isPriem(i)) {
			if (aantalPriemen > 0) {
				resultaat += ", ";
			}
			resultaat += i;
			aantalPriemen++;
		}
	}

	return resultaat;
}


function isPriem(getal) {
	if (getal < 2) return false;
	if (getal === 2) return true;
	if (getal % 2 === 0) return false;

	// Check alleen oneven delers tot getal
	for (let i = 3; i < getal; i += 2) {
		if (getal % i === 0) return false;
	}

	return true;
}


function toonPriemgetallen(van, tot) {
	let resultaat = "";
	let aantalPriemen = 0;

	for (let i = van; i <= tot; i++) {
		if (isPriem(i)) {
			if (aantalPriemen > 0) {
				resultaat += ", ";
			}
			resultaat += i;
			aantalPriemen++;
		}
	}

	return resultaat;
}


document.getElementById("oefening5").onclick = function() {
	const getal = vraagGetalInBereik("Geef een getal tussen 1 en 100:", 1, 100);

	let resultaat = "<strong>Getal: " + getal + "</strong><br>";

	
	if (isPriem(getal)) {
		resultaat += getal +" is een <span style='color: green;'>priemgetal</span>!<br><br>";
	} else {
		resultaat += getal + " is <span style='color: red;'>geen priemgetal</span>.<br><br>";
	}

	
	resultaat += "Priemgetallen van 2 tot "+ getal + ":<br>";
	resultaat += toonPriemgetallen(2, getal);

	document.getElementById("resultaat5").innerHTML = resultaat;
};





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


function demonstreerVarVsLet() 
{
    let resultaatDiv = document.getElementById("resultaat3");
    resultaatDiv.innerHTML = "<h3>Verschil tussen var en let:</h3>";
 
 
    // Voorbeeld 1: Block scope
    resultaatDiv.innerHTML += "<strong>1. Block Scope:</strong><br>";
    if (true) {
        var varGetal = 10;
        let letGetal = 20;
    }
    resultaatDiv.innerHTML += "var buiten block: " + varGetal + "<br>";
    resultaatDiv.innerHTML += "let buiten block:" + letGetal + "<br>"; 
    resultaatDiv.innerHTML += "let buiten block: niet toegankelijk (ReferenceError)<br><br>";
 
 
    // Voorbeeld 2: Loop scope probleem met var
    resultaatDiv.innerHTML += "<strong>2. Loop Scope Probleem:</strong><br>";
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log("var i:", i); // Print altijd 3!
            resultaatDiv.innerHTML += "var i in timeout: " + i + "<br>"; // wordt pas geprint na timeout
        }, 100);
    }
    resultaatDiv.innerHTML += "var i na loop: " + i + "<br>";
 
 
    for (let j = 0; j < 3; j++) {
        setTimeout(function () {
            console.log("let j:", j); // Print 0, 1, 2
            resultaatDiv.innerHTML += "var j in timeout: " + j + "<br>"; // wordt pas geprint na timeout
        }, 100);
    }
    resultaatDiv.innerHTML += "let j na loop:" + j +"<br>";
    resultaatDiv.innerHTML += "let j na loop: niet toegankelijk (ReferenceError)<br><br>";
}





document.getElementById("oefening3").onclick = function()
{


}





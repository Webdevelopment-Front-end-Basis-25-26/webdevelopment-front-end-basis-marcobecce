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



function vraagGetalInBereik(min, max, waarde) {
    let getal;

    do {
        getal = VraagGetal(waarde);

    }
    while (getal > min || getal < max)
    {
        return getal;

    }
}

function genereerTafels(getal)
{
    let tekst;
    for( let i = 1; i<10 ; i++ )
        {
            tekst = "";
            tekst += getal + " x " + i + " = " + (getal*i) + "<br>";
            
        }
        return tekst;
}


document.getElementById("oefening2").onclick = function () 
{

    const gekozenGetal = vraagGetalInBereik(1, 20, "Geef een getal tussen 1 en 20.");
    document.getElementById("getal").textContent = gekozenGetal;
    const resultaat = genereerTafels(gekozenGetal);
    document.getElementById("resultaat2").innerHTML = resultaat;
    

}

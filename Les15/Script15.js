function VraagGetal(waarde) {
    let getal;

    do {
        getal = prompt(waarde);

        if (getal === "" || getal == null || isNaN(getal)) {
            alert("fout");
        }


    } while (getal === "" || getal == null || isNaN(getal))

    return Number (getal);

}

function vergelijkGetallen(getal1, getal2) {
    if (getal1 > getal2) 
        {
            return "Getal 1 is groter";
        }
    else if (getal1 < getal2) 
        {
            return "Getal 2 is groter";
        }    
    else
        {
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



function vraagGetalInBereik(min, max, getal)
{
    let waarde;

    do 
    {
        waarde = VraagGetal(getal);

    }
}


document.getElementById("oefening2").onclick = function () 
{

}

let scoreRood = 0;
let scoreBlauw = 0;

function updateScore() 
{
    document.getElementById("scoreRood").innerText = scoreRood;
    document.getElementById("scoreBlauw").innerText = scoreBlauw;
}
document.getElementById("btnRoodPlus1").onclick = function() 
{
    scoreRood +=1;
    document.getElementById("scoreRood").innerText = scoreRood;

}
document.getElementById("btnRoodPlus3").onclick = function()
{
    scoreRood +=3;
    document.getElementById("scoreRood").innerText = scoreRood;

}
document.getElementById("btnBlauwPlus1").onclick = function() 
{
    scoreBlauw +=1;
    document.getElementById("scoreBlauw").innerText = scoreBlauw;

}
document.getElementById("btnBlauwPlus3").onclick = function()
{
    scoreBlauw +=3;
    document.getElementById("scoreBlauw").innerText = scoreBlauw;

}
document.getElementById("updateRood").onclick = function()
{
    scoreRood = Number(document.getElementById("valueRood").value);
    document.getElementById("scoreRood").innerText = scoreRood;
}
document.getElementById("updateBlauw").onclick = function()
{
    scoreBlauw = Number(document.getElementById("valueBlauw").value);
    document.getElementById("scoreBlauw").innerText = scoreBlauw;
}
document.getElementById("btnResetScores").onclick = function() 
{
    scoreBlauw = 0;
    scoreRood = 0;
    document.getElementById("scoreBlauw").innerText = scoreBlauw;
    document.getElementById("scoreRood").innerText = scoreRood;

}

const kleurbox = document.getElementById("kleurBox");

document.getElementById("btnRood").onclick = function() 
{
    kleurbox.style.backgroundColor = "#FF0000";
}
document.getElementById("btnBlauw").onclick = function() 
{
    kleurbox.style.backgroundColor = "#0000FF";
}
document.getElementById("btnGroen").onclick = function() 
{
    kleurbox.style.backgroundColor = "#008000";
}
document.getElementById("kleurKiezer").onchange = function() 
{
    var selectedColor = document.getElementById("kleurKiezer").value;
    document.getElementById("kleurBox").style.backgroundColor = selectedColor;
}
document.getElementById("btnBericht").onclick = function() 
{
    var naam = document.getElementById("naam").value;
    var voornaam = document.getElementById("voornaam").value;
    var vandaag = new Date();
    var geboorte = new Date(document.getElementById("geboortedatum").value);   

    var leeftijd = vandaag.getFullYear() - geboorte.getFullYear();

    document.getElementById("leeftijdBericht").innerText = `Hallo ${voornaam} ${naam}, je wordt dit jaar ${leeftijd} jaar oud`;
}
document.getElementById("box").onmouseover = function() 
{
    document.getElementById("resultaat").innerText = "De box werdt betreden";
    document.getElementById("box").style.backgroundColor = '#008000';
}
document.getElementById("box").onmouseleave = function() 
{
    document.getElementById("resultaat").innerText = "De box werdt verlaten"
    document.getElementById("box").style.backgroundColor = '#FF0000';
}
document.getElementById("box").onmousedown = function()
{
    document.getElementById("box").style.border = '5px solid black'
}
document.getElementById("box").onmouseup = function() 
{
    document.getElementById("box").style.border = 'none';
}
document.getElementById("menuButton").onclick = function()
{
    document.getElementById("menuButton").classList.toggle("closed");
}



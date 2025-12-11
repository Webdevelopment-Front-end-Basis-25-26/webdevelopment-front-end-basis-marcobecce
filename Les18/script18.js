let knop = document.querySelector("button");

knop.addEventListener("click", function () {
    let plaatsnaam = document.querySelector("input").value;

    if (plaatsnaam === "") {
        alert("Geen een plaatsnaam in aub!");
        return;
    }
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + plaatsnaam + "&appid=fae5d07670082d53528da10449167e79&units=metric&lang=nl";

    fetch(url)
        .then(function (response) {
            return response.json();
        })

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.weather[0].description);
            let weer = data.weather[0].description;
            document.getElementById("resultaat").innerHTML = weer;
            let imgCode = data.weather[0].icon;
            let imgurl 


        });



    document.getElementById("resultaat").innerHTML = weer;



})
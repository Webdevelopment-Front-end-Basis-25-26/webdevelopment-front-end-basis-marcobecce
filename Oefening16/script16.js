var ingredientInput = document.getElementById("ingredientInput");
var ingredientenResultaat = document.getElementById("ingredientenResultaat");

var ingredientenArray = [];


function Message(text) {
    ingredientenResultaat.innerHTML = text;

}





document.getElementById("addIngredient").onclick = function () {

    var input = ingredientInput.value.toLowerCase();


    if (input === "") {
        Message("Voer een ingrediënt in!");
    }
    else if (ingredientenArray.includes(input.toLowerCase())) {
        Message(input + " staat al in de lijst.");
    }
    else {
        ingredientenArray.push(input);
        Message(input + " toegevoegd!");
        input = "";

    }
}

document.getElementById("showIngredients").onclick = function () {
    ingredientenResultaat.innerText = "";
    if (ingredientenArray.length == 0) {
        Message("Nog geen ingrediënten toegevoegd");
    }
    else {
        Message("<b>" + ingredientenArray.length + " Ingrediënten:" + "</b>" + "</br>" + ingredientenArray.join(", "));
    }
}




var pizzaArray = []

function MessagePizza(bericht) {
    document.getElementById("pizzasResultaat").innerHTML = bericht;
}




document.getElementById("addPizza").onclick = function () {
    if (document.getElementById("pizzaNaam").value == "" || document.getElementById("pizzaPrijs").value == "" || isNaN(Number(document.getElementById("pizzaAantal").value))
        || Number(document.getElementById("pizzaPrijs").value) < 0.01 || Number(document.getElementById("pizzaAantal").value) < 1) {
        MessagePizza("Vul alle velden correct in!")
    }
    else {
        let pizza = {
            naam: document.getElementById("pizzaNaam").value,
            prijs: document.getElementById("pizzaPrijs").value,
            aantal: document.getElementById("pizzaAantal").value
        };

        pizzaArray.push(pizza);
        MessagePizza("Pizza " + pizza.naam + " toegevoegd!" )

        document.getElementById("pizzaNaam").value = "";
        document.getElementById("pizzaPrijs").value = "";
        document.getElementById("pizzaAantal").value = 1;


    }

        document.getElementById("showPizzas").onclick = function()
        {
            if(pizzaArray.length === 0 )
                {
                    MessagePizza("Nog geen pizza's toegevoegd");
                }
            else
                {
                    
                }
        }
}
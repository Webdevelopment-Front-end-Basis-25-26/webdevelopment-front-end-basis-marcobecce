var ingredientInput = document.getElementById("ingredientInput");
var ingredientenResultaat = document.getElementById("ingredientenResultaat");

var ingredientenArray = [];


function Message(text) {
    ingredientenResultaat.innerHTML = text;

}

function bestaatAl(Input)
{
    ingredientenArray.forEach(item =>
        {
            
        })
}





document.getElementById("addIngredient").onclick = function () {
    if (ingredientInput.value === "") {
        Message("Voer een ingrediënt in!");
    }
    else {
        ingredientenArray.push(ingredientInput.value);
        Message(ingredientInput.value + " toegevoegd!");
        ingredientInput.value = "";

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
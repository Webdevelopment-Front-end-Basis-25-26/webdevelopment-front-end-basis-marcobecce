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
    else if(ingredientenArray.includes(input))
        {
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
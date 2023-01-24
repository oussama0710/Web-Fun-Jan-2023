/* var sandwich = {
    bread:    "sourdough",
    protein:  "london broil",
    cheese:   "lacey swiss cheese",
    toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
};
    
console.log(sandwich);
function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
} */
    
/* var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
console.log(s1); */
var pizza1 = {crustType:"deep dish",
            sauceType: "traditional",
            cheeses: ["mozzarella"],
            toppings: ["pepperoni", "sausage"]};
var pizza2 = {crustType:"hand tossed",
            sauceType: "marinara",
            cheeses: ["mozzarella", "feta"],
            toppings: ["mushrooms", "olives", "onions"]};
var pizza3 = {crustType:"dough",
            sauceType:"home made",
            cheeses:["mozzarella"],
            toppings:["honey","onions","tomatoes"]};
var pizza4 = {crustType:"crunshy dough",
                sauceType:"Pesto",
                cheeses:["Cheddar"],
                toppings:["garlic","oninons","nuts","peper"]};
var pizzas=[pizza1,pizza2,pizza3,pizza4];

function pizzaOven(crustType, sauceType, cheeses,toppings){
    var pizza ={};
    pizza.crustType= crustType;
    pizza.sauceType=sauceType;
    pizza.cheeses=cheeses;
    pizza.toppings=toppings;
    return pizza;
}


function randomPizza(){
    var s1=pizzaOven(pizzas[Math.floor(Math.random()*pizzas.length)]);
    console.log(s1);
}
randomPizza();

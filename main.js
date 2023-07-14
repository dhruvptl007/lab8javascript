var buns = ["everything", "whole", "plain", "sesame","herbs"];
var vegetable = ["jhalepeno","cucumbers","lettuce", "tomato", "onion", "pickles"];
var cheeses = ["cheddar", "white", "mozzarella", "spicy"];
var sauces = ["ranch","sweet chiili","mayonnaise", "mustard", "ketchup", "caesar"];
var pattyType = ["beef", "chicken", "vegetarian","bacon"];
var pattiesNo = ["single", "double", "triple"];
var toppings = ["chiilies", "herbs", "olives"];

function getRandomOption(options) {
  var randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function createHamburger() {
  var bun = getRandomOption(buns);
  var vegetables = [getRandomOption(vegetable), getRandomOption(vegetable)];
  var cheese = getRandomOption(cheeses);
  var sauce = getRandomOption(sauces);
  var meat = getRandomOption(pattyType);
  var patties = getRandomOption(pattiesNo);
  var randomToppings = [getRandomOption(toppings), getRandomOption(toppings), getRandomOption(toppings)];
  return {
    bun: bun,
    vegetables: vegetables,
    cheese: cheese,
    sauce: sauce,
    meat: meat,
    patties: patties,
    toppings: randomToppings,
    describe: function() {
      var description = "This hamburger is made with " + bun + " bun, ";
      description += "stuffed with " + vegetables.join(", ") + ", ";
      description += "topped with " + cheese + " cheese, ";
      description += "and dressed with " + sauce + " sauce.";
      description += "It has fresh " + patties + " " + meat + " patties ";
      description += "and is topped by" + randomToppings.join(", ") + ".";
      return description;
    }
  };
}
function describeHamburger() {
    var myHamburger = createHamburger();
    var descriptionElement = document.getElementById("description");
    descriptionElement.textContent = myHamburger.describe();
  }
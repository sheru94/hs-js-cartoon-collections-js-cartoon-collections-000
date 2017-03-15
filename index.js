function dwarfRollCall(dwarves) {
  var string = ""
  for (var i = 0; i < dwarves.length; i++) {
    string = string + (i + 1) + ". " + dwarves[i] + " "
  }
  return string;
}

function summonCaptainPlanet(planeteerCalls){
  var array = planeteerCalls.map(function(el) {
    return el.toUpperCase() + "!"
  });
  return array;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    }
  }
  return false;
}

function findTheCheese (foods) {
  var cheeses = ["cheddar","gouda","camembert"]

  for (var i = 0; i < foods.length; i++) {
    if (cheeses.includes(foods[i])) {
      return foods[i]
    }
  }
  return "no cheese!"
}

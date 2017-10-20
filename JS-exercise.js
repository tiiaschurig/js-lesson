//exercise 1.
var x = 20;
var y = 250;
var result = x + y;
console.log(result);

var firstName = "Tiia";
var lastName = "Schurig";
var fullName = firstName + " " + lastName;
console.log(fullName);

//exercise 2.
var dogs = ["labrador", "poodle", "shepard"];
var cats = ["siamese", "alley", "persian"];
var animals = [dogs, cats];
// var animals = [ ["labrador", "poodle", "shepard"], ["siamese", "alley", "persian"]];
console.log(animals[1][2]);
console.log(animals[0][1]);

//exercise 3.
var x = 125;

if (x < 100){
  alert ("Your variable is less than 100");
} else {
  alert ("Your variable is " + (x) + " and is greater than 100.");
}

//exercise 4.
function name(someName) {
  return alert(someName);
}

name("Gary");

//exercise 5.
function prizes (doorNumber){
  if (doorNumber === 1) {
    return alert ("You have won a car!");
  } else if (doorNumber === 2) {
    return alert ("You have won a boat!");
  } else if (doorNumber === 3) {
    return alert ("You have won a house!");
  } else {
    return alert ("That is not an option.");
  }
}
prizes (4);

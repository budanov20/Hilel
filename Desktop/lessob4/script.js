let firstNumber = Number(prompt("Enter any number"));
let secondNumber = Number(prompt("Enter any number again)"));

if (firstNumber === '') {
  firstNumber = 0;
}

if (secondNumber === '') {
  secondNumber = 22;
}

let newVariable;

if (firstNumber != false && secondNumber != false ) {
  newVariable = 80;
} else {
  newVariable = 40;
}

let newObject = {};

if (firstNumber >= 90) {
  newObject.size = "big";
} else if (firstNumber <= 40) {
  newObject.size = "small";
} else {
  newObject.size = "medium";
}

let anotherVariable;

switch (newObject.size) {
  case "big":
    anotherVariable = 1000;
  break;
  case "medium":
    anotherVariable = 100;
  break;
  case "small":
    anotherVariable = 10;
  break;
}

let summary = firstNumber * secondNumber * newVariable * anotherVariable;

if (summary % 2 !== 0) {
  console.log("Hurray!")
} else if (secondNumber > 50) {
  alert(`${secondNumber}`);
}

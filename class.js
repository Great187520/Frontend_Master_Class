//for (initialization; condition; increment) {
// code to be executed
//}

// Print numbers from 1 to 5
/*for (let i = 1; i <= 5; i++) {
  console.log(i);
}*/

/*const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}*/

//While loop
/*while (condition){
  // code to be executed
}*/
/*let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}*/

/*const fruits = ["apple", "banana", "cherry"];
let index = 0;

while (index < fruits.length) {
  console.log(fruits[index]);
  index++;
}*/

//Do...While Loop
/*do {
  // code to be executed
} while (condition);
*/

// print numbers from 1 - 5
/*let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
*/

/*let i = 6;
do {
  console.log(i);
  i++;
} while (i <= 5);
*/

// Print numbers from 1 to 5, but stop when reaching 3
/*for (let i = 1; i <= 5; i++) {
  if (i === 4) {
    break;
  }
  console.log(i);
}*/

// print numbers from 1 to 5, but skip 3
/*for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}*/

/*let i = 1;

// Break Example
while (i <= 5) {
  if (i === 3) {
    break;
  }
  console.log(i);
  i++;
}

// continue example
i = 1;
while (i <= 5) {
  if (i === 3) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}
*/

// function declaration

/*function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Ali"));*/

//Function Expression
/*const greet = function(name) {
  return `Hello, ${name}!`;
}

console.log(greet('John Doe'));*/

//Parameters and Arguments
/*function add(a, b) {
  return a + b;
}

console.log(add(3, 4));*/

//Return Values
/*function multiply(a, b) {
  return a * b;
}

let result = multiply(4, 5);
console.log(result);*/

// Arrow Functions (ES6+)

/*const greet = (name) => `Hello, ${name}!`;

console.log(greet('Charlie'));

const add = (a, b) => a + b;
console.log(add(2,3));*/

//Adding Event Listeners(Click, mouseOver, mouseOut, etc):
//click event
/*const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  alert("Button Clicked!");
});

// MouseOver and mouseout events
const hoverDiv = document.getElementById("hoverDiv");
hoverDiv.addEventListener("mouseover", () => {
  hoverDiv.style.backgroundColor = "yellow";
});
hoverDiv.addEventListener("mouseout", () => {
  hoverDiv.style.backgroundColor = "lightBlue";
});*/

const targetButton = document.getElementById("targetButton");
const addListener = document.getElementById("addListener");
const removeListener = document.getElementById("removeListener");

function clickHandler() {
  alert("Target button clicked!");
}

addListener.addEventListener("click", () => {
  targetButton.addEventListener("click", clickHandler);
});

removeListener.addEventListener("click", () => {
  targetButton.removeEventListener("click", clickHandler);
});

/*// Creating an Object
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  startEngine() {
    console.log("Engine started");
  },
};

// Using Object Properties and Methods
console.log(car.brand);
console.log(car.model);
car.startEngine();

// creating and Manipulating an Array
const fruits = ["apple", "banana", "mango"];
fruits.push("Orange");
console.log(fruits); 

// Creating an Object
const person = {
  name: "John",
  age: 30,
  occupation: "Software Engineer",
};

// Accessing Object Properties
console.log(person.name);
console.log(person.occupation);

// Creating an Array
const fruits = ["apple", "banana", "cherry"];

//Accessing Array Elements
console.log(fruits[1]);

//Adding Elements to an array
fruits.push("date");
console.log(fruits); 

// Arrow Functions
const add = (a, b) => a + b;
console.log(add(2, 3));

// Destructuring Objects
const person = {
  name: "John",
  age: 30,
  occupation: "Software Engineer",
};
const { name, age } = person;
console.log(name);

// Destructuring Arrays
const fruits = ["apple", "banana", "cherry"];
const [firstFruit, secondFruit] = fruits;
console.log(firstFruit);

// Template Literals
const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);


// callbacks
function fetchData(callback) {
  setTimeout(() => {
    callback("Data Received");
  }, 1000);
}
fetchData((data) => {
  console.log(data); //Data received
});
*/

// Promises
const fetchDataPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received");
  }, 1000);
});
fetchDataPromise.then((data) => {
  console.log(data);
});

// Async/Await
async function fetchDataAsync() {
  const data = await fetchDataPromise;
  console.log(data); // Data received
}
fetchDataAsync();

//Working with DOM
// Selecting an Element by ID
const header = document.getElementById("header");
header.textContent = "Welcome!";

// Selecting Elements by CSS Selector
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((p) => (p.style.color = "blue"));

//Event Handling: Adding Event Listeners, Creating Interactive Elements

// Adding a Click Event Listener
const button = document.querySelector("button");
button.addEventListener("click", () => {
  alert("Button clicked!");
});

// Adding Mouseover Event Listener
const image = document.querySelector("img");
image.addEventListener("mouseover", () => {
  image.style.border = "2px solid red";
});

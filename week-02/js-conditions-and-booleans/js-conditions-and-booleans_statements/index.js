console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
const receivedPassword = "password1234";

if (receivedPassword !== SUPER_SECRET_PASSWORD) {
  console.log("denied");
} else {
  console.log("welcome");
}

// Part 2: Even / Odd
const number = 6;

// const number2 = 12;
// console.log(number2);
// console.log(number2 % 2);

if (number % 2) {
  console.log("truthy");
} else {
  console.log("falsy");
}

// if (number % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// Part 3: Hotdogs
const numberOfHotdogs = 42;
let priceForHotdogs;

if (numberOfHotdogs < 5) {
  priceForHotdogs = numberOfHotdogs * 2;
  console.log("price per hotdog:", "2", "euro");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  priceForHotdogs = numberOfHotdogs * 1.5;
  console.log("price per hotdog:", "1.5", "euro");
}

console.log("price for hotdogs:", priceForHotdogs, "euro");

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting =
  "Hello " + (userName === "Archibald" ? "Coach" : userName) + "!";

console.log(greeting);

import { zooAnimals } from "../utils/db.js";

// This website uses a function to check wether a specific animal is part 
// of the zoo or not but it's not working correct.
// Please implement the function 'hasAnimal' that gets an array of animals and an animal name
// The function should return 'true' if the animal name is included in the array or 'false' if not.

// const zooAnimals = [ "affe", "tiger"];
// const upperCaseAnimalList = zooAnimals.map((SingleAnimal) => {
//   return SingleAnimal.toUpperCase();
// }); 

function hasAnimal(zooAnimals, searchQuery) {
  // const resultIncludedAnimal = zooAnimals.includes(searchQuery);
  // return resultIncludedAnimal;
  const upperCaseAnimalList = zooAnimals.map((SingleAnimal) => {
    return SingleAnimal.toUpperCase();
  });
  const upperCaseSearchQuery = searchQuery.toUpperCase();
  return upperCaseAnimalList.includes(upperCaseSearchQuery);
  };


// Bitte führe folgende Funktion mit dem Namen hasAnimal aus: 
// Nehme den Array zooAnimals und den Array searchQuery und überprüfe, ob das Wort aus searchQuery in der Liste zooAnimals vorkommt

// Bonus:
// Can you modify the function so that it works case-insensitive?
// This means it should return true, even if you search for 'sheep' or 'SHEEP' or 'sHeEp'.
// Hint: Remember the 'map' function

// -------------------------------------------------------------------------------------
// ----- The following code is used for the browser preview. Please don't touch it -----

const animalList = document.querySelector("[data-js='animalList']");
const animalForm = document.querySelector("[data-js='animalForm']");
const output = document.querySelector("[data-js='output']");

animalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchQuery = event.target.searchQuery.value;
  output.textContent = "";
  if (searchQuery.trim() === "") {
    return;
  }
  const result = hasAnimal(zooAnimals, searchQuery);
  output.textContent = result
    ? `Yes, we have ${searchQuery}`
    : `No, we don't have ${searchQuery}`;
});
zooAnimals.forEach((animal) => {
  const tag = document.createElement("span");
  tag.classList.add("tag");
  tag.textContent = animal;
  animalList.append(tag);
});


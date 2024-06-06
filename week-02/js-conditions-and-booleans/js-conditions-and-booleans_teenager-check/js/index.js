const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

// console.clear();

// const age = Number(input.value);
// console.log(age);

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!

  const age = Number(input.value);
  // console.log(output);
  // console.log(output.innerHTML);

  if (age > 10 && age < 20) {
    output.innerHTML = "You are a teen.";
    output.style.color = "white";
    output.style.backgroundColor = "green";
    // console.log(output.innerHTML);
  } else {
    output.innerHTML = "You are not a teen.";
    output.style.color = "white";
    output.style.backgroundColor = "red";
    // console.log(output.innerHTML);
  }

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.

  // if (age > 10 && age < 20) {
  //   console.log("You are a teen.");
  // } else {
  //   console.log("You are not a teen.");
  // }
});

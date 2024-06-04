console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const buttonDark = document.querySelector('[data-js="dark-mode-button"]');
// console.log(buttonDark);

const buttonLight = document.querySelector('[data-js="light-mode-button"]');
// console.log(buttonLight);

const buttonToggle = document.querySelector('[data-js="toggle-button"]');
// console.log(buttonToggle);

buttonDark.addEventListener("click", () => {
  // console.log('Button clicked');
  bodyElement.classList.add("dark");
});

buttonLight.addEventListener("click", () => {
  // console.log('Button clicked');
  bodyElement.classList.remove("dark");
});

buttonToggle.addEventListener("click", () => {
  // console.log('Button clicked');
  bodyElement.classList.toggle("dark");
});

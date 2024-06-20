const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

// Task 1: Create colored boxes from the array of hex codes using the forEach array method.

// colors.forEach((color) => {
//   const colorBox = document.createElement('div');
//   colorBox.classList.add("color-box");
//   colorBox.style.backgroundColor = color;
//   document.body.append(colorBox);
// });

// Task 2: Instead of writing the callback function directly inside the forEach method, we can use a function reference.

function renderColorBox (color) {
    const colorBox = document.createElement('div');
    colorBox.classList.add("color-box");
    colorBox.style.backgroundColor = color;
    document.body.append(colorBox);
};

colors.forEach(renderColorBox);

// Wenn die Funktion in unterschiedliche Verwendungen einzusetzen, eine Template-Funktion
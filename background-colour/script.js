"use strict";

const btnColour = document.querySelector(".btnColour");
const bodyBg = document.querySelector("body");
const innerCardTop = document.querySelector(".innerCardTop");
const textTitle = document.querySelector(".text-title");
const textHex = document.querySelector(".text-hex");
const textRgb = document.querySelector(".text-rgb");
const textHsl = document.querySelector(".text-hsl");
const textHsv = document.querySelector(".text-hsv");

// const colours = [
//   "#77dd77",
//   "#836953",
//   "#89cff0",
//   "#99c5c4",
//   "#9adedb",
//   "#aa9499",
//   "#aaf0d1",
//   "#b2fba5",
//   "#bdb0d0",
//   "#bee7a5",
//   "#befd73",
//   "#c1c6fc",
//   "#c6a4a4",
//   "#cb99c9",
//   "#fdfd96",
//   "#ff6961",
//   "#ff694f",
//   "#ff9899",
//   "#ffb7ce",
//   "#ca9bf7",
// ];

const colours = [
  {
    title: "Pastel Green",
    hex: "#77dd77",
    rgb: "(119,221,119)",
    hsl: "(120°, 61%, 67%)",
    hsv: "(120°, 46%, 87%)",
  },
  {
    title: "Pastel Brown",
    hex: "#836953",
    rgb: "(131, 105, 83)",
    hsl: "(28°, 23%, 42%",
    hsv: "(28°, 37%, 51%)",
  },
  {
    title: "Baby Blue",
    hex: "#89cff0",
    rgb: "(137, 207, 240)",
    hsl: "(199°, 77%, 74%)",
    hsv: "(199°, 43%, 94%)",
  },
  {
    title: "Pastel Turquoise",
    hex: "#99c5c4",
    rgb: "(153, 197, 196)",
    hsl: "(180°, 27%, 68%)",
    hsv: "(179°, 22%, 77%)",
  },
  {
    title: "Blue Green Pastel",
    hex: "#9adedb",
    rgb: "(154, 222, 219)",
    hsl: "(177°, 51%, 74%)",
    hsv: "(176°, 30%, 87%)",
  },
  {
    title: "Persian Pastel",
    hex: "#aa9499",
    rgb: "(170, 148, 153)",
    hsl: "(346°, 11%, 62%)",
    hsv: "(346°, 13%, 66%)",
  },
  {
    title: "Magic Mint",
    hex: "#aaf0d1",
    rgb: "(170, 240, 209)",
    hsl: "(153°, 70%, 80%)",
    hsv: "(153°, 29%, 94%)",
  },
  {
    title: "Light Green",
    hex: "#b2fba5",
    rgb: "(178, 251, 165)",
    hsl: "(111°, 89%, 81%)",
    hsv: "(111°, 34%, 98%)",
  },
  {
    title: "Pastel Purple",
    hex: "#b39eb5",
    rgb: "(179, 158, 181)",
    hsl: "(295°, 13%, 66%)",
    hsv: "(295°, 13%, 71%)",
  },
  {
    title: "Pastel Lilac",
    hex: "#bdb0d0",
    rgb: "(189, 176, 208)",
    hsl: "(263°, 25%, 76%)",
    hsv: "(264°, 15%, 82%)",
  },
  {
    title: "Pastel Pea",
    hex: "#bee7a5",
    rgb: "(190, 231, 165)",
    hsl: "(97°, 59%, 78%)",
    hsv: "(97°, 29%, 91%)",
  },
  {
    title: "Light Lime",
    hex: "#befd73",
    rgb: "(191, 253, 115)",
    hsl: "(87°, 96%, 72%)",
    hsv: "(87°, 55%, 99%)",
  },
  {
    title: "Light Periwinkle",
    hex: "#c1c6fc",
    rgb: "(193, 198, 252)",
    hsl: "(235°, 91%, 87%)",
    hsv: "(235°, 23%, 99%)",
  },
  {
    title: "Pale Mauve",
    hex: "#c6a4a4",
    rgb: "(198, 164, 164)",
    hsl: "(0°, 23%, 71%)",
    hsv: "(0°, 17%, 78%)",
  },
  {
    title: "Pastel Violet",
    hex: "#cb99c9",
    rgb: "(203, 153, 201)",
    hsl: "(302°, 33%, 70%)",
    hsv: "(302°, 25%, 80%)",
  },
  {
    title: "Pastel Yellow",
    hex: "#fdfd96",
    rgb: "(253, 253, 150)",
    hsl: "(60°, 94%, 79%)",
    hsv: "(60°, 41%, 99%)",
  },
  {
    title: "Pastel Red",
    hex: "#ff6961",
    rgb: "(255, 105, 97)",
    hsl: "(3°, 100%, 69%)",
    hsv: "(3°, 62%, 100%)",
  },
  {
    title: "Pastel Orange",
    hex: "#ff694f",
    rgb: "(255, 105, 79)",
    hsl: "(9°, 100%, 65%)",
    hsv: "(9°, 69%, 100%)",
  },
  {
    title: "American Pink",
    hex: "#ff9899",
    rgb: "(255, 152, 154)",
    hsl: "(359°, 100%, 80%)",
    hsv: "(359°, 40%, 100%)",
  },
  {
    title: "Baby Pink",
    hex: "#ffb7ce",
    rgb: "(255, 183, 206)",
    hsl: "(341°, 100%, 86%)",
    hsv: "(341°, 28%, 100%)",
  },
  {
    title: "Baby Purple",
    hex: "#ca9bf7",
    rgb: "(203, 155, 247)",
    hsl: "(271°, 85%, 79%)",
    hsv: "(271°, 37%, 97%)",
  },
];

//Function that will randomly select a card from the colours array
const changeCard = () => {
  // declaring a variable that creates a random number based on the number of items in the array
  let randomCard = Math.floor(Math.random() * colours.length - 0);
  //   bodyBg.style.backgroundColour = [];
  innerCardTop.style.backgroundColor = colours[randomCard].hex;
  textTitle.innerHTML = colours[randomCard].title;
  textHex.innerHTML = colours[randomCard].hex;
  textRgb.innerHTML = colours[randomCard].rgb;
  textHsl.innerHTML = colours[randomCard].hsl;
  textHsv.innerHTML = colours[randomCard].hsv;
};

btnColour.addEventListener("click", changeCard);
window.onload = changeCard();

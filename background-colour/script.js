"use strict";

const btnColour = document.querySelector(".btnColour");
const bodyBg = document.querySelector("body");

const colours = ["yellow", "red", "green", "#3b5998"];

const changeColour = () => {
  //   bodyBg.style.backgroundColour = [];
  let randomColour = Math.floor(Math.random() * colours.length);
  bodyBg.style.backgroundColour = colours[randomColour];
};

btnColour.addEventListener("click", changeColour);

// script.js
function loadAlert() {
  alert("Test!");
}

// header
let header = document.querySelector("header");
let logo = document.querySelector("header .logo");
let ul = document.querySelector("header .gnb ul");
let a = document.querySelectorAll("header .gnb .one_dep > a");

header.onmouseenter = function () {
  this.style.backgroundColor = "#fff";
  ul.classList.add("on");
  logo.querySelector("img:nth-child(1)").style.display = "none";
  logo.querySelector("img:nth-child(2)").style.display = "block";
};
header.onmouseleave = function () {
  this.style.backgroundColor = "transparent";
  ul.classList.remove("on");
  logo.querySelector("img:nth-child(1)").style.display = "block";
  logo.querySelector("img:nth-child(2)").style.display = "none";
};

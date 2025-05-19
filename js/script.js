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
  document.querySelector(".con").style.filter = "blur(10px)";
};
header.onmouseleave = function () {
  this.style.backgroundColor = "transparent";
  ul.classList.remove("on");
  logo.querySelector("img:nth-child(1)").style.display = "block";
  logo.querySelector("img:nth-child(2)").style.display = "none";
  document.querySelector(".con").style.filter = "none";
};

// con1
const con1 = document.querySelector(".con");
const height = con1.offsetHeight;
console.log(height);

window.addEventListener("scroll", function () {
  // const sideBtna = this.document.querySelector(".sideBtn a");
  // const sideBtn = this.document.querySelector(".sideBtn");
  // const triggerHeight = 2000;
  // if (this.window.scrollY > 200) {
  //   sideBtna.style.opacity = "1";
  // } else {
  //   sideBtna.style.opacity = "0";
  // }
  // if (this.window.pageYOffset > triggerHeight) {
  //   sideBtn.classList.add("on");
  // } else {
  //   sideBtn.classList.remove("on");
  // }
});

//con3
let con3ul = document.querySelector(".con3 .wrap ul");
let divs = document.querySelectorAll(".con3 .wrap .photo > div");

con3ul.querySelectorAll("li").forEach(function (li, index) {
  li.addEventListener("mouseenter", function () {
    divs.forEach(function (div, i) {
      div.style.display = "none";
    });

    divs[index].style.display = "block";
  });
});

// con6
new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 100,
  grabCursor: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

// sideBtn
// window.addEventListener("scroll", function () {
//   const sideBtna = this.document.querySelectorAll(".sideBtn a");
//   const sideBtn = this.document.querySelector(".sideBtn");
//   const triggerHeight = 5740;

//   if (this.window.scrollY > 200) {
//     sideBtna.style.opacity = "1";
//   } else {
//     sideBtna.style.opacity = "0";
//   }
//   if (this.window.pageYOffset > triggerHeight) {
//     sideBtn.classList.add("on");
//   } else {
//     sideBtn.classList.remove("on");
//   }
// });


// Navigation bar Javascript
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// Accordion Javascript
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
let myName = "Greek";
let firstlink = document
.getElementsByTagName("a")[0];
firstlink.innerHTML = myName;
 
let subject1 = "FYS";
let secondlink = document
.getElementsByTagName("a")[5];
secondlink.innerHTML = subject1;
 
let title = document
.getElementsByTagName("title")[0];
title.innerHTML = myName + "s Logbog";
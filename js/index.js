/* eslint-disable no-unused-vars */
// Your code goes here
// 1  On mouseover
const myHover = document.querySelector(".logo-heading");
myHover.addEventListener("mouseover", () => {
    myHover.style.color = "pink";
    });

// 2 On mouseout
myHover.addEventListener("mouseout", () => {
    myHover.style.color = "black";
    });

// 3 On Click
const myNav = document.querySelector(".logo-heading");
myNav.addEventListener("click", () => {
    alert("Thanks for clicking");
});

// 4 On load

// eslint-disable-next-line no-unused-vars
const body = document.querySelector("body");

window.addEventListener("load", () => {
   alert("Hey there!  My Name is Tommy");
 });

// 5 On wheel
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('img');
  el.onwheel = zoom;

// 6 dblclick
const footerClick = document.querySelector('.footer');


footerClick.addEventListener('dblclick', function () {
  alert("want to change font size")
});

// 7 on Focus / 8 on Blur
const form = document.getElementById('form');

form.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
}, true);

form.addEventListener('blur', (event) => {
  event.target.style.background = '';    
}, true);

// 9 Adding .stopPropagation, and .preventDefault to all of my .nav links
const navLinks = document.querySelectorAll(".main-navigation .nav-container .nav .nav-link");

navLinks.forEach(link => link.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    navLinks.forEach(link => link.style.textDecoration = "none")
    event.target.style.textDecoration = "underline";
    
}));

// 11 online / 12 offline
// addEventListener version
window.addEventListener('online', (_event) => {
    alert("You are now connected to the network.");
});
// addEventListener version
window.addEventListener('offline', (_event) => {
    alert("The network connection has been lost.");
});

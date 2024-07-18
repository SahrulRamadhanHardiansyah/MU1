// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// if list clicked
document.querySelector("#list").onclick = () => {
  navbarNav.classList.toggle("active");
};                                                   

// outline click
const list = document.querySelector("#list");
document.addEventListener("click", function (e) {
  if (!list.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
}); 






// percobaan
const transitionElement = document.getElementById('transition-element');

// This function will show the transition element
function showTransition() {
  transitionElement.classList.add('show');
}

// This function will hide the transition element
function hideTransition() {
  transitionElement.classList.remove('show');
}
 
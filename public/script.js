const sideNav = document.querySelector(".side-nav");
const triggerButton = document.querySelector(".side-nav__trigger-btn");
let isSideNavActive = false;
triggerButton.addEventListener('click', () => {
  if(!isSideNavActive) {
    sideNav.classList.remove("side-nav--disabled")
    sideNav.classList.add("side-nav--active");
    isSideNavActive = true;
  } else {
    sideNav.classList.remove("side-nav--active");
    sideNav.classList.add("side-nav--disabled")
    isSideNavActive = false;
  }
})


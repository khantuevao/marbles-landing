console.log("hello");

const layerOne = document.querySelector("#layer.one");
const layerTwo = document.querySelector("#layer.two");
const dropdown = document.getElementById("dropdown");
const links = document.getElementsByClassName("link");


const menuOpen = document.getElementById("menu-open");
menuOpen.addEventListener("click", () => {
  layerOne.classList.add("visible");
  layerTwo.classList.add("visible");
  dropdown.classList.add("visible");
  menuClose.classList.add("visible");
  for (let i = 0; i < links.length; i++) {
    links[i].classList.add("visible");
  }
});

const menuClose = document.getElementById("menu-close");
menuClose.addEventListener("click", () => {
  layerOne.classList.remove("visible");
  layerTwo.classList.remove("visible");

  dropdown.classList.remove("visible");
  menuOpen.classList.remove("hidden");
  menuClose.classList.remove("visible");
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove("visible");
  }
});

document.onclick = function(e){
  if (e.target.id !== 'layer' && e.target.id !== 'menu-close' && e.target.id !== 'menu-open' && e.target.id !== 'dropdown') {
    layerOne.classList.remove("visible");
  layerTwo.classList.remove("visible");

  dropdown.classList.remove("visible");
  menuOpen.classList.remove("hidden");
  menuClose.classList.remove("visible");
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove("visible");
  }
  }
}

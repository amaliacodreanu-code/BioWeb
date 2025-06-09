const btnClosePage = document.querySelector(".close-page");
const page = document.querySelector(".page");
//Dacă vrei toate butoanele .btn din .buttons, folosește querySelectorAll(), care returnează o listă de noduri (NodeList):
const btnOpenPage = document.querySelectorAll(".buttons .btn"); //btn pres and show this page
const overlay = document.querySelector(".overlay");

const openPage = function () {
  page.classList.remove("hidden"); //practic sterge acea clasa din CSS care ascunde pagina
  overlay.classList.remove("hidden");
};

const closePage = function () {
  page.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenPage.length; i++) {
  btnOpenPage[i].addEventListener("click", openPage);
}

if (document.getElementsByClassName("second").clicked === true) {
  document.querySelector(".continut").innerHTML = `text for btn 2`;
}

if (document.getElementsByClassName("third").clicked === true) {
  document.querySelector(".continut").innerHTML = `text for btn 3`;
}

btnClosePage.addEventListener("click", closePage);
overlay.addEventListener("click", closePage);

const container = document.getElementById("container-btn");

new Sortable(container, {
  animation: 150,
  ghostClass: "ghost",
});

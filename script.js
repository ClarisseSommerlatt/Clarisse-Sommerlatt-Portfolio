//console.log("Tout fonctionne")

//const h1 = document.querySelector("h1");
//let color = "red"

//color = "blue"

//h1.style.color = "green"
// document.querySelector("h1").style.color = "red"
//class
// body.classList.add("dark")

//changer couleur tire à l'aide d'un bouton
//button.addEventListener('click', function () {

    //if (h1.style.color === "pink") {
       // h1.style.color = "purple"
    //} else {
        // h1.style.color = "pink"}
//})

// Selecteurs
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const button = document.querySelector("button");

// Listener
button.addEventListener("click", function() {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.add("light");
    body.classList.remove("dark");
  }
});
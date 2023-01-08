// Quand on clique sur un Bouton :
// Des rectangles sont animés
// L'animation fonctionne dans les deux sens

// I Créer les blocs en HTML
// II Créer les styles CSS (couleur sur nos blocs, transition CSS)
// III JS : 
// 1. Selectionner le bouton + cartes/rectangles
// 2. Implémenter l'ecoute d'un évènement clique
// 3. Action qui s'applique / Fonction

const button = document.querySelector("button");
// const container = document.querySelector(".container");
const cards = document.querySelectorAll('.cards');

  console.log(button);
  console.log(document.querySelector('.cards'));
  console.log(document.querySelectorAll('.cards'));

button.addEventListener("click", function () {
   
  
  // if (container.classList.contains("active")) {
  //  container.classList.remove("active"); 
  // } else {
  //   container.classList.add("active");
  // }
 
  
    // cards[0].classList.toggle("active");
    // cards[1].classList.toggle("active");
    // cards[2].classList.toggle("active");
    // cards[3].classList.toggle("active");
    // cards[4].classList.toggle("active");
    // cards[5].classList.toggle("active");
    // cards[6].classList.toggle("active");
    // cards[7].classList.toggle("active");
  
    for (i = 0; i < 5; i++) {
      cards[i].classList.toggle("active");
      cards[i].style.transitionDelay = (0.25 * i) + "s";
    }
});
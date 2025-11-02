// JavaScript Document
console.log("hi");

var deButton = document.querySelector("nav button:nth-of-type(1)");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
deButton.onclick = toggleMenu;

// stap 3: voeg in de functie een claas toe aan de nav
function toggleMenu() {  
  // zoek de nav op
  var deNav = document.querySelector("nav");
  // voeg een class toe aan de nav
  // en verwijder die weer bij nogmaals klikken
  // toggle
  deNav.classList.toggle("toonMenu");
}


// Javascript gekozen element Intersection observer

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const intersecting = entry.isIntersecting
    
    if (intersecting == true) {
      entry.target.classList.add("is-shown");
    }
  })
})

observer.observe(document.querySelector("section:nth-of-type(2) img"));
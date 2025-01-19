let cards = document.getElementsByClassName("panel");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", (event) => {
    event.preventDefault();
    removeActiveClassFromCards();
    event.target.classList.add("active");
    
  });
}

function removeActiveClassFromCards() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove("active")
  }
}

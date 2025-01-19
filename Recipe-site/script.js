var modal = document.getElementById("myModal");
let recipeCards = document.getElementsByClassName("recipeCard");
let modalData = null;
for (let i = 0; i < recipeCards.length; i++) {
  recipeCards[i].addEventListener("click", () => {
    modal.style.display = "block";
  });
}
var closeBtn = document.getElementsByClassName("close")[0];

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function createRecipe(recipeData) {
  const recipeElement = document.createElement("div");
  recipeElement.classList.add("recipeCard");
  recipeElement.setAttribute("id", recipeData.id);
  recipeElement.innerHTML = `
          <div class="imageContainer">
            <img
              src=${recipeData.img}
            />
          </div>
          <div class="content">
            <h2>${recipeData.name}</h2>
            <p class="time">
              Preparation time: <span>${recipeData.prepTime}</span> | Serving:
              <span>${recipeData.serving}</span>
            </p>
            <p class="description">
             ${recipeData.description}
            </p>
            <div class="tags">
              <span>Eggs</span>
              <span>Eggs</span>
              <span>Eggs</span>
              <span>Eggs</span>
              <span>Eggs</span>
            </div>
          </div>
          <div class="bookmark">
            <button class="bookmark-btn">
              <i class="fa-regular fa-bookmark"></i>
            </button>
          </div>
    `;
  return recipeElement;
}

function createModalContent() {
  const modalContentContainer =
    document.getElementsByClassName("modal-content")[0];
  modalContentContainer.innerHTML = `
    <h2>${modalData.name}</h2>
    <p>${modalData.description}</p>
  `;
}
function saveRecipe(event) {}

function addBookMarkEventListener() {
  const bookmarks = document.getElementsByClassName("bookmark-btn");
  bookmarks.forEach((bookmark) =>
    bookmark.addEventListener("click", function (event) {})
  );
}

// function addClickEventListener(recipesData) {
//   let recipeCards = document.getElementsByClassName("recipeCard");
//   for (let i = 0; i < recipeCards.length; i++) {
//     let recipeCard = recipeCards[i];
//     recipeCard.addEventListener("click", function (event) {
//       let parent = event.target.parentNode;
//       while (!parent.classList.contains("recipeCard")) {
//         parent = parent.parentNode;
//       }
//       modalData = recipesData.recipes.filter(
//         (r) => r.id == parent.getAttribute("id")
//       )[0];
//       createModalContent();
//       modal.style.display = "block";
//     });
//   }
// }

(function displayRecipes() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const listContainer = document.getElementsByClassName("recipeList")[0];
      data.recipes.forEach((element) => {
        const recipeElement = createRecipe(element);
        recipeElement.addEventListener("click", function(event){
          modalData = element;
          createModalContent();
          modal.style.display = "block";
        })

        const bookmark = recipeElement.querySelector('.bookmark-btn');
        bookmark.addEventListener("click", function(event){
          event.stopPropagation();
          const localstorageB = localStorage.getItem("savedRecipes");
          if(localstorageB){
            console.log(JSON.parse(localstorageB));
          }else {
            let saveRecipes = [element]
            localStorage.setItem("savedRecipes", JSON.stringify(saveRecipes));
          } 
        })
        listContainer.appendChild(recipeElement);
        // addClickEventListener(data);
        // addBookMarkEventListener();
      });
    });
})();

let shareBtn = document.querySelector(".share-button");
let shareContainer = document.querySelector(".share-content");
let arrowActive = document.querySelector(".svg-path");
let arrow = document.querySelector(".arrow");

shareBtn.addEventListener("click", () => {
  sharePopup();
});

const sharePopup = () => {
  shareContainer.classList.toggle("hide");
  arrowActive.classList.toggle("btn-active");
  shareBtn.classList.toggle("button-color");

if (shareContainer.classList.contains("hide")) {
    arrow.style.display = "none"; 
  } else {
    arrow.style.display = "block"; 
  }
};  
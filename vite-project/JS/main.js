import "../CSS/style.css";
import { lecards } from "./product";
import { DOMselectors } from "./dom";
const lebrons = lecards.filter((lecard) => lecard.name === "LeBron James");
DOMselectors.lebronButton.addEventListener("click", function (event) {
  event.preventDefault();
  const lebrons = lecards.filter((lecard) => lecard.name === "LeBron James");
  lebrons.forEach((lebron) => {
    let player = lebrons;
  });
});

function createCardObject() {
  return {
    name: player.name,
    year: player.year,
    brand: player.brand,
    stats: player.stats,
    bPlace: player.birthplace,
    bYear: player.birthYear,
    school: player.school,
    dYear: player.draftYear,
  };
}

function injectCard(cardObject) {
  let cardContainer;
  const allCards = document.querySelectorAll(".card-container .card");
  const totalCards = allCards.length;
  if (totalCards < 4) {
    cardContainer = document.getElementById("cardContainer1");
  } else if (totalCards < 8) {
    cardContainer = document.getElementById("cardContainer2");
  } else if (totalCards < 12) {
    cardContainer = document.getElementById("cardContainer3");
  } else if (totalCards < 16) {
    cardContainer = document.getElementById("cardContainer4");
  }

  if (cardContainer) {
    cardContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="card" style="background-color:${cardObject.color};">
         <h2 class="card-header">${cardObject.text}</h2>
        ${
          cardObject.pic
            ? `<img src="${cardObject.pic}" alt="${cardObject.text}"/>`
            : ""
        }
      </div>`
    );
  }

  console.log("Number of cards:", totalCards + 1);
}

function clearInputFields() {
  DOMSelectors.nameInput.value = "";
  DOMSelectors.colorInput.value = "";
  DOMSelectors.picInput.value = "";
}

DOMSelectors.submit.addEventListener("click", function (event) {
  event.preventDefault();
  const cardObject = createCardObject();
  injectCard(cardObject);
  clearInputFields();
});

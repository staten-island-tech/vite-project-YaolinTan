import "../CSS/style.css";
import { lecards } from "./product";
import { DOMselectors } from "./dom";

// Generalized function for button click handling
function handleButtonClick(filterCondition) {
  return function (event) {
    event.preventDefault();
    removeCards();
    const filteredCards = lecards.filter(filterCondition);
    filteredCards.forEach((filteredCard) => {
      const cardObject = createCardObject(filteredCard);
      injectCard(cardObject);
    });
  };
}

// Event listeners for each button
DOMselectors.lefamButton.addEventListener(
  "click",
  handleButtonClick(() => true)
);
DOMselectors.lebronButton.addEventListener(
  "click",
  handleButtonClick((lecard) => lecard.name === "LeBron James")
);
DOMselectors.bronnyButton.addEventListener(
  "click",
  handleButtonClick((lecard) => lecard.name === "Bronny James")
);
DOMselectors.bryceButton.addEventListener(
  "click",
  handleButtonClick((lecard) => lecard.name === "Bryce James")
);
DOMselectors.collegeButton.addEventListener(
  "click",
  handleButtonClick(
    (lecard) => lecard.college !== "None (NBA)" && lecard.college !== "TBD"
  )
);
DOMselectors.highSchoolButton.addEventListener(
  "click",
  handleButtonClick((lecard) => lecard.high_school !== "undefined")
);
DOMselectors.nbaButton.addEventListener(
  "click",
  handleButtonClick((lecard) => lecard.draft_year !== "TBD")
);

// Function to create card objects
function createCardObject(player) {
  return {
    name: player.name,
    year: player.year,
    brand: player.card_brand,
    stats: player.stats,
    bPlace: player.birthplace,
    bYear: player.birthYear,
    highSchool: player.high_school,
    college: player.college,
    dYear: player.draft_Year,
    team: player.team,
    image: player.image_url,
    backColor: player.teamColors[0],
    borderColor: player.teamColors[1],
  };
}

// Function to inject card into the DOM
function injectCard(cardObject) {
  const allCards = document.querySelectorAll(".card-container .card");
  const totalCards = allCards.length;
  let cardContainer;

  if (totalCards < 5) {
    cardContainer = document.getElementById("cardContainer1");
  } else if (totalCards < 10) {
    cardContainer = document.getElementById("cardContainer2");
  } else if (totalCards < 15) {
    cardContainer = document.getElementById("cardContainer3");
  }

  if (cardContainer) {
    cardContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="card" style="border: 4px solid ${
        cardObject.borderColor
      }; background-color: ${cardObject.backColor};">
        <h2 class="card-header">${cardObject.name}</h2>
        <div class="stats" id="cardYear">
          <h3>Year:</h3>
          <p class="stat">${cardObject.year}</p>
        </div>
        <div class="stats" id="cardBrand">
          <h3>Brand:</h3>
          <p class="stat">${cardObject.brand}</p>
        </div>
        <div class="stats" id="cardStats">
          <h3>Stats:</h3>
          <p class="stat">${cardObject.stats}</p>
        </div>
        <div class="stats" id="cardBPlace">
          <h3>Birthplace:</h3>
          <p class="stat">${cardObject.bPlace}</p>
        </div>
        <div class="stats" id="cardBYear">
          <h3>Birth Year:</h3>
          <p class="stat">${cardObject.bYear}</p>
        </div>
        <div class="stats" id="cardHighSchool">
          <h3>High School:</h3>
          <p class="stat">${cardObject.highSchool}</p>
        </div>
        <div class="stats" id="cardCollege">
          <h3>College:</h3>
          <p class="stat">${cardObject.college}</p>
        </div>
        <div class="stats" id="cardDYear">
          <h3>Draft Year:</h3>
          <p class="stat">${cardObject.dYear}</p>
        </div>
        <div class="stats" id="cardTeam">
          <h3>Team:</h3>
          <p class="stat">${cardObject.team}</p>
        </div>
        ${
          cardObject.image
            ? `<img src="${cardObject.image}" alt="${cardObject.name}" class="img">`
            : ""
        }
      </div>`
    );
  }

  console.log("Number of cards:", totalCards + 1);
}

// Function to remove existing cards
function removeCards() {
  const cardContainers = document.querySelectorAll(".card-container");
  cardContainers.forEach((container) => (container.innerHTML = ""));
  console.log("Cards removed");
}

import "../CSS/style.css";
import { lecards } from "./product";
import { DOMselectors } from "./DOM.JS";

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
DOMselectors.points.addEventListener("click", function (event) {
  removeCards();
  event.preventDefault();
  const getPPG = (stats) => {
    const ppgString = stats.match(/PPG: (\d+(\.\d+)?)/);
    return ppgString ? parseFloat(ppgString[1]) : 0;
  };
  lecards.sort((a, b) => getPPG(b.stats) - getPPG(a.stats));
  lecards.forEach((card) => {
    const cardObject = createCardObject(card);
    injectCard(cardObject);
  });
});
DOMselectors.rebounds.addEventListener("click", function (event) {
  removeCards();
  event.preventDefault();
  const getRPG = (stats) => {
    const rpgString = stats.match(/RPG: (\d+(\.\d+)?)/);
    return rpgString ? parseFloat(rpgString[1]) : 0;
  };
  lecards.sort((a, b) => getRPG(b.stats) - getRPG(a.stats));
  lecards.forEach((card) => {
    const cardObject = createCardObject(card);
    injectCard(cardObject);
  });
});
DOMselectors.assists.addEventListener("click", function (event) {
  removeCards();
  event.preventDefault();
  const getAPG = (stats) => {
    const apgString = stats.match(/APG: (\d+(\.\d+)?)/);
    return apgString ? parseFloat(apgString[1]) : 0;
  };
  lecards.sort((a, b) => getAPG(b.stats) - getAPG(a.stats));
  lecards.forEach((card) => {
    const cardObject = createCardObject(card);
    injectCard(cardObject);
  });
});

const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

toggleButton.addEventListener("click", function (event) {
  event.preventDefault();
  body.classList.toggle("dark-mode");
});

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
    reference: player.reference_link,
  };
}

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
      `<form action="${cardObject.reference}">
      <button class="card" style="border: 4px solid ${
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
      </button>
      </form>`
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

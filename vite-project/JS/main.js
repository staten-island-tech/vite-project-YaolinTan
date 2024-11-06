import "../CSS/style.css";
import { lecards } from "./product";
import { DOMselectors } from "./dom";
DOMselectors.lebronButton.addEventListener("click", function (event) {
  event.preventDefault();
  const lebrons = lecards.filter((lecard) => lecard.name === "LeBron James");
  lebrons.forEach((lebron) => {
    event.preventDefault();
    let player = lebron;
    const cardObject = createCardObject(player);
    injectCard(cardObject);
  });
});

function createCardObject(player) {
  return {
    name: player.name,
    year: player.year,
    brand: player.card_brand,
    stats: player.stats,
    bPlace: player.birthplace,
    bYear: player.birthYear,
    highSchool: player.highSchool_school,
    college: player.college,
    dYear: player.draft_Year,
    team: player.team,
    image: player.image_url,
    backColor: player.teamColors[0],
    borderColor: player.teamColors[1],
  };
}

function injectCard(cardObject) {
  let cardContainer;
  const allCards = document.querySelectorAll(".card-container .card");
  const totalCards = allCards.length;
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
        h2 class="card-header">${cardObject.name}</h2>
        <p class="card-year">Year: ${cardObject.year}</p>
        <p class="card-brand">Brand: ${cardObject.brand}</p>
        <p class="card-stats">Stats: ${cardObject.stats}</p>
        <p class="card-bPlace">Birthplace: ${cardObject.bPlace}</p>
        <p class="card-bYear">Birth Year: ${cardObject.bYear}</p>
        <p class="card-highSchool">High School: ${cardObject.highSchool}</p>
        <p class="card-college">College: ${cardObject.college}</p>
        <p class="card-dYear">Draft Year: ${cardObject.dYear}</p>
        <p class="card-team">Team: ${cardObject.team}</p>
        ${
          cardObject.image
            ? `<img src="${cardObject.image}" alt="${cardObject.text}"/>`
            : ""
        }
      </div>`
    );
  }

  console.log("Number of cards:", totalCards + 1);
}

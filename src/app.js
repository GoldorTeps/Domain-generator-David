/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateAllCombinations() {
  let pronouns = ["I", "You", "He", "She", "We", "You", "They", "They"];
  let adjectives = [
    "good",
    "bad",
    "ugly",
    "beautiful",
    "crazy",
    "smart",
    "dumb",
    "smart",
    "dumb"
  ];
  let nouns = [
    "dogcom",
    "catnet",
    "horse",
    "birdedu",
    "mouse",
    "fish",
    "rabbitcom",
    "turtlebiz",
    "hippoinfo"
  ];
  let extensions = [
    ".com",
    ".net",
    ".org",
    ".gov",
    ".edu",
    ".mil",
    ".biz",
    ".info",
    ".pro"
  ];

  function allCombinations() {
    let combinations = [];

    for (let pronoun of pronouns) {
      for (let adjective of adjectives) {
        for (let noun of nouns) {
          for (let extension of extensions) {
            let domain = pronoun + adjective + noun + extension;
            combinations.push(domain);
          }
        }
      }
    }

    return combinations;
  }

  let allDomains = allCombinations();
  document.getElementById("domainApp").innerHTML = allDomains;
}

generateAllCombinations();

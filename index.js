let donutCount = 0;
let autoClickCount = 0;
let autoClickPrice = 10;
let donutClicks = 1;

function addDonut() {
  if (autoClickCount == 0) {
    donutCount += 1;
  } else {
    donutCount += autoClickCount;
  }
}

function addAutoDonut() {
  if (donutCount >= autoClickCount) {
    autoClickCount += 1;
    donutCount -= autoClickCount;
  } else {
    console.log("You need at least 100 donuts to purchase an auto click");
  }
}

function resetGame() {
  donutCount = 0;
  autoClickCount = 0;
  autoClickPrice = 100;
  donutClicks = 1;
}

const countDonutsElement = document.querySelector(".donut-maker");
const addDonutsButton = document.querySelector(".donut-button");
const autoClickElement = document.querySelector(".auto-clicker");
const autoClickButton = document.querySelector("purchase-button");
const autoClickerCost = document.querySelector("price");
const resetButton = document.querySelector("reset-button");

function updateGame(){
  countDonutsElement.innerText = donutCount;
  autoClickElement.innerText = autoClickCount;
  autoClickerCost.innerText = autoClickPrice + "Donuts";

  if (donutCount >= autoClickPrice) {
    autoClickButton.style.backgroundcolor = "white";
  } else {
    autoClickButton.style.backgroundcolor = "grey";
  }
}

const clickDonutButton = function(button){
  button.addEventListener("click", () => {
    addDonut();
    updateGame();
  });
};

const clickAutoClickButton = function(button) {
  button.addEventListener("click", () => {
    addAutoClicker();
    updateGame();
  });
};

const clickResetButton = function(button) {
  button.addEventListener("click", () => {
    resetGame();
    updateGame();
  });
};

function countUp() {
  donutCount += autoClickCount;
  updateGame();
}
setInterval(countUp, 1000);

clickDonutButton(donutButton);
clickAutoClickButton(autoClickButton);
clickResetButton(resetButton);

document.addEventListener("DOMContentLoaded", function () {
  const developerLink = document.getElementById("developer-dropdown");
  const developerModal = document.getElementById("developer-modal");
  const companyInfoLink = document.getElementById("company-info-link");
  const companyInfoModal = document.getElementById("company-info-modal");

  developerLink.addEventListener("click", function () {
    developerModal.style.display = "block";
  });

  companyInfoLink.addEventListener("click", function () {
    companyInfoModal.style.display = "block";
  });

  window.addEventListener("click", function (event) {
    if (event.target === developerModal) {
      developerModal.style.display = "none";
    }
    if (event.target === companyInfoModal) {
      companyInfoModal.style.display = "none";
    }
  });
});

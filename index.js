/*const container = (document.querySelector(".container").innerText =
  "mmmmmmmmm doughnuts.... ahhhhhhh!");*/

let donutCount = 0;
let autoClickCount = 0;
let autoClickPrice = 10;

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

function totalClick(click) {
  const totalDonuts = document.getElementById("total-donuts");
  const sumValue = parseInt(totalDonuts.innerText) + click;
  console.log(sumValue + click);
  totalDonuts.innerText = sumValue;
}

function autoClick() {
  for (let i = 0; i < 1000; i++) {
    document.querySelector("#auto-donuts").click();

    let counter = 0;

    function countUp() {
      counter++;

      const autoClick = document.getElementById("total-donuts");

      console.log(autoClick, typeof autoClick, "autoClick");

      autoClick.innerText = counter;
    }

    setInterval(countUp, 1000);
  }
}

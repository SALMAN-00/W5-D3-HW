const blackButton = document.getElementById("black-button");
const goldButton = document.getElementById("gold-button");
const pinkButton = document.getElementById("pink-button");
const blueButton = document.getElementById("blue-button");
const redButton = document.getElementById("red-button");

const blackWatch = document.getElementById("black");
const goldWatch = document.getElementById("gold");
const pinkWatch = document.getElementById("pink");
const blueWatch = document.getElementById("blue");
const redWatch = document.getElementById("red");

function showWatch(watchToShow) {
  const watches = [blackWatch, goldWatch, pinkWatch, blueWatch, redWatch];
  watches.forEach(watch => {
    watch.style.display = "none";
  });

  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getSeconds().toString().padStart(2, "0");

  const timeDisplay = watchToShow.querySelector(".time-display");
  if (timeDisplay) {
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
  }
  watchToShow.style.display = "block";
}

blackButton.addEventListener("click", function () {
  showWatch(blackWatch);
});

goldButton.addEventListener("click", function () {
  showWatch(goldWatch);
});

pinkButton.addEventListener("click", function () {
  showWatch(pinkWatch);
});

blueButton.addEventListener("click", function () {
  showWatch(blueWatch);
});

redButton.addEventListener("click", function () {
  showWatch(redWatch);
});

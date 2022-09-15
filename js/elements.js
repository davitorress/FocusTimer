const minutesDisplay = document.querySelector("span.minutes");
const secondsDisplay = document.querySelector("span.seconds");

const buttonSun = document.querySelector("button.sun");
const buttonMoon = document.querySelector("button.moon");

const buttonPlay = document.querySelector("button.play");
const buttonPause = document.querySelector("button.pause");
const buttonStop = document.querySelector("button.stop");
const buttonPlus = document.querySelector("button.plus");
const buttonMinus = document.querySelector("button.minus");

const cardForest = document.querySelector("#card-forest");
const cardRain = document.querySelector("#card-rain");
const cardStore = document.querySelector("#card-store");
const cardFireplace = document.querySelector("#card-fireplace");

const volumeForest = document.querySelector("#card-forest .volume");
const volumeRain = document.querySelector("#card-rain .volume");
const volumeStore = document.querySelector("#card-store .volume");
const volumeFireplace = document.querySelector("#card-fireplace .volume");

const body = document.querySelector("body");
const timeDisplay = document.querySelector("h1");
const buttonControls = document.querySelectorAll(".controls button ion-icon");
const cards = document.querySelectorAll(".card");

// body.style.backgroundColor = "var(--bg-dark)";
// timeDisplay.style.color = "var(--fc-text-dark)";
// for (let buttonControl of buttonControls) {
// 	buttonControl.style.color = "var(--ic-primary-dark)";
// }
// for (let card of cards) {
// 	card.style.backgroundColor = "var(--bg-card-off-dark)";
// }

export {
	minutesDisplay,
	secondsDisplay,
	buttonSun,
	buttonMoon,
	buttonPlay,
	buttonPause,
	buttonStop,
	buttonPlus,
	buttonMinus,
	cardForest,
	cardRain,
	cardStore,
	cardFireplace,
	volumeForest,
	volumeRain,
	volumeStore,
	volumeFireplace,
};

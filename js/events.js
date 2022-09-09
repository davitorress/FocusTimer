import {
	buttonPlay,
	buttonPause,
	buttonStop,
	buttonPlus,
	buttonMinus,
	cardForest,
	cardRain,
	cardStore,
	cardFireplace,
} from "./elements.js";

export default function Events({ controls, timer, sounds }) {
	buttonPlay.addEventListener("click", () => {
		controls.togglePlayPause();
		timer.countdown();
	});

	buttonPause.addEventListener("click", () => {
		controls.togglePlayPause();
		timer.pause();
	});

	buttonStop.addEventListener("click", () => {
		controls.resetButtons();
		timer.reset();
	});

	buttonPlus.addEventListener("click", timer.plusTime);

	buttonMinus.addEventListener("click", timer.minusTime);

	cardForest.addEventListener("click", () => {
		controls.cardForestToggle();
		cardForest.classList.contains("card-on") ? sounds.playForest() : sounds.reset();
	});

	cardRain.addEventListener("click", () => {
		controls.cardRainToggle();
		cardRain.classList.contains("card-on") ? sounds.playRain() : sounds.reset();
	});

	cardStore.addEventListener("click", () => {
		controls.cardStoreToggle();
		cardStore.classList.contains("card-on") ? sounds.playStore() : sounds.reset();
	});

	cardFireplace.addEventListener("click", () => {
		controls.cardFireplaceToggle();
		cardFireplace.classList.contains("card-on") ? sounds.playFireplace() : sounds.reset();
	});
}

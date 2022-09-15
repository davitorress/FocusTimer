import {
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
} from "./elements.js";

export default function Events({ controls, timer, sounds }) {
	buttonSun.addEventListener("click", () => {
		controls.toggleTheme();
	});

	buttonMoon.addEventListener("click", () => {
		controls.toggleTheme();
	});

	buttonPlay.addEventListener("click", () => {
		controls.togglePlayPause();
		timer.countdown();
		sounds.pressButton();
	});

	buttonPause.addEventListener("click", () => {
		controls.togglePlayPause();
		timer.pause();
		sounds.pressButton();
	});

	buttonStop.addEventListener("click", () => {
		controls.resetButtons();
		timer.reset();
		sounds.pressButton();
	});

	buttonPlus.addEventListener("click", () => {
		timer.addMinutes();
		sounds.pressButton();
	});

	buttonMinus.addEventListener("click", () => {
		timer.removeMinutes();
		sounds.pressButton();
	});

	cardForest.addEventListener("click", () => {
		controls.cardForestActive();
		sounds.reset();
		sounds.soundForest.play();
	});

	volumeForest.addEventListener("input", () => {
		let audio = sounds.soundForest;
		let volume = volumeForest.value;
		sounds.setVolume(audio, volume);
	});

	cardRain.addEventListener("click", () => {
		controls.cardRainActive();
		sounds.reset();
		sounds.soundRain.play();
	});

	volumeRain.addEventListener("input", () => {
		let audio = sounds.soundRain;
		let volume = volumeRain.value;
		sounds.setVolume(audio, volume);
	});

	cardStore.addEventListener("click", () => {
		controls.cardStoreActive();
		sounds.reset();
		sounds.soundStore.play();
	});

	volumeStore.addEventListener("input", () => {
		let audio = sounds.soundStore;
		let volume = volumeStore.value;
		sounds.setVolume(audio, volume);
	});

	cardFireplace.addEventListener("click", () => {
		controls.cardFireplaceActive();
		sounds.reset();
		sounds.soundFireplace.play();
	});

	volumeFireplace.addEventListener("input", () => {
		let audio = sounds.soundFireplace;
		let volume = volumeFireplace.value;
		sounds.setVolume(audio, volume);
	});
}

export default function Controls({
	buttonSun,
	buttonMoon,

	buttonPlay,
	buttonPause,

	cardForest,
	cardRain,
	cardStore,
	cardFireplace,
}) {
	function toggleTheme() {
		buttonSun.classList.toggle("hide");
		buttonMoon.classList.toggle("hide");
		document.body.classList.toggle("dark-theme");
	}

	function togglePlayPause() {
		buttonPlay.classList.toggle("hide");
		buttonPause.classList.toggle("hide");
	}

	function resetButtons() {
		buttonPlay.classList.remove("hide");
		buttonPause.classList.add("hide");
	}

	function resetCards() {
		cardForest.classList.remove("card-on");
		cardRain.classList.remove("card-on");
		cardStore.classList.remove("card-on");
		cardFireplace.classList.remove("card-on");
	}

	function cardForestActive() {
		cardForest.classList.add("card-on");

		cardRain.classList.remove("card-on");
		cardStore.classList.remove("card-on");
		cardFireplace.classList.remove("card-on");
	}

	function cardRainActive() {
		cardRain.classList.add("card-on");

		cardForest.classList.remove("card-on");
		cardStore.classList.remove("card-on");
		cardFireplace.classList.remove("card-on");
	}

	function cardStoreActive() {
		cardStore.classList.add("card-on");

		cardForest.classList.remove("card-on");
		cardRain.classList.remove("card-on");
		cardFireplace.classList.remove("card-on");
	}

	function cardFireplaceActive() {
		cardFireplace.classList.add("card-on");

		cardForest.classList.remove("card-on");
		cardRain.classList.remove("card-on");
		cardStore.classList.remove("card-on");
	}

	return {
		toggleTheme,

		togglePlayPause,
		resetButtons,
		resetCards,

		cardForestActive,
		cardRainActive,
		cardStoreActive,
		cardFireplaceActive,
	};
}

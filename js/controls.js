export default function Controls({
	buttonPlay,
	buttonPause,

	cardForest,
	cardRain,
	cardStore,
	cardFireplace,
}) {
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

	function cardForestToggle() {
		cardForest.classList.toggle("card-on");

		cardRain.classList.remove("card-on");
		cardStore.classList.remove("card-on");
		cardFireplace.classList.remove("card-on");
	}

	function cardRainToggle() {
		cardRain.classList.toggle("card-on");

		cardForest.classList.remove("card-on");
		cardStore.classList.remove("card-on");
		cardFireplace.classList.remove("card-on");
	}

	function cardStoreToggle() {
		cardStore.classList.toggle("card-on");

		cardForest.classList.remove("card-on");
		cardRain.classList.remove("card-on");
		cardFireplace.classList.remove("card-on");
	}

	function cardFireplaceToggle() {
		cardFireplace.classList.toggle("card-on");

		cardForest.classList.remove("card-on");
		cardRain.classList.remove("card-on");
		cardStore.classList.remove("card-on");
	}

	return {
		togglePlayPause,
		resetButtons,
		resetCards,

		cardForestToggle,
		cardRainToggle,
		cardStoreToggle,
		cardFireplaceToggle,
	};
}

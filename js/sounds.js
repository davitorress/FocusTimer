export default function Sounds() {
	const soundForest = new Audio("/assets/sound/Floresta.wav");
	const soundRain = new Audio("/assets/sound/Chuva.wav");
	const soundStore = new Audio("/assets/sound/Cafeteria.wav");
	const soundFireplace = new Audio("/assets/sound/Lareira.wav");

	soundForest.loop = true;
	soundRain.loop = true;
	soundStore.loop = true;
	soundFireplace.loop = true;

	function playForest() {
		soundForest.play();

		soundRain.pause();
		soundStore.pause();
		soundFireplace.pause();
	}

	function playRain() {
		soundRain.play();

		soundForest.pause();
		soundStore.pause();
		soundFireplace.pause();
	}

	function playStore() {
		soundStore.play();

		soundForest.pause();
		soundRain.pause();
		soundFireplace.pause();
	}

	function playFireplace() {
		soundFireplace.play();

		soundForest.pause();
		soundRain.pause();
		soundStore.pause();
	}

	function reset() {
		soundForest.pause();
		soundRain.pause();
		soundStore.pause();
		soundFireplace.pause();
	}

	return {
		playForest,
		playRain,
		playStore,
		playFireplace,
		reset,
	};
}

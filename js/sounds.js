export default function Sounds() {
	const soundForest = new Audio("assets/sound/Floresta.wav");
	const soundRain = new Audio("assets/sound/Chuva.wav");
	const soundStore = new Audio("assets/sound/Cafeteria.wav");
	const soundFireplace = new Audio("assets/sound/Lareira.wav");

	const buttonPressAudio = new Audio(
		"https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
	);
	const kitchenTimer = new Audio(
		"https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
	);

	soundForest.loop = true;
	soundRain.loop = true;
	soundStore.loop = true;
	soundFireplace.loop = true;

	soundForest.volume = 0.5;
	soundRain.volume = 0.5;
	soundStore.volume = 0.5;
	soundFireplace.volume = 0.5;

	buttonPressAudio.volume = 0.5;
	kitchenTimer.volume = 0.5;

	function pressButton() {
		buttonPressAudio.play();
	}

	function timeEnd() {
		kitchenTimer.play();
	}

	function reset() {
		soundForest.pause();
		soundRain.pause();
		soundStore.pause();
		soundFireplace.pause();
	}

	function setVolume(audio, volume) {
		audio.volume = volume / 100;
	}

	return {
		soundForest,
		soundRain,
		soundStore,
		soundFireplace,

		pressButton,
		timeEnd,
		reset,
		setVolume,
	};
}

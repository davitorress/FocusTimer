export default function Timer({
	minutesDisplay,
	secondsDisplay,

	resetAudio,
	resetControls,
	resetCards,
}) {
	let timerTimeOut;
	let minutes = getMinutes();

	function getMinutes() {
		return Number(minutesDisplay.textContent);
	}

	function getSeconds() {
		return Number(secondsDisplay.textContent);
	}

	function plusTime() {
		let newMinutes = getMinutes() + 5;

		if (newMinutes >= 60) {
			updateTime(60);
		} else {
			updateTime(newMinutes);
		}
	}

	function minusTime() {
		let newMinutes = getMinutes() - 5;

		if (newMinutes <= 5) {
			updateTime(5);
		} else {
			updateTime(newMinutes);
		}
	}

	function updateTime(newMinutes) {
		minutes = newMinutes;
		updateDisplay(newMinutes);
	}

	function updateDisplay(newMinutes, newSeconds) {
		newMinutes = newMinutes === undefined ? minutes : newMinutes;
		newSeconds = newSeconds === undefined ? 0 : newSeconds;

		minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
		secondsDisplay.textContent = String(newSeconds).padStart(2, "0");
	}

	function pause() {
		resetControls();
		clearTimeout(timerTimeOut);
	}

	function reset() {
		resetControls();
		updateDisplay();
		clearTimeout(timerTimeOut);
	}

	function countdown() {
		timerTimeOut = setTimeout(() => {
			let minutes = getMinutes();
			let seconds = getSeconds();
			const isFinished = minutes <= 0 && seconds <= 0;

			if (isFinished) {
				resetAudio();
				resetCards();
				updateDisplay();

				return;
			}

			if (seconds <= 0) {
				seconds = 60;
				minutes--;
			}

			updateDisplay(minutes, String(seconds - 1));
			countdown();
		}, 1000);
	}

	return {
		getMinutes,
		getSeconds,
		plusTime,
		minusTime,
		updateTime,
		updateDisplay,
		pause,
		reset,
		countdown,
	};
}

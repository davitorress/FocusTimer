export default function Timer({
	minutesDisplay,
	secondsDisplay,

	controls,
	sounds,
}) {
	let timerTimeOut;
	let minutes = getMinutes();

	function getMinutes() {
		return Number(minutesDisplay.textContent);
	}

	function getSeconds() {
		return Number(secondsDisplay.textContent);
	}

	function addMinutes() {
		let newMinutes = getMinutes() + 5;
		newMinutes >= 60 ? updateTime(60) : updateTime(newMinutes);
	}

	function removeMinutes() {
		let newMinutes = getMinutes() - 5;
		newMinutes <= 5 ? updateTime(5) : updateTime(newMinutes);
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
		controls.resetButtons();
		clearTimeout(timerTimeOut);
	}

	function reset() {
		controls.resetButtons();
		updateDisplay();
		clearTimeout(timerTimeOut);
	}

	function countdown() {
		timerTimeOut = setTimeout(() => {
			let minutes = getMinutes();
			let seconds = getSeconds();
			const isFinished = minutes <= 0 && seconds <= 0;

			if (isFinished) {
				sounds.reset();
				controls.resetCards();
				controls.timeEnd();
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
		addMinutes,
		removeMinutes,
		updateTime,
		updateDisplay,
		pause,
		reset,
		countdown,
	};
}

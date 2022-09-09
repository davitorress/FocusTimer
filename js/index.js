import {
	minutesDisplay,
	secondsDisplay,
	buttonPlay,
	buttonPause,
	cardForest,
	cardRain,
	cardStore,
	cardFireplace,
} from "./elements.js";

import Controls from "./controls.js";
import Sounds from "./sounds.js";
import Timer from "./timer.js";
import Events from "./events.js";

const controls = Controls({
	buttonPlay,
	buttonPause,

	cardForest,
	cardRain,
	cardStore,
	cardFireplace,
});

const sounds = Sounds();

const timer = Timer({
	minutesDisplay,
	secondsDisplay,

	resetAudio: sounds.reset,
	resetControls: controls.resetButtons,
	resetCards: controls.resetCards,
});

Events({
	controls,
	timer,
	sounds,
});

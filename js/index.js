import {
	minutesDisplay,
	secondsDisplay,
	buttonSun,
	buttonMoon,
	buttonPlay,
	buttonPause,
	cardForest,
	cardRain,
	cardStore,
	cardFireplace,
	volumeForest,
	volumeRain,
	volumeStore,
	volumeFireplace,
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

	volumeForest,
	volumeRain,
	volumeStore,
	volumeFireplace,

	buttonSun,
	buttonMoon,
});

const sounds = Sounds();

const timer = Timer({
	minutesDisplay,
	secondsDisplay,
	controls,
	sounds,
});

Events({
	controls,
	timer,
	sounds,
});

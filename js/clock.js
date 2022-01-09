const clock = document.querySelector("h1#clock");
const seconds = document.querySelector("#toggleSeconds");
let showSeconds = false;

function getClock() {
	const date = new Date();
	let h = String(date.getHours()).padStart(2, "0");
	let m = String(date.getMinutes()).padStart(2, "0");
	let s = String(date.getSeconds()).padStart(2, "0");
	if (showSeconds) {
		clock.innerText = `${h}:${m}:${s}`;
	} else if (!showSeconds) {
		clock.innerText = `${h}:${m}`;
	}
}

function toggleSeconds() {
	if (showSeconds) {
		showSeconds = false;
		seconds.innerText = "seconds: off";
	} else {
		showSeconds = true;
		seconds.innerText = "seconds: on";
	}
	getClock();
}

getClock();
setInterval(getClock, 1000);

seconds.addEventListener("click", toggleSeconds);

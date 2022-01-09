function onGeoSuccess(position) {
	const lat = position.coords.latitude;
	const long = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const city = document.querySelector(".weather span:last-child");
			const weather = document.querySelector(".weather span:first-child");
			city.innerText = data.name;
			weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
		});
}

function onGeoError() {
	alert("navigator.geolocation.getCurrentPosition() failed");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

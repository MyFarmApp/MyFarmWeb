function getData() {
	if ('geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition((position) => {
			console.log(position.coords);
			fetch('https://cors-anywhere.herokuapp.com/api.weatherstack.com/current?access_key=dc9db6d6e2d05fd73bf8893f6c88c0fc&query=' + position.coords.latitude + "," + position.coords.longitude).then(function (response) {
				return response.json();
			}).then(function (obj) {
				document.getElementById("temperature").innerHTML = obj.current.temperature + "C";
				document.getElementById("uv").innerHTML = "UV Index: " + obj.current.uv_index;
				document.getElementById("precipitation").innerHTML = "Precipitation chance: " + obj.current.precip;
			}).catch(function (error) {
				console.error(error);
			});
		});
	} else {
		document.getElementById("temperature").innerHTML = "Enable Device Location to get the weather.";
		document.getElementById("uv").innerHTML = "UV Index: " + obj.current.uv_index;
		document.getElementById("precipitation").innerHTML = "Precipitation chance: " + obj.current.precip;
	}
}
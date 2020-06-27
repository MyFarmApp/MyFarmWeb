function star(x) {
	x.classList.toggle("fas");
	var favref = db.collection(uid).doc("favorites");
	favref.set({ [document.querySelector('#nameTitle').value]: true }, { merge: true });
	alert("This crop has been added to your favorites!")
}

function getData() {
	fetch('https://cors-anywhere.herokuapp.com/api.weatherstack.com/current?access_key=dc9db6d6e2d05fd73bf8893f6c88c0fc&query=San+Diego').then(function (response) {
		return response.json();
	}).then(function (obj) {
		document.getElementById("temperature").innerHTML = obj.current.temperature + "C";
		document.getElementById("uv").innerHTML = "UV Index: " + obj.current.uv_index;
		document.getElementById("precipitation").innerHTML = "Precipitation chance: " + obj.current.precip;
	}).catch(function (error) {
		console.error(error);
	});
}
fetch("https://cors-anywhere.herokuapp.com/growstuff.org/crops.json")
	.then(response => response.json())
	.then(data => {
    var output = "";
    data.forEach(function (el) {
        output += "<option value='" + el.slug + "'>";
    });
    var final = '<input type="search" id="plantSearch" name="q" placeholder="Search" list="cropautocompletelist"><br /><datalist id="cropautocompletelist">' + output + "</datalist>"
		document.querySelector(".search").innerHTML = final;
		var plant = document.querySelector("#plantSearch");
		plant.addEventListener("keypress", function (event) {
			if (event.keyCode === 13) {
				fetch("https://cors-anywhere.herokuapp.com/growstuff.org/crops/" + document.getElementById("plantSearch").value.toLowerCase() + ".json")
					.then(response => response.json())
  				.then(data => {
						document.querySelector(".label").style.display = "block";
						document.getElementById("nameTitle").innerText = data.name;
						document.getElementById("plantsvg").innerHTML = data.openfarm_data.attributes.svg_icon;
						document.getElementById("desc").innerHTML = data.openfarm_data.attributes.description;
						document.getElementById("grow").innerHTML = data.openfarm_data.attributes.sowing_method.toLowerCase();
						document.getElementById("sun").innerHTML = data.openfarm_data.attributes.sun_requirements.toLowerCase();

					});
			}
		});
		document.querySelector(".loader").style.display = "none";
		document.querySelector(".wrapper").style.display = "block";
	});
fetch("https://cors-anywhere.herokuapp.com/growstuff.org/crops.json")
	.then(response => response.json())
	.then(data => {
    var output = "";
    console.log(data);
    data.forEach(function (el) {
        output += "<option value='" + el.slug + "'>";
    });
    var final = '<input type="search" id="plantSearch" name="q" placeholder="Search" list="cropautocompletelist"><br /><datalist id="cropautocompletelist">' + output + "</datalist>"
		document.querySelector(".search").innerHTML = final;
		var plant = document.querySelector("#plantSearch");
		plant.addEventListener("keypress", function (event) {
			if (event.keyCode === 13) {
				document.getElementById("nameTitle").innerText = document.getElementById("plantSearch").value;
			}
		});
		document.querySelector(".loader").style.display = "none";
		document.querySelector(".wrapper").style.display = "block";
	});
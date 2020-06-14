function star(x) {
  x.classList.toggle("fas");
  var favref = db.collection(uid).doc("favorites");
  favref.set({[document.querySelector('#nameTitle').value]: true}, {merge: true});
  alert("This crop has been added to your favorites!")
}

function getData() {
  const API_KEY = '1b7e4b6fa70a61a386aef0171dab7175';


  const request = async url => {
    const reponse = await fetch(url);
    return response.ok ? response.json() : Promise.reject({
      error: 500
    });
  };

  const getWeatherInfo = async (element, form) => {
    try {
      const q = document.getElementById("plantSearch").value;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${API_KEY}`;
      const response = await request(url);
      element.innerText = JSON.stringify(response);

    } catch (err) {
      console.log(err);
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      getWeatherInfo(document.querySelector('#results'), form);
    }, false);
  });
}

function searchForPlant() {

  var plant = document.getElementById("plantSearch");
  plant.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      document.getElementById("nameTitle").innerText = document.getElementById("plantSearch").value;
    }
  });

}

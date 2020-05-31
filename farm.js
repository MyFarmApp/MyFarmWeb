// farm.js 0.1 - Copyright 2020 Samuel Sharp & The MyFarm Project Authors
class Farm {
  constructor(namespace, path) {
    var token;
    fetch('https://api.myfarmapp.tk/api/v1/utils/token')
      .then(response => response.json())
      .then(data => token = data.token)
      .then(() => fetch('https://api.myfarmapp.tk/api/v1/' + namespace + "/" + path + "?token=" + token)
        .then(response => response.json())
        .then(data => console.log(data)));
  }
}

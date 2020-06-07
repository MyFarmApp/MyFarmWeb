// farm.js 1.2 - Copyright 2020 The MyFarm Project Authors
class Farm {
  constructor(namespace, path) {
    return (async () => {
      if (namespace == "crops") {
        var this.value = await fetch('https://growstuff.org/crops/' + path).json();
      } else if (namespace == "plants") {
        var token = await fetch('https://api.myfarmapp.tk/api/v1/utils/token').json();
        this.value = await fetch('https://api.myfarmapp.tk/api/v1/' + namespace + "/" + path + "?token=" + token).json();
      } else {
        this.value = await fetch('https://api.myfarmapp.tk/api/v1/' + namespace + "/" + path).json()
      }
      return this;
    })();
  }
}

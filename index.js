fetch ("http://localhost:3000/Heros-Villains")
.then((resp) => resp.json())
.then((data) => herosVillains(data))
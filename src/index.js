console.log(data);

//You can start simple and just render a single
//pokemon card from the first element

data.forEach(function (pokemon) {
  // console.log("pokemonName", pokemon.name);
  const card1 = document.querySelector(".cards");
  const li = document.createElement("li");
  card1.append(li);

  li.setAttribute("class", "card");
  const nameTitle = document.createElement("h2");
  nameTitle.innerText = pokemon.name;
  nameTitle.setAttribute("class", "card--title");
  li.append(nameTitle);

  const image = document.createElement("img");

  li.append(image);
  image.setAttribute("width", "256");
  image.setAttribute("class", "card--img");
  image.setAttribute("src", pokemon.sprites.back_default);

  const ul = document.createElement("ul");
  li.append(ul);
  ul.setAttribute("class", "card--text");

  const innerLi = document.createElement("li");
  ul.append(innerLi);
  innerLi.innerText = pokemon.stats;
});
console.log(data[0]);

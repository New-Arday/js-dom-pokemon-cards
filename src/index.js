console.log(data);

//You can start simple and just render a single
//pokemon card from the first element

data.forEach(function (pokemon) {
  const card1 = document.querySelector(".cards");
  const li = document.createElement("li");
  card1.append(li);

  li.setAttribute("class", "card");
  const nameTitle = document.createElement("h2");

  let firstLetter =
    pokemon.name[0].toUpperCase() + pokemon.name.substring(1, 9);

  nameTitle.innerText = firstLetter;
  nameTitle.setAttribute("class", "card--title");
  li.append(nameTitle);

  const image = document.createElement("img");

  li.append(image);
  image.setAttribute("width", "256");
  image.setAttribute("class", "card--img");
  image.setAttribute(
    "src",
    pokemon.sprites.other["official-artwork"].front_default
  );

  const cardetails = document.createElement("ul");
  li.append(cardetails);
  cardetails.setAttribute("class", "card--text");

  pokemon.stats.forEach(function (stat) {
    const innerLi = document.createElement("li");
    cardetails.append(innerLi);

    innerLi.innerText = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
    // document.querySelector(".card--text").style.lineHeight = "30px";
  });
});
console.log(data[0]);

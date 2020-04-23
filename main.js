const printToDom = (selector,textToPrint) =>{
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildPetCards = (petCollection) => {
  //todo: build dino cards
  let domString = '';
  for (let i = 0; i < petCollection.length; i++) {
    domString += `<div class="petCard">`
    domString += `<header>${petCollection[i].name}</header>` 
    domString += `<img src="${petCollection[i].imageUrl}" alt="${pets[i].name}">`
    domString += `<div>${petCollection[i].color}</div>`
    domString += `<p>${petCollection[i].specialSkill}</p>`
    domString += `<footer class="${petCollection[i].type}">${petCollection[i].type}</footer>`
    domString += `</div>`
  }
  printToDom("#carddiv",domString);
}


const init = () =>{
  buildPetCards(pets)
}


init();

const printToDom = (selector,textToPrint) =>{
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildPetCards = (petCollection) => {
  let domString = '';
  for (let i = 0; i < petCollection.length; i++) {
    
    domString += `<div class="mainPetCard">`
    domString += `<header class="petHeader">${petCollection[i].name}</header>` 
    domString += `<div class="petCard">`
    domString += `<img src="${petCollection[i].imageUrl}" alt="${pets[i].name}">`
    domString += `<div>${petCollection[i].color}</div>`
    domString += `<p>${petCollection[i].specialSkill}</p>`
    domString += `</div>`
    domString += `<footer class="${petCollection[i].type}">${petCollection[i].type.toUpperCase().charAt(0)}${petCollection[i].type.slice(1)}</footer>`
    domString += `</div>`
  }
  printToDom("#carddiv",domString);
}


const init = () =>{
  buildPetCards(pets)
}


init();

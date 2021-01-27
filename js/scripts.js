var pokemonRepository = (function (){
  var pokemonList = [
    {
      name:"Charizard", 
      height: 1.7, 
      type: ["fire", "flying"]
    },
    {
      name:"Metagross", 
      height: 1.6, 
      type: ["psychic", "steel"]
    },
    {
      name:"Zekrom", 
      height: 2.9, 
      type: ["dragon", "electric"]
    }
    ];
    
function getAll() {
  return pokemonList;
}

function add(pokemon) {
  if(typeof pokemon==='object'){
    pokemonList.push(pokemon); 
  }
}

function addlistItem(pokemon) {
  let button = document.createElement('button');
  button.addEventListener('click', function () {
    console.log(pokemon);
  });
  let listItem = document.createElement('li');  
  button.innerText = pokemon.name;
  button.classList.add("pokemon-button");
  listItem.appendChild(button);
  mainSectionElement.appendChild(listItem);
  }
function showDetails(pokemon) {
    console.log(pokemon);
};
  
  return {
    getAll: getAll,
    add: add,
    addlistItem: addlistItem,
    showDetails: showDetails,
    };
    })();
  pokemonRepository.add({
    name: "Pikachu",
    height: 0.4,
    type: ["water", "magic"]
    })
  let mainSectionElement = document.querySelector('#main-section');
    
  pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addlistItem(pokemon);
  pokemonRepository.showDetails(pokemon);    
});

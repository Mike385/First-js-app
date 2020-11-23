let pokemonList=[
    {name:"Charizard", 
    height: 1.7, 
    type: ["fire", "flying"]
    },
    {name:"Metagross", 
    height: 1.6, 
    type: ["psychic", "steel"]
    },
    {name:"Zekrom", 
    height: 2.9, 
    type: ["dragon", "electric"]
    }
];
function myLoopFunction(pokemonList) {
  document.write(pokemonList.name + ' height: ' + pokemonList.height);
}
pokemonList.forEach(myLoopFunction);
document.write ("<br>")

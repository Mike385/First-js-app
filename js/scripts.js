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
document.write ("<br>");

(function (){
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
    })();
    
    var pokemonRepository = (function (){
      var pokemonList = [
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
    
    function getAll() {
      return pokemonList;
    }
    function add(pokemon) {
      pokemonList.push(pokemon); 
    }
    return {
      getAll: getAll,
      add: add
    };
    })();
    
    document.write( pokemonRepository.getAll());

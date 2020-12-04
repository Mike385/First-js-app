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
        if(typeof pokemon==='object'){
        pokemonList.push(pokemon); 
        }
    }
    return {
      getAll: getAll,
      add: add
    };
    })();
    pokemonRepository.add({
        name: "Pikachu",
        height: 0.4,
        type: ["water", "magic"]
    })
    pokemonRepository.getAll().forEach(function(pokemon) {
        document.write('Name: ' + pokemon.name + ' Height: ' + pokemon.height + '<br>');
      });
let pokemonList=[
    {name:"Charizard", height: 1.7, type: ["fire", "flying"]},
    {name:"Metagross", height: 1.6, type: ["psychic", "steel"]},
    {name:"Zekrom", height: 2.9, type: ["dragon", "electric"]}
];

for (let i=0; i < pokemonList.length; i++){
        document.write(pokemonList[i].name + " Height: " + pokemonList[i].height)
        document.write("<br>")
    }
    if (pokemonList.height >2.8) {
        document.write("(pokemonList[i].name " + pokemonList[i].height + ") - Wow that's big!");
}
    
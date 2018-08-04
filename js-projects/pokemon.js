var inputPokemonName = $('input.input');
var enterBtn = $('button.button');
var pokemonName = $('p.output');
var pokemonAbility = $('p.output-2');
var pokemonChosen;

/*var randomPokemonGenerator = function () {
    var randNum = Math.floor(Math.random()*88);
    $.ajax({
        type: 'GET',
        url: "https://swapi.co/api/people/" + randNum + "/",
        contentType: 'json',
        success: function(char) {
            battleText.text("Wild " + char.name.toUpperCase() + " appeared!");
        },
        error: function() {
            console.log("Could not find opponent");
        } 
    });
}*/

/*battleBtn.on('click', function(){
    randomPokemonGenerator();
});*/

function getPokemon() {
    pokemonChosen = inputPokemonName.val();  
    var urlInput = "http://pokeapi.co/api/v2/pokemon/" + pokemonChosen;
    $.ajax({
        url: urlInput,
        dataType: 'json',
        type: 'GET',
        
        success: function(pokemon) {
            pokemonName.text(pokemon.name);
            console.log(pokemon);
            getAbilities();
        },

        error: function() {
            pokemonName.text("Not in the Pokedex");
        }
    });
    
}

enterBtn.on('click', function() {
    getPokemon();
});
var inputPokemonName = $('input.input');
var enterBtn = $('button.button');
var randBtn = $('button.rand-btn');
var loadSpinner = $('div.loader');
var pokemonName = $('p.output');
var pokemonAbility = $('p.output-2');
var pokemonChosen;

var battleBtn = $('button.battle-btn');
var opponent = $('p.opponent');
var battleText = $('p.battle-text');
var loadSpinner2 = $('div.loader-2');

function loadingUpdate(loader) {
    loader.show();
}

function getPokemon(pokemonChosen) {
    loadingUpdate(loadSpinner);
    var urlInput = "http://pokeapi.net/api/v2/pokemon/" + pokemonChosen;
    $.ajax({
        url: urlInput,
        dataType: 'json',
        type: 'GET',
        
        success: function(pokemon) {
            loadSpinner.hide();
            pokemonName.text(pokemon.name.toUpperCase());
            getAbilities(pokemon);
        },

        error: function() {
            loadSpinner.hide();
            pokemonName.text("Not in the Pokedex");
        }
    });
}

function getAbilities(pokemon) {
    var abilityArray = pokemon.abilities.map(function(abilityObj) {
        return abilityObj.ability.name;
    });
    pokemonAbility.text(abilityArray.join(", "));
}

function randOpponent() {
    loadingUpdate(loadSpinner2);
    var randNum = Math.floor(Math.random()*88);
    var urlInput = "http://pokeapi.net/api/v2/pokemon/" + randNum;
    $.ajax({
        url: urlInput,      
        dataType: 'json',
        type: 'GET',

        success: function(char) {
            opponent.text("Wild " + char.name.toUpperCase() + " appeared!");
            battle(char);
        },
        error: function() {
            console.log("Could not find opponent");
        } 
    });
}

//random battle system
function battle(opponent) {
    var myHealth = 100;
    var oppHealth = 100;
    var doDMG, takeDMG;
    while (myHealth > 0 || oppHealth > 0) {
        doDMG = Math.floor(Math.random()*100 + 1);
        takeDMG = Math.floor(Math.random()*100 + 1);
        myHealth -= takeDMG;
        oppHealth -= doDMG;
        battleText.append(`<br> ${pokemonName.text()} does ${doDMG} damage`); 
        battleText.append(`<br> ${opponent.name.toUpperCase()} does ${takeDMG} damage`); 
    }
    if (myHealth <= oppHealth) {
        battleText.append("<br> You LOSE!"); 
    } else {
        battleText.append(`<br> ${pokemonName.text()} wins!`); 
    }
    loadSpinner2.hide();
}

enterBtn.on('click', function() {
    getPokemon(inputPokemonName.val());
});

randBtn.on('click', function() {
    getPokemon(Math.floor(Math.random()*721 + 1)); //number of different pokemon in the API
});

battleBtn.on('click', function(){
    randOpponent();
});



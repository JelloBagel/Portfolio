//http://pokeapi.salestock.net/api/v2/pokemon/ for WAMP
//https://pokeapi.co/api/v2/pokemon/ for web
var inputPokemonName = $('input.input');
var enterBtn = $('button.button');
var randBtn = $('button.rand-btn');
var loadSpinner = $('div.loader');
var pokemonName = $('p.output');
var pokemonMoves = $('form.output-2');
var pokemonChosen;

var battleBtn = $('button.battle-btn');
var opponent = $('p.opponent');
var battleText = $('p.battle-text');
var loadSpinner2 = $('div.loader-2');

function loadingUpdate(loader) {
    loader.show();
}

function getPokemon(pokemonChosen) {
    if (pokemonChosen) {
    loadingUpdate(loadSpinner);
        var urlInput = "https://pokeapi.co/api/v2/pokemon/" + pokemonChosen;
        $.ajax({
            url: urlInput,
            dataType: 'json',
            type: 'GET',
            
            success: function(pokemon) {
                loadSpinner.hide();
                pokemonName.text(pokemon.name.toUpperCase());
                getMoves(pokemon);
                getImage(pokemon);
            },

            error: function() {
                loadSpinner.hide();
                pokemonName.text("Not in the Pokedex");
            }
        });
    }
}

function getMoves(pokemon) {
    var movesArray = pokemon.moves.map(function(moveObj) {
        return moveObj.move.name;
    }); 

    //too many moves for player to choose from -> limit selection 10 randomized
    var randomNumArray = [];
    while (randomNumArray.length < 10) {
        var randNum = Math.floor(Math.random()*pokemon.moves.length + 1);
        if (!randomNumArray.includes(randNum)) {//if the randomnum is not already in the numarray add to num array 
            randomNumArray.push(randNum);
        }
    };

    //creates new checkbox per move found so player can select 4 moves for battle
    $.each(randomNumArray, function(num) {
        pokemonMoves.append(`<input type="checkbox" name="pokemonMove" value="${movesArray[num]}">${movesArray[num]} <br>`)
    });
}

function getImage(pokemon) {
    $('div.pokemon-img').prepend(`<img class="poke-img" src="${pokemon.sprites.front_default}" />`);
}

function randOpponent() {
    loadingUpdate(loadSpinner2);
    var randNum = Math.floor(Math.random()*88);
    var urlInput = "https://pokeapi.co/api/v2/pokemon/" + randNum;
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
    randOpponent(); //not clickable until player selects a pokemon
    //display battlefield only when battle start is clicked 
    $(".battlefield").prepend('<img src="./grass-battlefield.png" alt="grass battlefield">');
});

//clear previous pokemon chose
//print image of pokemon and opponent
//get pokemon ability for damage
//select 4 moves to use to battle
//double dmg for weakness
//animate pokemon attack
//replace input bar with search and select




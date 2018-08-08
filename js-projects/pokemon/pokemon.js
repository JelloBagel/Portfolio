//http://pokeapi.salestock.net/api/v2/pokemon/ for WAMP
//https://pokeapi.co/api/v2/pokemon/ for web
var inputPokemonName = $('input.input');
var enterBtn = $('button.button');
var randBtn = $('button.rand-btn');
var loadSpinner = $('div.loader');
var pokemonName = $('p.output');
var pokemonMoves = $('form.output-2');
var pokemonTypes = $('ul.types-list');
var pokemonChosen;

var battleBtn = $('button.battle-btn');
var loadSpinner2 = $('div.loader-2');

var opponentChosen;
var battleText = $('p.battle-innertext');

function loadingUpdate(loader) {
    loader.show();
}

function getPokemon(pokemonInput) {
    if (pokemonInput) {
        if (typeof pokemonInput === "string") {
            pokemonInput = pokemonInput.toLowerCase();
        }
        loadingUpdate(loadSpinner);
        var urlInput = "https://pokeapi.co/api/v2/pokemon/" + pokemonInput;
        $.ajax({
            url: urlInput,
            dataType: 'json',
            type: 'GET',
            
            success: function(pokemon) {
                loadSpinner.hide();
                pokemonChosen = pokemon;
                $(".moves-req").css("background-color", "inherit");
                getName(pokemon);
                getFrontImage(pokemon, $('div.pokemon-img'));
                getMoves(pokemon);
                getTypes(pokemon);
            },

            error: function() {
                loadSpinner.hide();
                pokemonName.text("Not in the Pokedex");
            }
        });
    }
}

function getName(pokemon) {
    pokemonName.empty();
    pokemonName.text(pokemon.name.toUpperCase());
}

function getFrontImage(pokemon, htmlLocation) {
    htmlLocation.empty();
    console.log(pokemon);
    htmlLocation.prepend(`<img class="poke-img" src="${pokemon.sprites.front_default}" />`);
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
    pokemonMoves.empty();
    $.each(randomNumArray, function(num) {
        pokemonMoves.append(`<input type="checkbox" name="pokemonMove" value="${movesArray[num]}">${movesArray[num]} <br>`)
    });
}

function getTypes(pokemon) {
    var typesArray = pokemon.types.map(function(typeObj) {
        return typeObj.type.name;
    }); 

    pokemonTypes.empty();
    $.each(typesArray, function(type) {
        pokemonTypes.prepend(`<li class="poke-type">${typesArray[type]} </li>`);
    });
}


function randOpponent() {
    var urlInput = "https://pokeapi.co/api/v2/pokemon/" + randomNum();
    $.ajax({
        url: urlInput,      
        dataType: 'json',
        type: 'GET',

        success: function(char) {
            opponentChosen = char;
            battleController();
        },
        error: function() {
            console.log("Could not find opponent");
        } 
    });
}

//random battle system
/*function battle(opponent) {
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
}*/

function getBackImage() {
    $('div.player-pokemon-img').empty();
    $('div.player-pokemon-img').prepend(`<img class="poke-img" src="${pokemonChosen.sprites.back_default}" />`);
}

function battleController() {
    //load pokemon img chosen by player
    getBackImage();

    //load random pokemon img 
    getFrontImage(opponentChosen, $('.opponent-pokemon-img'));

    //load text
    //get hp 
    //get move damage
}

//need exactly 4 moves to have battle start
function countChecked() { 
    return n = $(".output-2 input:checked").length;
};

//generates random num based on count of pokemon
//poke.co has 801
//salestock has 720
function randomNum() {
    return Math.floor(Math.random()*720 + 1)
}

enterBtn.on('click', function() {
    getPokemon(inputPokemonName.val());
});

randBtn.on('click', function() {
    getPokemon(randomNum()); //count of different pokemon in the API
});

battleBtn.on('click', function(){
    //not clickable until player selects 4 moves
    if (countChecked() != 4) {
        $(".moves-req").css("background-color", "yellow");
    } else {
        //loadingUpdate(loadSpinner2);
        randOpponent();
    }
});

//double dmg for weakness
//animate pokemon attack
//replace input bar with search and select




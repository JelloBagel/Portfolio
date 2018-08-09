//http://pokeapi.salestock.net/api/v2/pokemon/ for WAMP
//https://pokeapi.co/api/v2/pokemon/ for web
const inputPokemonName = $('input.input');
const enterBtn = $('button.button');
const randBtn = $('button.rand-btn');
const loadSpinner = $('div.loader');
const pokemonName = $('p.output');
const pokemonMoves = $('form.output-2');
const pokemonTypes = $('ul.types-list');
var playerChosenObj;
const playerPokemonStats = {
    "hp": 0,
    "att": 0,
    "def": 0,
    "speed": 0,
};

const battleBtn = $('button.battle-btn');
const loadSpinner2 = $('div.loader-2');

var opponentChosenObj;
const opponentPokemonStats = {
    "hp": 0,
    "att": 0,
    "def": 0,
    "speed": 0,
};
const battleText = $('p.battle-innertext');

function loadingUpdate(loader) {
    loader.show();
}

function getPokemon(pokemonInput) {
    if (pokemonInput) {
        if (typeof pokemonInput === "string") {
            pokemonInput = pokemonInput.toLowerCase();
        }
        loadingUpdate(loadSpinner);
        const urlInput = "https://pokeapi.co/api/v2/pokemon/" + pokemonInput;
        $.ajax({
            url: urlInput,
            dataType: 'json',
            type: 'GET',
            
            success: function(pokemon) {
                loadSpinner.hide();
                playerChosenObj = pokemon;
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
    htmlLocation.prepend(`<img class="poke-img" src="${pokemon.sprites.front_default}" />`);
}

function getMoves(pokemon) {
    const movesArray = pokemon.moves.map(function(moveObj) {
        return moveObj.move.name;
    }); 

    //too many moves for player to choose from -> limit selection 10 randomized
    const randomNumArray = [];
    while (randomNumArray.length < 10) {
        var randNum = Math.floor(Math.random()*pokemon.moves.length + 1);
        if (!randomNumArray.includes(randNum)) {//if the randomnum is not already in the numarray add to num array 
            randomNumArray.push(randNum);
        }
    };

    //creates new checkbox per move found so player can select 4 moves for battle
    pokemonMoves.empty();
    $.each(randomNumArray, function(num) {
        pokemonMoves.append(`<input type="checkbox" class="pokemonMove" value="${movesArray[num]}">${movesArray[num]} <br>`)
    });
}

function getTypes(pokemon) {
    const typesArray = pokemon.types.map(function(typeObj) {
        return typeObj.type.name;
    }); 

    pokemonTypes.empty();
    $.each(typesArray, function(type) {
        pokemonTypes.prepend(`<li class="poke-type">${typesArray[type]} </li>`);
    });
}


function randOpponent() {
    const urlInput = "https://pokeapi.co/api/v2/pokemon/" + randomNum();
    $.ajax({
        url: urlInput,      
        dataType: 'json',
        type: 'GET',

        success: function(char) {
            opponentChosenObj = char;
            battleController();
        },
        error: function() {
            console.log("Could not find opponent");
        } 
    });
}

function getBackImage() {
    $('div.player-pokemon-img').empty();
    if (playerChosenObj.sprites.back_default) {
        $('div.player-pokemon-img').prepend(`<img class="poke-img" src="${playerChosenObj.sprites.back_default}" />`);
    } else {
        $('div.player-pokemon-img').prepend(`<img class="poke-img" src="${playerChosenObj.sprites.front_default}" />`);
    }
    
}

function assignPokemonStats(pokemonStats, pokemonObj) {
    //check thorugh each stat for variables for both pokemon
    $.each(pokemonObj.stats, function(pokemon) {
        switch (pokemonObj.stats[pokemon].stat.name) {
            case "hp": 
                pokemonStats.hp = pokemonObj.stats[pokemon].base_stat;
                break;
            case "attack":
                pokemonStats.att = pokemonObj.stats[pokemon].base_stat;
                break;
            case "defense": 
                pokemonStats.def = pokemonObj.stats[pokemon].base_stat;
                break;
            case "speed": 
                pokemonStats.speed = pokemonObj.stats[pokemon].base_stat;
                break;
            default:
                break;
        }
    });
}

function readCheckedMoves() {
    const chkArray = [];
	
	$(".pokemonMove:checked").each(function() {
		chkArray.push($(this).val());
    });
    return chkArray;
}

function randOpponentMoves() {
    const movesArray = opponentChosenObj.moves.map(function(moveObj) {
        return moveObj.move.name;
    }); 

    //select 4 random moves for opponent
    const randomNumArray = [];
    while (randomNumArray.length < 4) {
        var randNum = Math.floor(Math.random()*opponentChosenObj.moves.length + 1);
        if (!randomNumArray.includes(randNum)) {//if the randomnum is not already in the numarray add to num array 
            randomNumArray.push(randNum);
        }
    };

    //creates new checkbox per move found so player can select 4 moves for battle
    const opponentRandMoves = [];
    $.each(randomNumArray, function(num) {
        opponentRandMoves.push(movesArray[num]);
    });

    return opponentRandMoves;
}

function moveStats(movesArray) {
    const moveStatsArray = []; 

    $.each(movesArray, function(move) {
        const urlInput = "http://pokeapi.salestock.net/api/v2/move/" + movesArray[move];
        $.ajax({
            url: urlInput,
            dataType: 'json',
            type: 'GET',
            
            success: function(moveObj) {
                //store moves stats in moveStatsArray
                    //get move damage move.power
                //create new variable dmg where damage = (((12/5)*power of move*att/def)/50 +2)* modifier
            },

            error: function() {
                console.log("Move not found");
            }
        });
    });

    //need to finish request before continuing
    return moveStatsArray;
}

function loadDisplay(playerHp, opponentHp) {
    const oppHP = $("progress.opponent-hp");
    oppHP.max = opponentPokemonStats.hp;
    oppHP.value = opponentHp;

    const oppName = $(".opponent-pokemon-name");
    oppName.text(opponentChosenObj.name);

    const playerHP = $("progress.player-hp");
    playerHP.max = playerPokemonStats.hp;
    playerHP.value = playerHp;

    const playerName = $(".player-pokemon-name");
    playerName.text(playerChosenObj.name);

    //write WILD ____ appeared!
    //change text of move buttons
}

function updateDisplay(damageHp, damaged) {
    if (damaged === "player") {
        const playerHP = $("progress.player-hp");
        playerHP.value = playerHp;
    } else if (damaged === "opponent"){
        const oppHP = $("progress.opponent-hp");
        oppHP.value = opponentHp;
    }
}

function battleController() {
    //found random opponent already

    //load pokemon img chosen by player
    getBackImage();

    //load random pokemon img 
    getFrontImage(opponentChosenObj, $('.opponent-pokemon-img'));

    //load variables
    assignPokemonStats(playerPokemonStats, playerChosenObj);
    assignPokemonStats(opponentPokemonStats, opponentChosenObj);

    //returns as array of with 4 objects containing move and dmg properties
    //const playerDealsDmg = moveStats(readCheckedMoves()); 
    //const opponentDealsDmg = moveStats(randOpponentMoves());

    var playerHp = playerPokemonStats.hp;
    var opponentHp = opponentPokemonStats.hp;
    loadDisplay(playerHp, opponentHp);

    //while one player is not dead
        //player move
        //opponent move
        //updateDisplay();
    //print who won
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
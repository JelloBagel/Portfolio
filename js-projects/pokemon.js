
var sendBtn = $('button.submit-btn');
var pokemonName = $('p.pokemon-name');
var pokemonAbility = $('p.pokemon-ability');
var pokemonChosen;
var battleBtn = $('.battle-start');
var battleText = $('.battle-text');


function selectingPokemon() {
    var x = $('input.pokemon-input').val();
    if (x != undefined) { 
        $.ajax({
            url: "https://swapi.co/api/people/" + x + "/",
            contentType: 'json',

            success: function(result) {
                shipSelection(result);
            },

            error: function() {
                pokemonName.text("Not discovered yet");
                pokemonAbility.text("Does not have TM-fly");
            }

        });
    }
}

function shipSelection() {
    pokemonChosen = result;
    pokemonName.text(result.name);

    if (result.films === undefined || result.films.length === 0) {
        pokemonAbility.text("Does not own a ship");
    } else {
        var arrayOfShips = [];
        $.when(
            $.each(result.films, function(i, film) {
                $.ajax({
                    url: film,
                    contentType: 'json',

                    success: function(value) {
                        arrayOfShips.push(value.title);
                        //console.log(value.title);
                    },
                    error: function() {
                        //console.log(film);
                        console.log("cant find my ship");
                    }
                });
            })
        ).then( function() {
        //console.log(arrayOfShips);
        //console.log(arrayOfShips[1]);
        pokemonAbility.text(arrayOfShips.join(', '));
        });
    }
}

var randomPokemonGenerator = function () {
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
}

sendBtn.on('click', selectingPokemon());

battleBtn.on('click', function(){
    randomPokemonGenerator();
});

//https://rickandmortyapi.com/api/character/2

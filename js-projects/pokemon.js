
sendBtn = $('button.submit-btn');
var pokemonName = $('p.pokemon-name');
var pokemonAbility = $('p.pokemon-ability');
var pokemonChosen;

sendBtn.on('click', function () {
    var x = $('input.pokemon-input').val();
    if (x != undefined) { 
        $.ajax({
            url: "https://swapi.co/api/people/" + x + "/",
            contentType: 'json',

            success: function(result) {
                pokemonChosen = result;
                pokemonName.text(result.name);

                if (result.films === undefined || result.films.length === 0) {
                    pokemonAbility.text("Does not own a ship");
                } else {
                    var arrayOfShips = [];
                    $.when(
                        $.each(result.films, function(film) {
                            $.ajax({
                                url: film,
                                contentType: 'json',
    
                                success: function(value) {
                                    arrayOfShips.push(value.title);
                                    console.log(value.title);
                                },
                                error: function() {
                                    console.log("cant find my ship");
                                }
                            });
                        })
                    ).then( function() {
                    console.log(arrayOfShips);
                    console.log(arrayOfShips[1]);
                    pokemonAbility.text(arrayOfShips.join(', '));
                    });
                }
            },

            error: function() {
                pokemonName.text("Not discovered yet");
                pokemonAbility.text("Does not have TM-fly");
            }

        });
    }
});

battleBtn = $('.battle-start');
battleText = $('.battle-text');

battleBtn.on('click', function(){
    randomPokemonGenerator();
});

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

//https://rickandmortyapi.com/api/character/2

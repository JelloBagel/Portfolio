
var enterBtn = $('button.button');
var input;
var output = $("p.output");
var output2 = $("p.output-2");

function getCharacter() {
    input = $("input.input").val();
    var urlInput = "https://swapi.co/api/people/" + input + "/";
    $.ajax({
        url: urlInput,
        dataType: 'json',
        method:'GET',

        success: function(result) {
            output.text(result.name);
            getFilm(result);
        },

        error: function() {
            if (input) {
                output.text("Not a character in a movie!");
            } else {
                output.text("No entry");                
            }
        }
    });
}

function getFilm(person) {
    if (person.films === undefined || person.films.length === 0) {
        output.text("Does not own a ship");
    } else {
        var arrayOfFilms = person.films.map(function(film) {
            return $.ajax({
                url: film,
                dataType: 'json',
                method: 'GET',
            });
        })
        $.when.apply(null, arrayOfFilms)
            .then(function() {
                var filmTitles = Array.prototype.slice.call(arguments); //creates an array with prototype methods
                filmTitles = filmTitles.map(function(film){
                    return film[0].title;
                });
                output2.text(filmTitles.join(", "));
            })
    }
}

enterBtn.on('click', function() {
    getCharacter();
});

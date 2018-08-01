
sendBtn = $('button.submit-btn');

sendBtn.on('click', function () {
    var x = $('input.pokemon-input').val();
    if (x != undefined) { 
        $.ajax({
            type: 'GET',
            url: "http://pokeapi.co/api/v2/pokemon/" + x + "/",
            contentType: 'json',

            success: function(result) {
                $('p.pokemon-name').text() = result.name;
            },
            error: function() {
                $('p.pokemon-name').text = "Not discovered yet";
            }

        });
    }
});

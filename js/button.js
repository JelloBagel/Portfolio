var aboutButton = $('.main .features .button-feature.button-about');

aboutButton.on('click', function() {
    window.location = 'about.html';
});

var gameProjectsButton = $('.main .features .button-feature.button-game');

gameProjectsButton.on('click', function() {
    window.location = 'projects.html';
});

var mediaButton = $('.main .features .button-feature.button-media');

mediaButton.on('click', function() {
    window.location = 'media.html';
});

//testing hamburger button
var hamburgerButton = $('.navbar .container .navbar-toggler'); 
var navbarCollapse = $('.navbar .container .navbar-collapse');
var navbarTranslate = $('.navbar .container .navbar-translate');
var toggled = false;
hamburgerButton.on('click', function() {

    if (toggled === false) {
        toggled = true;
        navbarCollapse.css({"transform": "translate3d(0, 0, 0)"});
        navbarTranslate.css({"transform": "translate3d(-230px, 0, 0)"});
    } else {
        toggled = false;
        navbarCollapse.css({"transform": "translate3d(230px, 0, 0)"});
        navbarTranslate.css({"transform": "translate3d(0, 0, 0)"});
    }
});
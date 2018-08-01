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
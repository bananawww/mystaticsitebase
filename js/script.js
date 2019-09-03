document.addEventListener('DOMContentLoaded', function () {

    //TOGGLE MENU NAV
    var myMenuButton = document.querySelector('.menu-button');
    var myMainMenu = document.querySelector('.site-header .site-navigation');
    //console.log(myMainMenu);
    myMenuButton.addEventListener ('click', function () {
        //console.log("Hey Mom, I'm Clicked!")
        myMainMenu.classList.toggle('expanded');
    });

});
var menu_open = false;
$(document).ready(function() {
    $('#menu-icon').on('click', (function() {
        $('.directory').toggleClass('display-header');
        $('.directory li').toggle();
        // if (menu_open == false) {
        //     console.log('hi');
        //     $('.directory li').show();
        //     // TODO: CHANGE THIS TO JUST A TOGGLE TO CSS WITH .ADDCLASS and other things like this too 
        //     $('.directory').css({
        //         "border-color": "white",
        //         "border-width": "1px",
        //         "border-style": "solid"
        //     });
        //     menu_open = true;
        // } else {
        //     $('.directory li').hide();
        //     $('.directory').css('border', 'none');
        //     menu_open = false;
        // }
    }));

    function myFunction(x) {
        if (x.matches) { // If media query matches
            console.log("matches");
            $('.directory li').css({
                "display": "inline-block",
                "visibility": "visible"
            });
        } else {
            console.log("no match");
            $('directory li').css({
                "display": "none"
            });
        }
    }
    var x = window.matchMedia("(min-width: 800px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
});
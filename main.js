
// connected the document to the jquerry then used the keydown to use the key to move when I press down.
// used .keyCode to determine which key to use 90(z) and 39(right arrow)
// keycode 90 moves #red1 across the screen.
$(document).keydown(function(run) { 
    if(run.keyCode == 90) { 
        $("#red1").animate({marginLeft: "+=20vw"}); //animated to make #red1 moved across the screen away from margin left at 20vw.
       let redRacer = $("#red1").position();
        console.log(redRacer.left);
    }
});

$(document).keydown(function(run) {
    if(run.keyCode == 39) { //runes keycode for right arrow.
        $("#blue1").animate({marginLeft: "+=20vw"}); //moved #blue1 across the screen at 20vw.
        let blueRacer = $("#blue1").position();
        console.log(blueRacer.left);
    }
});

// let winner = function() {
//     if (redRacer = position.left)
// }

// connected the document to the jquerry then used the keydown to use the key to move when I press down.
// used .keyCode to determine which key to use 90(z) and 39(right arrow)
// keycode 90 moves #red1 across the screen.

$(document).keydown(function(run) { 
    let redRacer = $(window).width() - ($('#red1').offset().left + $('#red1').outerWidth());
    let blueRacer = $(window).width() - ($('#blue1').offset().left + $('#blue1').outerWidth());
    if(run.keyCode == 90 && redRacer >= 50) { //runes keycode for right arrow and stops redRacer when he hits the wall
        $("#red1").animate({left: '+=2vw'})
    } else if (run.keyCode == 39 && blueRacer >= 50) { //runes keycode for right arrow and stops blueRacer when he hits the wall
        $("#blue1").animate({left: '+=2vw'})
    }; 
        detectWinner(redRacer, blueRacer);
    }
);


function detectWinner(redRacer, blueRacer) {
if(redRacer >= 50 && blueRacer < 50) {
alert('winner player 2');
} else if(redRacer < 50 && blueRacer >=50){
    alert('winner player 1');
}
};




















































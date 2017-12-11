
// connected the document to the jquerry then used the keydown to use the key to move when I press down.
// used .keyCode to determine which key to use 90(z) and 37(left arrow)
// keycode 90 moves #red1 across the screen.

$(document).keydown(function(run) { 
    let redRacer = $('.container').innerWidth()-($('#red1').offset().left + $('#red1').outerWidth());                        //$(window).width() - ($('#red1').offset().right + $('#red1').outerWidth());
    let blueRacer = $(window).width() - ($('#blue1').offset().left + $('#blue1').outerWidth());
    if(run.keyCode == 37 && redRacer <= 1100) { //runes keycode for right arrow and stops redRacer when he hits the wall
        $("#red1").animate({right: '+=2vw'}, -200)
        console.log(redRacer);
    } else if (run.keyCode == 90 && blueRacer >= 50) { //runes keycode for right arrow and stops blueRacer when he hits the wall
        $("#blue1").animate({left: '+=2vw'}, -200)
        console.log(blueRacer)
    }; 
        detectWinner(redRacer, blueRacer); //detects who one.......small problem is if they key keeps getting pressed way before the edge it will go past the box and not declare winner

    }
);


function detectWinner(redRacer, blueRacer) { //function to detect which player won.
if(redRacer >= 1090 && blueRacer >= 50) {
    alert('winner player 1');
 } else if(redRacer <= 1090 && blueRacer <= 50){
     alert('winner player 2');
}
};


$("button").on('click', function(){  //adding a click button using jquery to go to the second page.
        window.location.href="page2.html";
});
// var reset = 0;
// $('#reset').click(function(){
//     $('').html("").
//     reset = 0;















































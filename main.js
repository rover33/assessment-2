
// connected the document to the jquerry then used the keydown to use the key to move when I press down.
// used .keyCode to determine which key to use 90(z) and 39(right arrow)
// keycode 90 moves #red1 across the screen.

// $(document).keydown(function(run) { 
//     let redRacer = $(window).width() - ($('#red1').offset().left + $('#red1').outerWidth());
//     if(run.keyCode == 90 && redRacer >= 50) { //runes keycode for right arrow and stops redRacer when he hits the wall
//         $("#red1").animate({left: '+=2vw'}); 
//         //animated to make #red1 moved across the screen away from margin left at 2vw.
//     }
// });

// $(document).keydown(function(run) {
//     let blueRacer = $(window).width() - ($('#blue1').offset().left + $('#blue1').outerWidth());
//     if(run.keyCode == 39 && blueRacer >= 50) { //runes keycode for right arrow and stops blueRacer when he hits the wall
//         $("#blue1").animate({left: '+=2vw'}); //moved #blue1 across the screen at 2vw.
//     }
// });


// let winner = $()
//  if
















 $(document).keydown(function(run) {
     if(run.keyCode == 90)
     $('#red1').animate({left: '+=10'})
 });




































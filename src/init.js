$(document).ready(function(){
  window.dancers = [];
  $('body').toggleClass('marketStreet');

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ($(".container").height() - 200) * Math.random(),
      ($(".container").width() - 200) * Math.random(),
      Math.random() * 1000
    );
    $('.container').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpDancersButton').on('click', function(event) {
    event.preventDefault();
    var spinnyHeight = $('.container').height() / 3;
    var circleHeight = spinnyHeight * 2;
    var spinnyWidth = $('.container').width() / $('img.spinnyDancer').length;
    var circleWidth = $('.container').width() / $('img.circleDancer').length;
    var circleInterval = 0;
    var spinnyInterval = 0;
    
    window.dancers.forEach(function(dancer) {
      if(dancer.$node.hasClass('spinnyDancer')) {
        dancer.lineUp(spinnyHeight, spinnyInterval);
        spinnyInterval += spinnyWidth;
      }
      if(dancer.$node.hasClass('circleDancer')) {
        dancer.lineUp(circleHeight, circleInterval);
        circleInterval += circleWidth;
      }

    });
  });

  $('.countrifyButton').on('click', function(event) {
    //if in a country state, go back to Market Street.
    if($('body').hasClass('danceHall')) {
      $('body').toggleClass('marketStreet');
      $('body').toggleClass('danceHall');  
      
      //Turn off Garth
      $(".audio-on").get(0).pause();
      $(".audio-on").get(0).currentTime = 0;
      $('audio').removeClass('audio-on');
      $('audio').addClass('audio-off');
    
      //loop through dancers, toggle class pair
      dancers.forEach(function(dancer){
        dancer.$node.toggleClass('pair');
        dancer.$node.appendTo($('.container'));

        dancer.setPosition(
          ($(".container").height() - 200) * Math.random(),
          ($(".container").width() - 200) * Math.random());
        //un-sad :)
        if(dancer.$node.hasClass('sad-face')){
          if(dancer.$node.hasClass('spinnyDancer')){
            dancer.$node.toggleClass('spinnyDance');
          } else {
            dancer.$node.toggleClass('circleDance');
          }
        }
        
      });
      $('.pair').remove();
      $('.cowboy-hat').remove();
      $('.sad-face').remove();
      
      


    } else {
      $('body').toggleClass('marketStreet');
      $('body').toggleClass('danceHall');  
      
      //Play Garth Brooks - Friends in low places
      $(".audio-off").get(0).play();
      $('audio').removeClass('audio-off');
      $('audio').addClass('audio-on');
  
      for(var i = 0; i < dancers.length; i += 2) {
        //if odd dancer out, send him to the corner
       if(dancers.length % 2 === 1 && i === dancers.length - 1) {
        dancers[dancers.length - 1].sadCorner();
        //else, pair up dancers and set new position
       } else {
        $('.dancer').toggleClass('pair');
        //remove dancers from DOM
        var pairOne = dancers[i];
        var pairTwo = dancers[i + 1];
        pairOne.$node.append($('<img class="cowboy-hat" src="assets/hat.gif">'));
        pairTwo.$node.append($('<img class="cowboy-hat" src="assets/hat.gif">'));
        //create new container div
        var $div = $('<div></div>').addClass('pair');
        //add div to container div
        $('.container').append($div);
        //add dancer pair to div
        $div.append([pairOne.$node, pairTwo.$node]);
  
        //set their new position
        console.log(pairOne);
        var randomHeight = ((($(".container").height() / 2) - 400) * Math.random()) + ($(".container").height() / 2);
        var randomWidth = ($(".container").width() - 400) * Math.random()
        pairOne.setPosition(randomHeight, randomWidth);
        pairTwo.setPosition(randomHeight + 50, randomWidth + 50);      
       }
      }
    }
  });


});


// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
// use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.hasPair = false;
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);

  
};


makeDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // console.log("The parent step was called!");
    setTimeout(this.step.bind(this), this._timeBetweenSteps);
  };



makeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  makeDancer.prototype.countrify = function(top, left) {
    //pass in a position
    //remove current animation
    //start new animation
    //add cowboy hat
  };
  makeDancer.prototype.sadCorner = function() {
    var left = $('.container').width(); 
    var top = $('.container').height() / 2;
    this.setPosition(top, left);
  };
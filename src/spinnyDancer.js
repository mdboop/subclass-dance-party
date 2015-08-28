var makeSpinnyDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node.addClass("spinnyDancer");
  this.$node.addClass("spinnyDance");
  this.$node.append('<img class="spinnyDancer" src="assets/left-shark.gif">')
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //debugger;
  
};

makeSpinnyDancer.prototype = Object.create(makeDancer.prototype);
makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;

makeSpinnyDancer.prototype.step = function() {
  //make the Spinny animation

};

makeSpinnyDancer.prototype.lineUp = function(top, left) {
  this.setPosition(top, left);
}

var makeRandomDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node.addClass("randomDancer");
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //debugger;
  
};

makeRandomDancer.prototype = Object.create(makeDancer.prototype);
makeRandomDancer.prototype.constructor = makeRandomDancer;

makeRandomDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // console.log("I am blinkyDancer step function");
  this.$node.toggle();  
};

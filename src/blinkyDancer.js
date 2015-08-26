var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.timeBetweenSteps = timeBetweenSteps;
  this.boundStep = this.blinkyStep.bind(this);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.step(boundStep, timeBetweenSteps);
  
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.blinkyStep = function(){
  // call the old version of step at the beginning of any call to this new version of step
  // this.parentStep(this.timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  console.log("I am blinkyDancer step function");
  this.$node.toggle();  
};

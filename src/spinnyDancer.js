var makeSpinnyDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node.addClass("spinnyDancer");
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //debugger;
  this.setPosition(top, left);
  this.boundStep = this.step.bind(this);
  // this.parentStep(this.boundStep, this.timeBetweenSteps);
  
};

makeSpinnyDancer.prototype = Object.create(makeDancer.prototype);
makeSpinnyDancer.prototype.constructor = makeSpinnyDancer;

makeSpinnyDancer.prototype.step = function() {
  //make the Spinny animation

};

var makeCircleDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node.addClass("circleDancer");
  this.$node.append('<img class="circleDancer" src=assets/skeleton.gif>')
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //debugger;
  this.setPosition(top, left);
  this.boundStep = this.step.bind(this);
  // this.parentStep(this.boundStep, this.timeBetweenSteps);
  
};

makeCircleDancer.prototype = Object.create(makeDancer.prototype);
makeCircleDancer.prototype.constructor = makeCircleDancer;

makeCircleDancer.prototype.step = function() {
  //make the circle animation

};

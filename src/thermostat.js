const minimumTemperature = 10;

function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = true;
};

Thermostat.prototype = {
  increase : function(){
    this.temperature += 1;
  },
  decrease : function() {
    this.temperature -= 1;
  },
  maximumTemperature : function() {
    if (this.powerSavingMode == true) {
      return 25;
    } else {
      return 32;
    };
  },
  turnOnPSM : function() {
    this.powerSavingMode = true;
  },
  turnOffPSM : function() {
    this.powerSavingMode = false;
  },
  reset : function() {
    this.temperature = 20;
  },
  energyUsage : function() {
    if (this.temperature < 18) {
      return "low";
    };
    if (this.temperature < 25) {
      return "medium";
    };
    return "high";
  }
};

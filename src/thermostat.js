const minimumTemperature = 10;

function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = true;
};

Thermostat.prototype.increase = function() {
  this.temperature += 1;
};

Thermostat.prototype.decrease = function() {
  this.temperature -= 1;
};

Thermostat.prototype.maximumTemperature = function() {
  if (this.powerSavingMode == true) {
    return 25;
  } else {
    return 32;
  };
};

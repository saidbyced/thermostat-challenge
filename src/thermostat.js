const minimumTemperature = 10;

function Thermostat() {
  this.temperature = 20;
};

Thermostat.prototype.increase = function() {
  this.temperature += 1;
};

Thermostat.prototype.decrease = function() {
  this.temperature -= 1;
};

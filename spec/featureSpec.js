'use strict';

describe ('Thermostat', function() {

  let thermostat;
  beforeEach(function() {
    thermostat = new Thermostat
  });

  describe ('temperature', function() {

    it('should default to 20', function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it('can be increased', function() {
      thermostat.increase();

      expect(thermostat.temperature).toEqual(21);
    });

    it('can be decreased', function() {
      thermostat.decrease();

      expect(thermostat.temperature).toEqual(19);
    });

  });

  describe('minimumTemperature', function() {

    it('should be 10', function() {
      expect(minimumTemperature).toEqual(10);
    });

  });

  describe('powerSavingMode', function() {
  
    
    it('should set the maximumTemperature to 25 degrees', function() {
      thermostat.turnOnPSM();
      
      expect(thermostat.maximumTemperature()).toEqual(25);
    });

    it('should default to "on"', function() {
      expect(thermostat.powerSavingMode).toEqual(true);
    });

  });

  describe('maximumTemperature', function() {

    it('should be 32 with powerSavingMode off', function() {
      thermostat.turnOffPSM();

      expect(thermostat.maximumTemperature()).toEqual(32);
    });

  });

  describe('reset', function() {

    it('should reset the temperature to 20 degrees', function() {
      thermostat.reset();

      expect(thermostat.temperature).toEqual(20);
    });

  });

  describe('currentEnergyUsage', function() {

    describe('should show a usage level', function() {
      
      it('low when temperature is below 18 degrees', function() {
        thermostat.temperature = 17;

        expect(thermostat.energyUsage()).toEqual("low");
      });

      it('meduim when temperature is between 18 and 25 degrees', function() {
        thermostat.temperature = 21.5;

        expect(thermostat.energyUsage()).toEqual("medium");
      });

      it('high when temperature is 25 degrees or higher', function() {
        thermostat.temperature = 26;

        expect(thermostat.energyUsage()).toEqual("high");
      });

    });

  });

});

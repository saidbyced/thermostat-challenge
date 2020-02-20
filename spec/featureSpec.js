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
      thermostat.powerSavingMode = true;
      
      expect(thermostat.maximumTemperature()).toEqual(25);
    });

    it('should default to "on"', function() {
      expect(thermostat.powerSavingMode).toEqual(true);
    });

  });

  describe('maximumTemperature', function() {

    it('should be 32 with powerSavingMode off', function() {
      thermostat.powerSavingMode = false;

      expect(thermostat.maximumTemperature()).toEqual(32);
    });

  });

});

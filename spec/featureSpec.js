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

});

'use strict';

describe ('Thermostat', function() {

  let thermostat;
  beforeEach(function() {
    thermostat = new Thermostat
  });

  describe ('temperature', function() {

    it('should default to 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20)
    });

  });

});

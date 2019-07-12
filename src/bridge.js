'use strict';

/** Single Dependency - API for Bridge */
let hue = require('node-hue-api');

/**
 * Connecting to specific bridge, username is unique.
 */
let HueApi = hue.HueApi;
let host = "172.16.15.33";
let username = "3RcWD2DoxBwDfmLquhTi8bVpXh7IzhLOw8GpfCe4";
let api = new HueApi(host, username);

/**
 * If return from API is an error
 * @param err - Error
 */
const displayError = function(err) {
    console.error(err);
};

/** Status (On/Off) Check of Lightbulbs by Id */
const lightOnOff = (lightNum, status) => {
    api.setLightState(lightNum, status)
        .fail(displayError)
        .done();
};

/** Status (On/Off) Check of LightGroup */
const lightGroup = (lightNum, status) => {
    api.setGroupLightState(lightNum, status)
        .fail(displayError)
        .done();
};

/** Exports status' outside of file */
module.exports = {lightOnOff,lightGroup};

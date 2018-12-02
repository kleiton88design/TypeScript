"use strict";
exports.__esModule = true;
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.junpIntoHyperspace = function () {
        console.log("Entering hyper with " + this.propulsor + " ");
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;

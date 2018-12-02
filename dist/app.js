/*
let message: string = "Help me, Obi-Wan Kenobi. You're my only hope!"
console.log(message)

let episode: number = 4
episode = '4'
console.log("This is episode " + 4)
episode = episode + 1
console.log("Next episode is " + episode)

let favoriteDroid
favoriteDroid = 'BB-8'
favoriteDroid = 10
console.log("My favorite droid is " + favoriteDroid)

let isEnoughToBeatMF = function (parsecs: number): boolean {
    return parsecs < 12
}

let distance = 11
console.log(`is ${distance} parsecs enough to beat Millenium Falcon? ${isEnoughToBeatMF(distance) ? 'YES': 'NO'} `)

let call = (name: string) => console.log(`Do you copy, ${name}?`)
call('R2')

function inc (speed: number, inc: number = 1) : number {
    return speed + inc
}

console.log(`inc (5, 1) = ${inc(5, 1)}`)
console.log(`inc (5) = ${inc(5)}`)
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.junpIntoHyperspace = function () {
        console.log("Entering hyper with " + this.propulsor + " ");
    };
    return Spacecraft;
}());
var ship = new Spacecraft('hyperdrive');
ship.junpIntoHyperspace();
var MilleniumFalcon = /** @class */ (function (_super) {
    __extends(MilleniumFalcon, _super);
    function MilleniumFalcon() {
        var _this = _super.call(this, 'hyperdrive') || this;
        _this.cargoContainers = 4;
        return _this;
    }
    MilleniumFalcon.prototype.junpIntoHyperspace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.junpIntoHyperspace.call(this);
        }
        else {
            console.log('Failed to jump into hyperspace');
        }
    };
    return MilleniumFalcon;
}(Spacecraft));
var falcon = new MilleniumFalcon();
falcon.junpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon goog for the job? " + (goodForTheJob(falcon) ? 'yes' : 'no') + " ");

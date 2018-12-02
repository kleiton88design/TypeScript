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
import {Spacecraft, Containership} from './base-ships'
import {MilleniumFalcon} from './starfighters'

import * as _ from 'lodash'
console.log(_.pad("Typescript Examples", 40, "="))

let ship = new Spacecraft('hyperdrive')
ship.junpIntoHyperspace()

let falcon = new MilleniumFalcon()
falcon.junpIntoHyperspace()


let goodForTheJob = ( ship: Containership ) => ship.cargoContainers > 2

console.log(`Is falcon goog for the job? ${goodForTheJob ( falcon ) ? 'yes': 'no'} `) 




































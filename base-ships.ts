class Spacecraft {
	constructor (public propulsor: string){}

	junpIntoHyperspace() {
		console.log(`Entering hyper with ${this.propulsor} `)
	}
}

interface Containership {
	cargoContainers?: number
}

export {Spacecraft, Containership}
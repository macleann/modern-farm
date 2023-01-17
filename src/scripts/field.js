//declare a variable with let so it can be updated at a later point
//define an empty array so we can populate it later
let allPlants = []

//export a newly defined function that accepts a seed as a parameter
export const addPlant = (seedObject) => {
    //push the seed to the previously defined allPlants array
    allPlants.push(seedObject)
    //return the array
    return allPlants
}

//export a newly defined function
export const usePlants = () => {
    //declare a new empty array that will copy allPlants
    const allPlantsCopy = []
    //iterate through the allPlants array
    for (const plant of allPlants) {
        //push each plant in that array to the copy array
        allPlantsCopy.push(plant)
    }
    //return the copy array
    return allPlantsCopy
}
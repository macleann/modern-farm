import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"

//export a newly defined function that accepts a plan as a parameter
export const plantSeeds = (plan) => {
    
    //iterate through the plan at first by each row array of the plan array
    for (let row of plan) {
        //iterate through each row array to access the crop names within them
        for (let crop of row){
            //if the crop within the row array is "Asparagus", then
            if (crop === "Asparagus") {
                /* invoke the addPlant function which accepts a seedObject as a parameter
                to create the seedObject, let's invoke the createAsparagus function,
                which returns an asparagus object with the appropriate properties
                this asparagus object is added to the allPlants array via the addPlant function */
                addPlant(createAsparagus())
            //repeat the process exactly as we did for asparagus until we get to corn
            } else if (crop === "Potato") {
                addPlant(createPotato())
            } else if (crop === "Soybean") {
                addPlant(createSoybean())
            } else if (crop === "Sunflower") {
                addPlant(createSunflower())
            } else if (crop === "Wheat") {
                addPlant(createWheat())
            //if the crop within the row array is "Corn", then
            } else if (crop === "Corn") {
                //define a new variable to store the array of corn objects that createCorn creates
                let corn = createCorn()
                //invoke addPlant and use the newly defined corn variable and bracket notation to add each corn object from the corn array to the allPlants array
                addPlant(corn[0])
                addPlant(corn[1])
            //though this should never be the case, if the crop in the row array is not one of the above crops, add null to the allPlants array
            } else {
                addPlant(null)
            }
        }
    }

    //return an invocation of the usePlants function, which creates a copy of the allPlants array previously filled by the addPlant function above
    return usePlants()
}
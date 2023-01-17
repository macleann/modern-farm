//export a newly defined function that accepts an array of plants as a parameter
export const harvestPlants = (plannedPlantsArray) => {
    //define an empty array that can be modified at a later date
    let plantYields = []

    //iterate through each plant of the plantsArray parameter
    for (const plant of plannedPlantsArray) {
        //if the plant object's type property is "Corn"
        //we are selling half of the corn so we'll only want half of the corn from its output
        if (plant.type === "Corn") {
            /* therefore we'll need to iterate a certain amount of times (i) so we'll start by setting i = 0
            iterate only until (the plant object's output property divided by 2) is reached
            at the end of each iteration, increase i by 1 */
            for (let i = 0; i < (plant.output / 2); i++) {
                //for each iteration, push the corn object to the previously defined empty plantYields array
                plantYields.push(plant)
            }
        //else the plant object's type property should be one of the other crops
        //in that case, we'll want a plant added for each of the plants' amount of output
        } else {
            /* iterate a certain amount of times (j) when j = 0
            iterate only until the plant object's output is reached
            at the end of each iteration, increase j by 1 */
            for (let j = 0; j < plant.output; j++) {
                //for each iteration, push the plant object to the previously defined plantsYields array
                plantYields.push(plant)
            }
        }
    }

    //return the now filled plantsYields array
    return plantYields
}
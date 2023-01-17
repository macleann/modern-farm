import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"

console.log("Welcome to the main module")

//declares a new variable called yearlyPlan that invokes and stores the createPlan function
const yearlyPlan = createPlan()

//declares a new variable that invokes and stores the result of the plantSeeds function with the yearlyPlan variable passed as an argument
//the result is invoking the usePlants function, which returns a copy of an array
//the original array that was copied was filled by the addPlant function and was also invoked in the body of the plantSeeds function
const plants = plantSeeds(yearlyPlan)

//declares a new food variable that invokes and stores the harvestPlants function with the previously declared plants variable passed as an argument
const food = harvestPlants(plants)

//declares a new catalogHTMLElement variable that calls the querySelector method with the argument of ".container", which is a CSS class in our index.html file
const catalogHTMLElement = document.querySelector(".container")

//declares a property of .innerHTML that stores and invokes the Catalog function with the previously declared food variable passed as an argument
catalogHTMLElement.innerHTML = Catalog(food)
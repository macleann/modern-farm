//export a newly defined function that accepts harvestedFood as a parameter
export const Catalog = (harvestedFood) => {
    //declare a new variable that can be added to in the future by using let
    let catalogHTMLMaker =
        //begin by letting the string begin with the opening <main> html tag with the appropriate class of "container"
        `<main class="container">`

    //iterate through each food of the harvestedFood parameter
    for (const food of harvestedFood) {
        /* for each food, add a string to the previously defined variable
        the string will contain an opening <section> tag with the class of "plant"
        then it will interpolate the food's type property
        lastly the string will end with a closing </section> tag */
        catalogHTMLMaker += `<section class="plant">${food.type}</section>`
    }
    
    //after all of the iterations have finished, the html string should be completed with the closing </main> tag
    catalogHTMLMaker += `</main>`

    //finally, return the variable containing all of our html
    return catalogHTMLMaker
}
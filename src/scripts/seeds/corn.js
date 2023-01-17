//export a newly defined function to create corn objects
export const createCorn = () => {
    //define an array that holds two identical corn objects with the appropriate properties
    const CornArray = [
        {
            type: "Corn",
            height: 180,
            output: 6
        },
        {
            type: "Corn",
            height: 180,
            output: 6
        }
    ]
    //return the array
    return CornArray
}
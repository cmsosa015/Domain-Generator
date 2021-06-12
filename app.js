// console.log("Any string");

const arr1 = ['the', 'le', 'our', 'her']
const arr2 = ['grand', 'royal', 'gold', 'great']
const arr3 = ['ballroom', 'bathtub', 'rug', 'globe']

function domain() {
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2[i].length; j++) {

            for (b = 0; b < arr3[i][j].length; b++)
        }
    }

    let compiled= [arr1+arr2+arr3]

    document.querySelector(".domainhere").innerHTML = compiled ; 
}








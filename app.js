// console.log("Any string");

const arr1 = ['the', 'le', 'our', 'her']
const arr2 = ['grand', 'royal', 'gold', 'great']
const arr3 = ['ballroom', 'bathtub', 'rug', 'globe']


function array() {
    for (let i = 0; i < arr1.length; i++) { 

        for ( let j = 0; j < arr2.length; j++) { 

            for ( let b = 0; b < arr3.length; b++) { 
                // console.log(arr1[i] + arr2[j] + arr3[b] + ".com");
                let domain = document.createElement('P')
                domain.innerText = arr1[i] + arr2[j] + arr3[b] + ".com" 
                document.querySelector(".domainhere").appendChild(domain)

            }
        }
     }
 }



    









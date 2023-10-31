//create a prompot 
// log prompt 
//split logg into array
const logOfFlavors = prompt(
    `Enter the flavors you would like to order. Please seperate by commas. `,
    `vanilla,vanilla,vanilla,strawberry,coffee,coffee`
).split(`,`)
//create object to collect array data 
let flavors = {}
logOfFlavors.data = flavors 
//create loop for object 
for (let i =0; i < logOfFlavors.length; i++){
if (!flavors[logOfFlavors[i]]){ 
    flavors[logOfFlavors[i]] = 1; 
}else{
    flavors[logOfFlavors[i]] += 1
}

}
console.log(flavors)


//  const flavors = {}
// for(i=0; i < logOfFlavrs.length; i++)
// if (!stringArray[i]){
//     flavors[i] += 1
// }




// if(!stringArray[i]){
//     logOfFlavors[i]=1
// }


//put numbers in to string array 

// for (let i=0; i<stringArray.length;i++){
//     const str = stringArray[i]
    
// }


// console.log(logOfFlavors)



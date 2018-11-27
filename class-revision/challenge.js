//get every nth element in an given array 
// let arrayGet= [1,2,3,4,5,6];



// function getArray(arrayGet,n){
//     let tempArray=[];

//         for(let i=n-1;i<arrayGet.length;i+=n){
//             tempArray.push(arrayGet[i]);
//         }
       
//         return tempArray;
    

// } 

// console.log(getArray(arrayGet,2));


// ES6 fat arrow
// throw an error if either number is not a number
// catch that error outside of the function and log it to the console
// also throw an error for division by 0
// function divide (x,y) {

// } 

// function checkNum (x,y) {
    
//         if((typeof x !=="number") || (typeof y !== "number")) throw "not a number";
//         if(y===0) throw "divisoin by 0";

//         return x/y;

   
// }

// try {
//     checkNum(6,"3")

// }catch (error) {
//     console.log(error);
// }

//Write a function that separates a string of comma separated values into an array without using .split()
//

//Create a Runner class that has the properties, name, distance and place
//Create a method that adds distance to an instance of runner and modifies their place and the other runners places
//Create a method on the Runner class that shows the names of the runners in order from first place to last

//solution to the first 
let myString = "garret,tom";
let tempString ="";
let stringArray=[];

for(let i=0;i<=myString.length;i++){
    
    
    if(myString[i]=== "," || i ===myString.length){
        stringArray.push(tempString);
        tempString="";
        
        
        // console.log(tempString);
    } else if(myString[i]!==",") {


        tempString +=myString[i];
    }


};

console.log(stringArray);
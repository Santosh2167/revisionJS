//get every nth element in an given array 
let arrayGet= [1,2,3,4,5,6];



function getArray(arrayGet,n){
    let tempArray=[];

    // if (n===2){

        for(let i=n-1;i<arrayGet.length;i+=n){
            tempArray.push(arrayGet[i]);
        }
        // console.log(tempArray);
        return tempArray;
    // }
    // tempArray= arrayGet.filter(item => (arrayGet.indexOf(item)%(n-1) ===0));

    console.log(tempArray);

    // for(let i=0;i<arrayGet.length;i++) {

    //     console.log(`${i} divide by ${n}:`+ i%(n-1));

    //     if (i%(n-1)===0){
            
    //         tempArray.push(arrayGet[i]);

    //     }
    // }

    // console.log(tempArray);

} 
// console.log(arrayGet);

console.log(getArray(arrayGet,2));


// ES6 fat arrow
// throw an error if either number is not a number
// catch that error outside of the function and log it to the console
// also throw an error for division by 0
// function divide (x,y) {

// } 

function checkNum (x,y) {
    
        if((typeof x !=="number") || (typeof y !== "number")) throw "not a number";
        if(y===0) throw "divisoin by 0";

        return x/y;

   
}

try {
    checkNum(6,"3")

}catch (error) {
    console.log(error);
}
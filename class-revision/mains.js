let heading = document.querySelector(".heading");
heading.textContent = "Hooked"

// write a JS function that returns the min and max values in a Array. Only Number CountQueuingStrategy, return value in array (min,max)

// let myArray = [10,6,3,8,5];

let myArray = ["33",5,1];
//let myArray = [100,-3,-1000];
let temp = [];


// console.log(temp);


function sortArray(myArray) {

    for (let i=0;i<myArray.length;i++) {
    
        if (typeof myArray[i]==="number"){
            temp.push(myArray[i]);
        }
    
    }

    // console.log(temp);
        return temp.sort(function(a,b) {return a-b});
}

let tempArray=[];
let answerArray =[];

tempArray = sortArray(myArray);

answerArray.push(Math.min.apply(null,myArray));
answerArray.push(Math.max.apply(null,myArray))

// answerArray.push(tempArray[0]);
// answerArray.push(tempArray[tempArray.length-1]);

 
console.log(answerArray);


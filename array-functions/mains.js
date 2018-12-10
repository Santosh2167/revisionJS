let heading = document.querySelector(".heading");
heading.textContent = "Hooked"

//**************************** *New Method => Array.from

// Array.from(arrayLike, mapFn,thisArg)
//returns new Array Instance
//Makes new array from Array Like object and Iterable Objects(objects where you can get its element 
  //  such as Map, Set)
//   Array.from() has an optional parameter mapFn, which allows you to execute a map function 
//   on each element of the array (or subclass object) that is being created. More clearly, 
//   Array.from(obj, mapFn, thisArg) has the same result as Array.from(obj).map(mapFn, thisArg), 
//   except that it does not create an intermediate array. This is especially important for certain array 
//   subclasses, like typed arrays, since the intermediate array would necessarily have values truncated 
//   to fit into the appropriate type.

// The length property of the from() method is 1.

// Example:
// tempArray = Array.from("FOO");
// console.log(tempArray);

// let s = new Set(["foo",window]);

// tempArray = Array.from(s);

//Example:
// let a = [[1,2],[2,4],[4,5]];

// let v = new Map(a);
// console.log (Array.from(v));

// console.log(Array.from(v.values()));

// console.log(Array.from(v.keys()));

// Example:
// function f() {
//     return Array.from(arguments);

// }

// console.log(f(1,2,3,4));

//Example:
// console.log(Array.from([1,2,3],x=>x+2));

//***************New Method
//isArray = checks if the parameter is array or not
// let tempArray = {1,2,3};

// console.log(Array.isArray(tempArray));

//*******************New Method Array.concate(Array1);

// The concat() method is used to merge two or more arrays. 
// This method does not change the existing arrays, but instead returns a new array.

// let A = [1,2,3];
// let B = [4,5,6];

// let C = A.concat(B);

// console.log(C);
// *****************New Method => Array.map


// The map() method creates a new array with the results of calling a provided 
// function on every element in the calling array.

// A. callback function takes three arguments 
// 1. Current Value = the current element being processed in the array
// 2. Index = index of the current element being processed in the array
// 3. array = the array map was called upon 
// B. this arg = Value to use as this when executing callback

// Returns a new array

//map does not mutate the array it is called upon
//Signs you shouldn't be using map: A) You're not using the array it returns, and/or
// B) You're not returning a value from the callback.



//***************** New Method => Array.filter
// The filter() method creates a new array with all elements that pass the 
// test implemented by the provided function.

// var word =["sant","poudyal","class"];

// const result = word.filter(item => {
//   word.length >6
// })

// Parameters
// A. Callback function
//  Function is a predicate, to test each element of the array. Return true to keep the element, 
//  false otherwise. It accepts three arguments:

//   element: the current element being processed

//   index: Index of current element being processed

//   array: The array filter was called upon

// B. thisArg 
//   Value to use this when executing callBack

//   Array element that does not pass callback function test is simply skipped

//   If a thisArg parameter is provided to filter, it will be used as the callback's this value. 
//    Otherwise, the value undefined will be used as its this value. 

//*************************************************New Method => Array.some()

// The some() method tests whether at least one element in the array passes the test 
// implemented by the provided function.
   
// parameters:
// callback: test items by taking three elements
//   element: the current element being processed in the Array
//   index: index of current element being processed
//   array: the array some() was called upon
//   thisArg: Vaue to use as this when executing the callback function 

// return value: true if callback function returns truthy value of any array otherwise, false

//********************************************** New Method => find()
// The find() method returns the value of the first element in the array 
// that satisfies the provided testing function. Otherwise undefined is 
// returned.

// It is different from filter as filter returns an array that satisfies the 
// condition given in the function. Whereas find returns just a element.

// parameters

// callback function:
//  element: The current element being processed
//  index: Index of the current element being processed 
// array: The array find was called upon
// thisArg: Object to use a this when executing callback

// Returns:
// Value of the first element that satisfies the provided function 
// otherwise, undefined is returned  

// const inventory = [
//   {name: 'apples', quantity: 2},
//   {name: 'bananas', quantity: 0},
//   {name: 'cherries', quantity: 5},
//   {name: 'cherries', quantity: 6}
// ];

// const result = inventory.find( fruit => fruit.name === 'cherries' );

// console.log(result) // { name: 'cherries', quantity: 5 }

// var inventory = [
//   {name: 'apples', quantity: 2},
//   {name: 'bananas', quantity: 0},
//   {name: 'cherries', quantity: 5}
// ];

// function isCherries(fruit) { 
//   return fruit.name === 'cherries';
// }

// console.log(inventory.find(isCherries));

//******************************************** New Method 

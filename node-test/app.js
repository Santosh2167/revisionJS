// let a =1;
// let b =2;

// console.log(a+b);

// setTimeout(()=>console.log("ran"));

const fs = require("fs");

const myLodash = require("./lodash");


// fs.appendFile("node.txt","Hello There!",(err)=>{
//     if(err) throw err;
//     console.log("File was created");
// });

// const contents = fs.readFileSync("node.txt","utf-8");
// console.log(contents);

// function random() {
//     console.log("my random function");
//     return Math.random();
// }

// function times(a,callback){
//     console.log("My Times Function")

//     for(let i=0;i<a;i++){
//         callback(i+1);
//     }
// })

console.log(myLodash.random());

myLodash.times(2,i =>{
    console.log(`${i} iteration`);
})
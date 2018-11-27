const fs = require("fs");

function random() {
    console.log("my random function");
    return Math.random();
}

function times(a,callback){
    console.log("My Times Function")

    for(let i=0;i<a;i++){
        callback(i+1);
    }
}

module.exports = {
    random,
    times
}



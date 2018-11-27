let heading = document.querySelector(".heading");
heading.textContent="Promise Again";

// document.querySelector("button").addEventListener("click",getJokes);

// function getJokes () {
//     alert("till here");

//     let url = "https://api.chucknorris.io/jokes/random";

//     $.get(url,(joke1)=>{
//         $.get(url,(joke2)=>{
//             $.get(url,(joke3)=>{
//                 $.get(url,(joke4)=>{
//                     $.get(url,(joke5)=>{
//                         let jokeArray =[
//                             joke1.value,
//                             joke2.value,
//                             joke3.value,
//                             joke4.value,
//                             joke5.value
//                         ];
//                         console.log(jokeArray);

//                     });
//                 });
//             });
//         });
//     });


// }

// let x=2;
// let y=5;

// let calculation = new Promise((resolve,reject) => {
//     let answer = x+y;

//     if(isNaN(answer)){
//         reject("input needs to be a number");
//     }

//     resolve(answer);

// });

// calculation
//     .then(data=>{
//         console.log(data);
//     })
//     .catch(error =>{
//         console.log(error);
//     });

//     console.log(1);

//let us add a layer of abstraction >> make a function return a promise

let x=5;
let y=2;
function adder (x,y){
    return new Promise((resolve,reject)=>{
            let answer=x+y;

            if(isNaN(answer)){
                reject("invalid input");
            }
            resolve(answer);
    })
}

// adder(2,3)
//     .then(data=>{
//         console.log(data);
//     })
//     .catch(error =>{
//         console.log(error);
//     })

// adder(2,3)
//     .then(answer1=>{
//         adder(answer1,4)
//             .then(answer2=>{
//                 adder(answer2,5)
//                     .then(answer3 =>{
//                         console.log(answer3);
//                     })
//                     .catch(error =>{
//                         console.log(error);
//                     })
//             })
//             .catch(error =>{
//                 console.log(error);
//             })
//     })
//     .catch(error =>{
//         console.log(error);
//     })

    //WE CAN PUT ONLY ONE CATCH STATEMENT IN ABOVE CODE
    //answer to the promise hell is promise chaining. 
    //we can chain the promise if they return a promise.
    adder(2,5)
    .then(data =>{
        return(adder(data,4));
    })
    .then(answer2 =>{
        return adder(answer2,5);
    })
    .then(answer3 =>{
        console.log(answer3);
    })
    .catch(error =>{
        console.log("error");
    });
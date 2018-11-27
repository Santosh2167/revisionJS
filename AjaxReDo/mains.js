let heading = document.querySelector(".heading");
heading.textContent = "Ajax Re Do";

document.querySelector("button").addEventListener("click",getUserData);

// function getUserData() {
//     console.log("starting our request ");

//     let request = new XMLHttpRequest();
//     request.open('GET',"https://randomuser.me/api",true);
//     request.onload = () => {
//         if(request.status>=200 && request.status <=400) {
//             console.log(request.responseText);
//         } else {
//             console.log("Error");
//             console.log(request);
//         }
//     }
//     request.onerror = ()=>{
//         console.log("Connection Error");
//     }

//     request.send();
// }
//*********************************
//recreating the same function
//********************************* 

// function getUserData() {
//     console.log("starting request");
//     $.ajax({
//         url:"https://randomuser.me/api",
//         type:"GET",
//         success: (data) => {
//             console.log(data);
//         },
//         error: (error) => {
//             console.log("Error");
//             console.log(error);
//         }
//     })
// }

function getUserData() {
    console.log("starting request");
    $.ajax({
        url:"http://localhost:3000/students.json",
        type:"POST",
        data: {student: {nam:"santosh",location: "Brisbane"}},
        success: (data) => {
            console.log(data);
        },
        error: (error) => {
            console.log("Error");
            console.log(error);
        }
    })
}
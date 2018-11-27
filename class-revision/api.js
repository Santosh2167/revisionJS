let myLink = document.querySelector("#size-12");

myLink.addEventListener("click", getDataFromAPI);

function getDataFromAPI() {

        let getData = new XMLHttpRequest();

        getData.open("GET","https://randomuser.me/api",true);

        getData.onload= ()=>{
            if(getData.status >= 200 && getData.status <=400){
                console.log(getData.responseText);
            } else {
                console.log("error")
                console.log(getData)
            }


        };

        getData.onerror = () =>{
            console.log("error in the connection");
        }

        getData.send();
    }

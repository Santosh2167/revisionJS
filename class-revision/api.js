let myLink = document.querySelector("#size-12");

myLink.addEventListener("click", getDataFromAPI);

function getDataFromAPI() {


        let getData = new XMLHttpRequest();
        let apiData;

        getData.open("GET","https://randomuser.me/api",true);

        getData.onload= ()=>{
            if(getData.status >= 200 && getData.status <=400){
                    apiData = (getData.responseText);
                    // console.log(apiData);
                    displayData(apiData);
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

    function displayData(apiData) {
        console.log("at Display: " +apiData);
    }

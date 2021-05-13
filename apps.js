//Phoenix norvell
var i=0;// attemept to have muli-cards
document.getElementById("laod").addEventListener("click", function(){// waiits for f to be clicked
load();//repetitive
    httptRequest.open("get",`https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById("Name").value},us&units=imperial&appid=d6345df871d7eba88b9731bd11d4d041`)//gets the info   farinhite
    load2();//repetitive

})
document.getElementById("c").addEventListener("click", function(){// waits
    load()//repetitive
    httptRequest.open("get",`https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById("Name").value},us&units=metric&appid=d6345df871d7eba88b9731bd11d4d041`)//gets the info  metric
    load2()//repetitive
}//function

);

function useApi()
            {
              
               start();//set up
                    var ex = /^[0-9]{5}$/;// reg ex that make sure that there are 5 nums in the text box returns a true false
                    if(ex.test(document.getElementById("Name").value) == false)// if false
                    {
                        document.getElementById(`name${i}`).innerHTML = "ERROR"// title
                        document.getElementById(`description${i}`).innerHTML = "Zip"//why
                    }
               else if (manObj.cod == 400||document.getElementById("Name").value ==" "||manObj.cod == 404)//lots if other errors
                {
                    document.getElementById(`name${i}`).innerHTML = "ERROR" // title
                    document.getElementById(`description${i}`).innerHTML = manObj.message// what is wrong
                   // document.getElementById("welp").toggleAttribute("ERROR" , true )// an attempt to make the  text box red
                    

                }
                else{// means no errors
                    
                   
                    document.getElementById(`map${i}`).src =" http://openweathermap.org/img/wn/"+ manObj.weather[0].icon +"@2x.png"// img
                    document.getElementById(`name${i}`).innerHTML = manObj.name +"  " +manObj.sys.country// the conrtry  and city name cuase it doent log the state
                    document.getElementById(`description${i}`).innerHTML =manObj.weather[0].description + "<br/><p> Feels like</p>"+ manObj.main.feels_like // description and the feel like temp
                    //document.getElementById("welp").toggleAttribute("ERROR" , false )// an attempt if was an error to show they fixed it
     
                    
                    
                }

    
     
                }
          
function start(){// smaller part
    var moonMan = httptRequest.responseText;// it gets the response witch is a long JSON String
    manObj = JSON.parse(moonMan);// It makes man Obj an Obj
   console.log(manObj)// helps
 
   document.getElementById("card").innerHTML = ` <div class="card" class="col" style="width: 18rem;">
        <img src="x.png" class="card-img-top" alt="..." id="map${i}">
        <div class="card-body">
        <h5 class="card-title" id="name${i}">Card title</h5>
        <p class="card-text"id="description${i}">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div></div>`// makes a card
}
function load(){
    document.getElementById("card").innerHTML  = ` `//clear
    httptRequest = new XMLHttpRequest;// makes  an instince  of the class
}
function load2()
{
    httptRequest.send();//sends info
    httptRequest.onreadystatechange = useApi;//calls the function
}
//Phoenix norvell
var i=0;
document.getElementById("laod").addEventListener("click", function(){
    document.getElementById("card").innerHTML  = ` `
    httptRequest = new XMLHttpRequest;// makes  an instince  of the class
    httptRequest.open("get",`https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById("Name").value},us&units=imperial&appid=d6345df871d7eba88b9731bd11d4d041`)//gets the info  from space devs  astonut section and gets 5
httptRequest.send();//sends info
    httptRequest.onreadystatechange = useApi;}

);
document.getElementById("c").addEventListener("click", function(){
    document.getElementById("card").innerHTML  = ` `
    httptRequest = new XMLHttpRequest;// makes  an instince  of the class
    httptRequest.open("get",`https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById("Name").value},us&units=metric&appid=d6345df871d7eba88b9731bd11d4d041`)//gets the info  from space devs  astonut section and gets 5
    httptRequest.send();//sends info
    httptRequest.onreadystatechange = useApi;}

);

function useApi()
            {
              
                var moonMan = httptRequest.responseText;// it gets the response witch is a long JSON String
                manObj = JSON.parse(moonMan);// It makes man Obj an Obj
               console.log(manObj)
               document.getElementById("card").innerHTML = ` <div class="card" class="col" style="width: 18rem;">
                    <img src="x.png" class="card-img-top" alt="..." id="map${i}">
                    <div class="card-body">
                    <h5 class="card-title" id="name${i}">Card title</h5>
                    <p class="card-text"id="description${i}">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div></div>`
                    var ex = /^[0-9]{5}$/;
                    if(ex.test(document.getElementById("Name").value) == false)
                    {
                        document.getElementById(`name${i}`).innerHTML = "ERROR"
                        document.getElementById(`description${i}`).innerHTML = "Zip"
                    }
               else if (manObj.cod == 400||document.getElementById("Name").value ==" "||manObj.cod == 404)
                {
                    document.getElementById(`name${i}`).innerHTML = "ERROR"
                    document.getElementById(`description${i}`).innerHTML = manObj.message
                    document.getElementById("welp").toggleAttribute("ERROR" , true )
                    

                }
                else{
                    
                   
                    document.getElementById(`map${i}`).src =" http://openweathermap.org/img/wn/"+ manObj.weather[0].icon +"@2x.png"
                    document.getElementById(`name${i}`).innerHTML = manObj.name +"  " +manObj.sys.country
                    document.getElementById(`description${i}`).innerHTML =manObj.weather[0].description + "<br/>"+ manObj.main.feels_like
                    document.getElementById("welp").toggleAttribute("ERROR" , false )
     
                    
                    
                }

    
     
                }
          

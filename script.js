window.onload = function () {
    let token,long,lati,tid=0;
   
    let frontPage = 
    `<h1><b>Please login</b></h1>
    User Name <input type="text" id="userName"><br>
    Pass Word <input type="text" id="password"><br>
    <button type="button" id="lbut">Login</button>`;

    let secondPage = `
     <Div id="gioId"></Div>
    <textarea id="anima" cols="80" rows="20"></textarea> 
    <button id="refid">Refresh Animation</button>
    <button id="getApi">LogOut</button>`
   

    let myfirestPage = document.getElementById("outlet")
    myfirestPage.innerHTML = frontPage;

    let loginButen = document.getElementById("lbut");
    loginButen.addEventListener('click', forMySecondpage);

   

    function forMySecondpage() {

        myfirestPage.innerHTML = secondPage;
  
        seclogBuf()
        refreshCl();
        toupdatelocation()
        

    }
    function seclogBuf() {
        let loginBu = document.getElementById("getApi");
        loginBu.addEventListener('click', function () {
            myfirestPage.innerHTML = frontPage
        });

    }

    function refreshCl() {
        //let textarP = document.getElementById("anima")
        let refBu = document.getElementById("refid");
        refBu.addEventListener('click',getFeach);
    }
    
    function fetchatOne() {
        fetch("http://mumstudents.org/api/login",
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: "mwp",
                    password: "123"
                })
            })
            .then(res => res.json())
            .then(data => {token=data.token;
                
                getFeach() })
            }
        function getFeach() {
            clearInterval(tid);
            fetch("http://mumstudents.org/api/animation", {
                method: 'GET',
                headers: { "Authorization": `Bearer ${token}` }

            })
                .then(res => res.text())
                .then(data => {
                    aniData = data.split("=====\n")

               
                    let count=0;               
                    tid=setInterval(function(){
                      document.getElementById("anima").innerHTML=aniData[count];
                    ++count;
                    if(count==aniData.length){
                        count=0}
                    },200)
                           
                })
                

        }

function gioLocation(){
    console.log(long)
    console.log(lati)
    fetch(`http://www.mapquestapi.com/geocoding/v1/reverse?key=vhWCTTt1Zi5UypzejKx3B4rGTDLNxhkb&location=${lati},${long}`)
    .then(res=>res.json())
    .then(data=>{ let location=data.results[0].locations[0];
               console.log(location)
                           
    let ividlocation=document.getElementById("gioId")
    ividlocation.innerHTML=`<h3> Welcome all from ${location.adminArea5},${location.adminArea3},${location.adminArea1}!</h3>`
    });
}

 function toupdatelocation(){
 
     navigator.geolocation.getCurrentPosition(success, fail);
  
   
   
    function success(position) {
        long= position.coords.longitude ;
        lati= position.coords.latitude ;
        gioLocation();

        }
        function fail(msg) {
        console.log(msg.code + msg.message); r
        }
        onpopstate = function() {
            alert("location: " + document.location + ", state: " + JSON.stringify(event.state))
          }
          
          history.pushState({page: 1}, "title 1", "?page=1")
          history.pushState({page: 2}, "title 2", "?page=2")
          history.replaceState({page: 3}, "title 3", "?page=3")
          history.back() 
          history.back() 
          history.go(2)
      
 }
 
   fetchatOne()


}

    
 
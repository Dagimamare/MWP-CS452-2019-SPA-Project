window.onload = function () {

    let frontPage = `<h1><b>Please login</b></h1>
    User Name <input type="text" id="userName"><br>
    Pass Word <input type="text" id="password"><br>
    <button type="button" id="lbut">Login</button>`;

    let secondPage = `<textarea id="anima" cols="80" rows="20"></textarea> 
    <button id="refid">Refresh Animation</button>
    <button id="getApi">LogOut</button>`
     
    let myfirestPage=document.getElementById("outlet")
    myfirestPage.innerHTML=frontPage;

    let loginButen = document.getElementById("lbut");
    loginButen.addEventListener('click',forMySecondpage);
    


    function forMySecondpage() {

        myfirestPage.innerHTML = secondPage;

        seclogBuf();
        refreshCl();

   }
    function seclogBuf() {
        let loginBu = document.getElementById("getApi");
        loginBu.addEventListener('click', function () {
            myfirestPage.innerHTML = frontPage
        });

    }

    function refreshCl() {
        let textarP = document.getElementById("anima")
        let refBu = document.getElementById("refid");
        refBu.addEventListener('click', function () {
        textarP.innerHTML = aniData;
        })
    }
 
    function fetchatOne() {
        fetch("http://mumstudents.org/api/login",
        {
                    method: 'POST', 
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify({ username: "mwp",
                     password:"123"})
        })
        .then(res=>res.json())
        .then(data => {fetch("http://mumstudents.org/api/animation",{
                        method: 'GET', 
                        headers: {"Authorization": `Bearer ${data.token}` }
                    
            })
            .then(res=>res.text())
            .then(data=>{
                aniData=data.split("=====")
                console.log(data)
            })
      
      })
    }
  
    fetchatOne();
  

}

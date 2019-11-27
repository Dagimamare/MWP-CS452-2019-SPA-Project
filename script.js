window.onload = function () {
let frontPage = `<h1><b>Please login</b></h1>
    User Name <input type="text" id="userName"><br>
    Pass Word <input type="text" id="password"><br>
    <button type="button" id="lbut" onclick="main()">Login</button>`;

    let secondPage = `<textarea id="outlet" cols="80" rows="20"></textarea> 
    <button id="refid">Refresh Animation</button>
    <button id="getApi">LogOut</button>`

    let myfirestPage = document.getElementById("outlet")
     myfirestPage.innerHTML = frontPage;

    let loginButen = document.getElementById("lbut")
    loginButen.addEventListener('click', forMySecondpage);


    function forMySecondpage() {
        //psot mete


        myfirestPage.innerHTML = secondPage
        seclogBuf()

    }
    function seclogBuf() {
        let loginBu = document.getElementById("getApi");
        loginBu.addEventListener('click',function(){
       myfirestPage.innerHTML = frontPage});
       
    }


}


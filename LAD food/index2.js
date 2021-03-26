function login(){
    let input_email = document.getElementById("username").value;
    let input_password = document.getElementById("password").value;
    let caseblock = document.getElementById("checkCase");

    let listEmail = JSON.parse(localStorage.getItem("listUsers"));
    let listPassword = JSON.parse(localStorage.getItem("listPassword"));

    for(let i = 0;i<listEmail.length && i< listPassword.length; i++){
        if(input_email == listEmail[i] && input_password ==listPassword[i]){
        index = i
        console.log(index)
        localStorage.setItem("listEmail", index)
        console.log("sign in suc")
        caseblock.innerHTML = "sign in suc"
        caseblock.style.color= "green"
        location.replace("Home.html")

        }
        else{       
        console.log("error")
        caseblock.innerHTML = "fail"
        caseblock.style.color ="red"
    }
    
    }
}
function loadfunction(){
    if (localStorage.getItem("listEmail")!= null){
        let user = JSON.parse(localStorage.getItem("listEmail"));
        let username = JSON.parse(localStorage.getItem("listUsername"));
        document.getElementById("demo").innerHTML= username[Number(user)]
        document.getElementById("demo1").innerHTML= "welcome"   
    };

}
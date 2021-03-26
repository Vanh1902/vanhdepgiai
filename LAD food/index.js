function signup() {
    let input_email = document.getElementById("email").value
    let input_name = document.getElementById("name").value
    let input_password = document.getElementById("password").value


    let caseblock = document.getElementById("checkCase")

    let listUsers = [];
    let listPassword = [];
    let listUsername = [];
    let isaccountExist = false;
    if (JSON.parse(localStorage.getItem("listUsers") != null)) {
        listUsers = JSON.parse(localStorage.getItem("listUsers"))
    }
    if (JSON.parse(localStorage.getItem("listPassword") != null)) {
        listPassword = JSON.parse(localStorage.getItem("listPassword"))
    }
    if (JSON.parse(localStorage.getItem("listUsername") != null)) {
        listUsername = JSON.parse(localStorage.getItem("listUsername"))
    }


    if (input_email == "" || input_password == "" || input_name == "") {
        console.log("ERROR")
        caseblock.innerHTML = "Sign up fail"
        caseblock.style.color = "red"
    }
    else {
        for (let i = 0; i < listUsers.length; i++) {
            if (input_email == listUsers[i]) {
                console.log("ERROR")
                caseblock.innerHTML = "account already have"
                caseblock.style.color = "red"
                isaccountExist = true
            }
        }

        if (email.value.includes("@gmail") == true) {
            if (!isaccountExist) {
                listUsers.push(input_email);
                listPassword.push(input_password);
                listUsername.push(input_name);

                localStorage.setItem("listUsers", JSON.stringify(listUsers))
                localStorage.setItem("listPassword", JSON.stringify(listPassword))
                localStorage.setItem("listUsername", JSON.stringify(listUsername))

                console.log("SUCCESFUL")
                caseblock.innerHTML = "Sign up sucess"
                caseblock.style.color = "green" 
                location.replace("login.html")
            }


        }
    }

}
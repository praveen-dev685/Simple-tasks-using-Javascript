let username = document.getElementById("username");
let password = document.getElementById("password");
let email = document.getElementById("email");
let confirmPassword = document.getElementById("confirm-password");
let customError = document.querySelectorAll(".error");

function Username(username) {
    let userverify = username.value.trim();
    if (userverify !== "") {
        username.style.border = "2px solid green";
        customError[0].innerHTML = "";
    }
    else {
        username.style.border = "2px solid red";
        customError[0].innerHTML = "Username is Invalid !!!";
    }
}

function Email(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValues = email.value.trim();
    if (emailValues === "") {
        email.style.border = "2px solid red";
        customError[1].innerHTML = "Email is Invalid !!!";
    }
    else if (!emailPattern.test(emailValues)) {
        email.style.border = "2px solid red";
        customError[1].innerHTML = "Email is Invalid Format !!!";
    }
    else {
        email.style.border = "2px solid green";
        customError[1].innerHTML = "";
    }
}
function Pass(password) {
    let passValues = password.value.trim();
    if (passValues !== "")
        if (passValues.length > 6) {
            customError[2].innerHTML = "Password is strong"
            customError[2].style.color = "green";
            password.style.border = "2px solid green";
        }
        else {
            customError[2].innerHTML = "Password is weak"
        }
    else {
        customError[2].innerHTML = "Password is Invalid";
        password.style.border = "2px solid red";
    }
}

function Conpassword(confirmPassword) {
    let valueCheck = confirmPassword.value.trim();
    let passData = document.getElementById("password").value.trim();
    if (valueCheck === "") {
        confirmPassword.style.border = "2px solid red";
        customError[3].innerHTML = "Confirm Password is Invalid !!!";
    }

    else if (passData === "") {
        customError[3].innerHTML = " Password is Invalid so Please enter the Password!!!";
    }
    else if(valueCheck === passData){
        confirmPassword.style.border = "2px solid green";
        customError[3].innerHTML = "";
    }
    else {
        customError[3].innerHTML = "Confirm Password is Mismatched !!!";
        confirmPassword.style.border = "2px solid red";
    }
}

function submit() {
    Username(username);
    Email(email);
    Pass(password);
    Conpassword(confirmPassword)
}


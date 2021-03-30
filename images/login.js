let email = document.getElementById("inputEmail");
let pass = document.getElementById("inputPassword");
let error = document.getElementById("errorid");
let error1 = document.getElementById("errorno");

function loginvalidation() {
    let emailexp = /^([\w\.-]+)@([\w\.-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    let passexp =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$/
    let phoneexp =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if (emailexp.test(email.value)||(phoneexp.test(email.value))) {

        error1.innerHTML = "Welcome"
        error1.style.color = "green";

        if(passexp.test(pass.value)){
            error.innerHTML = "Login Successful"
            error.style.color = "green";
            return true;
        }
        else{
            error.innerHTML = "Invalid Password.Try Again"
            error.style.color = "red";
            return false;
        }

    } else {
        error1.innerHTML = "Invalid Phone Number/Email.Try Again"
        error1.style.color = "red";
        return false;
    }

}

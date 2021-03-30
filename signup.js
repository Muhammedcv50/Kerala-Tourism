let mail = document.getElementById("inputemail");
let mailerr = document.getElementById("errormail");
let num = document.getElementById("inputnumber");
let phoneerror = document.getElementById("errorphone");
let pass1 = document.getElementById("inputpassword");
let pass2 = document.getElementById("inputpassword2")
let passerror = document.getElementById("errorpass")
let error = document.getElementById("error");
let strenght = document.getElementById("strenght");
var passac = false;
var pass2ac = false;
var mailac = false;
var phoneac = false;


var str = ["Bad", "Meh..", "Good"]
var color = ["Red", "Yellow", "Green"];

function phonevalid() {
    let phoneexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phoneexp.test(num.value)) {
        phoneerror.innerHTML = "Accepted";
        phoneerror.style.color = "green";
        phoneerror.style.fontSize="small"
        phoneac = true;s
        return true;
    } else {
        phoneerror.innerHTML = "Not a valid number";
        phoneerror.style.color = "red";
        phoneerror.style.fontSize="small"
        phoneac = false
        return false;
    }
}

function passstrenght() {
    var passstrenght = 0;
    let passexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$/
        // morethan8 1
    let str1 = /^(?=.{8,})$/
        //lowercase&upercase 2
    let str2 = /^(?=.*[a-z])(?=.*[A-Z])$/
        // Numeric_Char 3
    let str3 = /^(?=.*[0-9])(?=.*[0-9])$/
        // spclchar 4
    let str4 = /^(?=.*[!@#$%^&*])$/
    if (str4.test(pass1.value)) {
        passstrenght = (passstrenght + 1) % 3;
        strenght.innerHTML = str[passstrenght];
        strenght.style.color = color[passstrenght];
        pass1.style.color = color[passstrenght];
        return true;
    } else if (str3.test(pass1.value)) {
        passstrenght = (passstrenght + 1) % 3;
        strenght.innerHTML = str[passstrenght];
        strenght.style.color = color[passstrenght];
        pass1.style.color = color[passstrenght];
        return true;
    } else if (str2.test(pass1.value)) {
        passstrenght = (passstrenght + 1) % 3;
        strenght.innerHTML = str[passstrenght];
        strenght.style.color = color[passstrenght];
        pass1.style.color = color[passstrenght];
        return true;
    } else if (passexp.test(pass1.value)) {
        passstrenght = 2;
        strenght.innerHTML = str[passstrenght];
        strenght.style.color = color[passstrenght];
        pass1.style.color = color[passstrenght];
        return true;
    } else {
        passac = false;
        strenght.innerHTML = str[passstrenght];
        strenght.style.color = color[passstrenght];
        pass1.style.color = color[passstrenght];
        return false;
    }
}

function checkpass() {
    if (pass1.value == pass2.value) {
        pass2.style.color = "green";
        passerror.innerHTML = "accepted";
        passerror.style.color = "green";
        passerror.style.fontSize = "small";
        pass2ac = true;
        return true;
    } else {
        pass2.style.color = "red";
        passerror.innerHTML = "passwords not matching";
        passerror.style.color = "red";
        passerror.style.fontSize = "small";
        pas2b = false;
        return true;
    }
}

function mailvalid() {
    let emailexp = /^([\w\.-]+)@([\w\.-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if (emailexp.test(mail.value)) {
        mailerr.innerHTML = "Accepted";
        mailerr.style.color = "green";
        mailerr.style.fontSize = "small";
        mailac = true;
        return true;
    } else {
        mailerr.innerHTML = "Invalid email";
        mailerr.style.color = "red";
        mailerr.style.fontSize = "small";
        mailac = false;
        return false;
    }

}

function signupvalid() {
    if (phoneac && mailac) {
        if (passac && pass2ac) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
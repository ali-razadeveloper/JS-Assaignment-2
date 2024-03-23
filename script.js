// clear input box 
document.getElementById("clearInputBtn").onclick = function () {
    document.getElementById("input-box").innerHTML = " "
}

// clear output box 
document.getElementById("clearOutputBtn").onclick = function () {
    document.getElementById("output-box").innerHTML = " "
}


// concatenation 
document.getElementById("concatenation").onclick = function () {

    let message = "Assalam-o-Alaikum"
    let userName = "Ali Raza"
    let sum = (message + " " + userName)
    document.getElementById("input-box").innerHTML = '<p>"Assalam-o-Alaikum" + " " + "Ali Raza"</p>'
    document.getElementById("output-box").innerHTML = sum;
}


// ask name from user
document.getElementById("askName").onclick = function () {
    let firstName = prompt("please enter your first name.")

    if (firstName == null || firstName.length < 3) {
        alert("please enter you name correctly.")
    }
    else {
        let lastName = prompt("please enter your last name.")
        let fullName = '{firstName} {lastName}'
        document.getElementById("input-box").innerHTML = 'first name = {firstName} <br> last name = {lastName} <br> full name = first name + last name'
        document.getElementById("output-box").innerHTML = 'full name = {fullName}'
    }
}


// comparison operator
document.getElementById("comparisonOperator").onclick = function () {
    let num1 = +prompt("please enter first number.")
    let num2 = +prompt("please enter second number.")
    if (num1 === num2) {
        document.getElementById("input-box").innerHTML = "num1 !==num2"
        document.getElementById("output-box").innerHTML = "<span claas='text-success'>Condition is true &#128552;<span/>"
    }

    else {
        document.getElementById("input-box").innerHTML = "num1 !== num2"
        document.getElementById("output-box").innerHTML = "<span class='text-danger'>Condition is false &#128552;</span>"
    }
}



// if else if
document.getElementById("ifElseIf").onclick = function () {
    document.getElementById("input-box").innerHTML = " ";
    let marks = prompt("please enter your marks")
    if (marks >= 100) {
        document.getElementById("output-box").innerHTML = "<span class='text-success'>Congratulations! you got A+ Grade</span>"
    }

    else if (marks >= 80) {
        document.getElementById("output-box").innerHTML = "<span class='text-success'>Congratulations! you got A Grade</span>"
    }
    else if (marks >= 70) {
        document.getElementById("output-box").innerHTML = "<span class='text-warning'>B+ Grade</span>"
    }
    else if (marks >= 40) {
        document.getElementById("output-box").innerHTML = "<span class='text-fail'>You are a failure</span>"
    }



}

// sets Of Conditions
document.getElementById("setsOfConditions").onclick = function () {
    document.getElementById("input-box").innerHTML = " ";
    let age = prompt("please enter your age")
    let weight = prompt("please enter your weight")
    if (age <= 10 && weight <= 25) {
        document.getElementById("output-box").innerHTML = "you are a baby."
    }
    else if (age <= 18 && weight <= 50) {
        document.getElementById("output-box").innerHTML = "you are teenager and healthy."
    }
    else if (age <= 30 && weight <= 65) {
        document.getElementById("output-box").innerHTML = "you are a youngman."
    }
    else if (age <= 40 && weight <= 75) {
        document.getElementById("output-box").innerHTML = "you are a youngman and healthy."
    }
    else {
        document.getElementById("output-box").innerHTML = "you are a Senior Citizen and fatty."
    }

}



// if statement nested

document.getElementById("ifStatementNested").onclick = function () {
    let userName = prompt("please enter user name")
    if (userName === "Ali Raza") {
        let password = prompt("please enter password")
        if (password == 123) {
            document.getElementById("output-box").innerHTML = "<span style='color:green; text-transform:capitalize;'>you are successfully logged in</span>"
        }
        else {
            document.getElementById("output-box").innerHTML = `<span class='text-danger'>${password}</span> is incorrect password. <br> correct password is <span class='text-success'>123</span>`
        }
    }
    else {
        document.getElementById("output-box").innerHTML = `<span class='text-danger'>${userName} </span> is incorrect user name. <br> correct user name is <span class='text-success'> "Ali Raza"</span>`
    }
}

// login
document.getElementById("login").onclick = function () {
    document.getElementById("input-box").innerHTML = " ";
    let userName = prompt("please enter username")
    let passWord = +prompt("please enter password")
    if (userName === "Ali Raza" && passWord === 123) {
        document.getElementById("form").innerHTML = `<span style='color:green; font-weight:bold;'>${userName}</span>`
        document.getElementById("output-box").innerHTML = `<span style='color:green; text-transform:capitalize;'>you are successfully logged in</span>`
    }
    else {
        document.getElementById("output-box").innerHTML = "Try again login Ali Raza as username and 123 as a password."
    }

}
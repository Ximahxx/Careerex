//CODE FOR QUESTION 1
//Function that takes a student’s score and logs "Passed" if it’s 180 and above, else logs "Failed"
function jamb_grade (score) {
    if (score >= 180) {
        document.getElementById('output1').innerHTML = 'Passed'
        console.log("Passed")
    } else {
        document.getElementById('output1').innerHTML = 'Failed'
        console.log("Failed")
    }
}


//CODE FOR QUESTION 2
//Function that accepts an age and returns "You are eligible to vote" if the age is 18 or above, otherwise "Not eligible"
function eligibility(age) {
    if (age >= 18) {
        document.getElementById('output2').innerHTML = 'You are eligible to vote'
        console.log("You are eligible to vote")
        return("You are eligible to vote")
    } else {
        document.getElementById('output2').innerHTML = 'Not eligible'
        console.log("Not eligible")
        return("Not eligible")
    }
}


//CODE FOR QUESTION 3
//function that takes a name and score, then returns:
// "Excellent" if score >= 90
// "Good" if score >= 75
// "Average" if score >= 50
// "Fail" otherwise
var c = "Susan"
function grade (name, score) {
    if (score >= 90) {
        document.getElementById('output3').innerHTML = 'Excellent'
        return("Excellent")
    } else if(score >= 75) {
        document.getElementById('output3').innerHTML = 'Good'
        return("Good")
    } else if (score >= 50) {
        document.getElementById('output3').innerHTML = 'Average'
        return("Average")
    } else {
        document.getElementById('output3').innerHTML = 'Fail'
        return("Fail")
    }
}


//CODE FOR QUESTION 4
//function that takes two boolean values: hasID and isAbove18. Return "Access granted" only if both are true
function accessibility (hasID, isAbove18) {
    if (hasID === true && isAbove18 === true) {
        document.getElementById('output4').innerHTML = "Access granted"
        console.log("Access granted")
        return ("Access granted")
    }else {
        document.getElementById('output4').innerHTML = "Access denied"
        console.log("Access denied")
        return ("Access denied")
    }
}


//CODE FOR QUESTION 5
const array = [Math.floor(Math.random()*100), Math.floor(Math.random()*100),  Math.floor(Math.random()*100),  Math.floor(Math.random()*100),  Math.floor(Math.random()*100)]
for (let i = 0; i < array.length; i++) {
    document.getElementById("question5").innerHTML += array[i];
    document.getElementById("question5").innerHTML += " ";

}
console.log(array)
//for loop that goes through an array of student scores.
//For each score, prints "Pass" if it’s above 50 or "Fail" if it’s 50 or below
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
    if (array[i] > 50) {
        document.getElementById("output5").innerHTML += " Pass";
        console.log("Pass")
    } else {
        document.getElementById("output5").innerHTML += " Fail";
        console.log("Fail")
    }
    
}


//CODE FOR QUESTION 6
//Arrow function that returns "Yes" if a student passed both Math and English (score ≥ 50), else "No"
const mathEngGrade = (mathScore, engScore) => {
    if (mathScore >= 50 && engScore >= 50) {
        document.getElementById('output6').innerHTML = "Yes"
        console.log("Yes")
        return ("Yes")
    } else {
        document.getElementById('output6').innerHTML = "No"
        console.log("No")
        return ("No")
    }
}


//CODE FOR QUESTION 7
//Function that checks if a user has either an email or a phone number before signing up
function checkUserInfo(hasEmail, hasNumber) {
    if (hasEmail == true || hasNumber == true) {
        signUp();
    }
    else {
        document.getElementById('output7').innerHTML = "You can not sign up!"
        console.log("You can not sign up")
    }
}
function signUp() {
    document.getElementById('output7').innerHTML = "You can sign up now!"
    alert ("You can sign up now!")
    console.log("You can sign up now!")
}


//CODE FOR QUESTION 8
//Function that takes username and password
// If either one is empty, returns "Invalid input" using the || operator
function loginValidity(username, password) {
    if (username == "" || password == "") {
        document.getElementById('output8').innerHTML = "Invalid input"
        console.log("Invalid input")
        return ("Invalid input")
    } else {
        document.getElementById('output8').innerHTML = "Valid input"
        console.log("Valid input")
        return ("Valid input")
    }
}


//CODE FOR QUESTION 9
//function that accepts hours worked
// If hours ≥ 40, returns "Full-time", else "Part-time" using a ternary operator
function jobType (hoursWorked) {
    return (hoursWorked >= 40) ? "Full-time" 
    :  (hoursWorked < 40) ? "Part-time"
    : ""
}
function jobTypeOutput(hours) {
    const z = jobType(hours)
document.getElementById('output9').innerHTML = z
console.log(z)    
}



//CODE FOR QUESTION 10
//Arrow function that takes two numbers and returns the larger one
var max = (num1, num2) => {
    if (num1 > num2) {
        document.getElementById('output10').innerHTML = num1 + " is larger"
        console.log(num1 + " is larger")
        return num1
    } else {
        document.getElementById('output10').innerHTML = num2 + " is larger"
        console.log(num2 + " is larger")
        return num2
    }
}

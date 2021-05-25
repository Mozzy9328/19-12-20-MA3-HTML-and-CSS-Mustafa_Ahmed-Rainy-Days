var IntegerValue = 8;
var DecimalValue = 4.5;

console.log(IntegerValue);
console.log(DecimalValue);

// Working Days 
var WorkingDays = "Mon" + "-" + "Tue" + "-" + "Wed" + "-" + "Thurs" + "-" + "Fri"

console.log(WorkingDays);

var addition = (5 + 5)
console.log(addition)

var subtraction = (5 - 5)
console.log(subtraction)

var multiplication = (5 * 5)
console.log(multiplication)

var division = (5 / 5)
console.log(division)

var boolean = false 
console.log(boolean)

var text ="The frogs are angry";

var textLength = text.length;

console.log(text)
console.log(textLength)

var time_elapsed = "timeElapsed"
console.log(time_elapsed)

var number1 = "53";
var number2 = "44.6";

console.log(number1)
console.log(number2)

var number1integer1 = parseInt(number1)
console.log(number1integer1)

var number1integer2 = parseFloat(number2)
console.log(number1integer2)

var pet = "donkey";
var age = 89;
var discountApplied = true;
var timeLeft;

console.log(typeof pet)
console.log(typeof age)
console.log(typeof discountApplied)
console.log(typeof timeLeft)


var UpdatingVariable = document.querySelector("h1")

UpdatingVariable.innerHTML = "Welcome Mustafa"


var ChangeBackground = document.querySelector("body")


ChangeBackground.style.backgroundColor = "blue"

var hiddeimage = document.querySelector("body")

hiddeimage.style.backgroundImage = display = "none"


var firstNumber = 94;
var secondNumber = 89;

// Question 1 Lesson 3
if(firstNumber < secondNumber){
console.log("The first number is smaller than the second");}
else{ 
console.log("Error");
} 

// Question 2 Lesson 3

var age = 11;
var minimumAge = "13";

if(age == parseInt(minimumAge)){
    console.log("Meet the requirements")
}
else{
    console.log("Does not meet the requirement")
}

// Question 3 Lesson 3

var income = "11.050";
var maximumIncome = "13.075";

if(parseFloat(income) === parseFloat(maximumIncome)){
    console.log("Meet the requirements")
}
else{
    console.log("Does not meet the requirement")
}

// Question 4 Lesson 3

var studentAge = 20

if(studentAge >= 6)
if(studentAge <= 13) {
    console.log("Barneskole");
}
else if (studentAge >= 14)
if(studentAge <= 16){
    console.log("Ungdomsskole")
}
else if (studentAge >= 17)
if(studentAge <= 19){
    console.log("Videregående skole")
}
else if(studentAge > 19){
    console.log("Invalid age")
}

// Question 5 Lesson 3

var colour = "blue";

if ((colour === "orange")) {
    console.log("This colour is a bit rubbish");
}

// Question 6 Lesson 3
var invoicePaid = true;

if(invoicePaid === false){
    console.log("Not Paid")
}
else{
    console.log("Paid")
}

// Question 7 Lesson 3
var selectedNumber = 15;
var winningNumber = "15";

if(selectedNumber === parseInt(winningNumber)){
    console.log(true)
}

// Question 8 Lesson 3
var dayOfTheWeek = 8;

switch(dayOfTheWeek){
    case 1:{
        console.log("Monday")
        break;
    }
    case 2:{
        console.log("Tuesday")
        break;
    }
    case 3:{
        console.log("Wednesday")
        break;
    }
    case 4:{
        console.log("Thursday")
        break;
    }
    case 5:{
        console.log("Friday")
        break;
    }
    case 6:{
        console.log("Saturday")
        break;
    }
    case 7:{
        console.log("Sunday")
        break;
    }
    default: {
        console.log("Invalid day number")
        break;
    }
}

// Question 1 Lesson 4
for (var i = 0; i <= 7; i++){
    console.log(i)
}

// Question 2 Lesson 4 

for (var i <= 10; i > 0; i++)
{
    console.log(i)
}
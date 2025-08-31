// SOURCE SCALAR 

// Understanding basics 
console.log("Hii From VS Code")

// Variables in jS 
var  a  = 20
var greet = "Hello"
console.log(a , greet)

// Arrays in JS 
// provides you ordered collection of numbers 
var arr = [12, "Navv", true, false , 12.5]
console.log(arr)

// accesing the elements 
var a = arr[0] // using indexing 
console.log(a)
arr[0]="012" // replacing the values 
console.log(arr)

// Inbuilt js array methds 

var arr2 = [2,12,23,45,56]
console.log(arr2.pop() , "Popped array")
arr2.push(100)
console.log(arr2 , "pushed array")
arr2.shift()
console.log(arr2 , "shifted array - simply removes the 0th index element")
arr2.unshift(101)
console.log(arr2 , "unshift will add a value at the 0th index")

console.log()
//Objects in JS 
// Unordered collection of key value pairs , each key value pari is called a property

var person ={
    firstName :  "Adam",
    secondName : "Smith",
    age :26


}
console.log(person)

//accesing particular values from the objects 

//dot notation
console.log(person.age) 
// bracket nitation
console.log(person["secondName"]) // pass the key inside []

console.log()

// objects inside a object 

var cap = {
    firstName : "Steve",
    secondName : "Rogers",
    friends : ['Bucky barnes' , 'Scarlet' , 'Tony stark'],
    address :{
        state : "New York",
        city : {
            name : 'Brookyln' , 
            pincode : 1234567
        }
    }

}
console.log(cap.friends[1])
console.log(cap.address.city.name)

console.log()

// Conditionals in JS 
// if ,  if else , else-if

var myScore = 23

if(myScore > 90){
    console.log("Yayy got my Bicycle")

}

else{
    console.log("Oops didn't get this time")
}

// 90 to 100 - A
// 70 to 89 - B
// 50 to 69 - C
// lower than 50 - F

var studentScore = 10
if (studentScore>90){
    console.log("Student has Scored A grade")
}
else if (studentScore>=70 && studentScore <=89){
    console.log("Student has Scored B grade")

}
else if (studentScore>=50 && studentScore <=69){
    console.log("Student has Scored c grade")

}
else {
    console.log("OOPS FAILED - Student has Scored F grade")

}
console.log()

// Loops - are statemnets that we can use to contraol the flow of a program & do some repeatitive task

var a = "Hello Word"
 // the for loop

for(var i = 1;i<=10 ;i++){
    console.log(a , i)
}
// you have an array & to sqaure each eleemnt of that array
var x = [1,2,3,4,5,6,7,8]
var squaredArr = []
for(var i = 1 ; i<x.length; i++){
    squaredArr.push(x[i]*x[i])
}
console.log(squaredArr)

console.log()

// The while loop
//- evaluates consdition inside the parenthesis ()
//- runs till the condition is true
var i = 1
var n = 10
 while(i<=n){
    console.log(i)
    i++
 }
console.log()

// do while 
j = 5
do {
    console.log(j)
    j++
}while(j<=n)

console.log()

// for in loop in JS 
let candidate = { name: "Nav", age: 25, city: "Delhi" };

for (let key in candidate) {
  console.log(key, ":", candidate[key]);
}

//Functions in JS

function greets(){
    console.log("Hiee Good Evening..!!!!!!")
}

greets()

function add(x,y){
    console.log(x+y)
}
add(3,4)

// function as an expression

var a = function(x,y,z){  //anonymous function - does not have any name 
    console.log(x+y+z)
}
a(10,30,60)

console.log()

//Hoisting
//Hoisting means JavaScript moves declarations to the top of the scope before running the code.
// ~ move declaration over top 

console.log(t)
prep()


var t = 21

function prep(){
    console.log("Welcome to scalar")
}

//execution context ~ imaginary container contaions 
// memory phase (memory phase ) ~ a : undefined { key value pairs }
// fn : greet
// code execution ~ 



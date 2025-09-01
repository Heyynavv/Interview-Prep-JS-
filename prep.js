

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

// ES ~ Ecma Script
// Problems with variables declared with VAR
// variables declared with var are not  blocked scoped they are  function scoped 

// VAR ~ Redeclaration - yes  / Reassignemnt - yes  / Scoping  - function scoped
// LET  ~ Redeclaration - no   / Reassignemnt - yes  / Scoping  - blocked scoped 
// CONST ~ Redeclaration- no   / Reassignemnt - no   / Scoping  - blocked scoped 




// ARROW functions 

let test1 = () => {
    console.log(1)
}
let test2 = a =>{
    console.log(a*2)
}
let test3 = (a , b) =>  {
    console.log(a+b)
}

test1()
test2(2)
test3(2,6)

//Template literal & multi line strings
console.log(`This
    is
    Template
    Lieral`)

a = 34
console.log(`My age is ${a}`)

// Destructuring arrays

let destruc = ['Hi' , 'I' , 'AM' , 'Navv']
var [ a , b , c , d] = destruc
console.log(d)

// Call back functions 

// function passed into another function as an argument 

function printFistName(firstName , cb){
    console.log(firstName)
    cb("Rogers")
}

function printLastName(lastName){
    console.log(lastName)
}

printFistName("Steve" , printLastName)

// OOPS 

// 4 pillars 
// Encapsulation / abstraction / polyformism , inheritance 

// This keyword in JS ~ refers to object executing the current function
// reference a particular object 

console.log(this) // refers to empty object

function display(){
    console.log(this)  // refers to global object 
}

display()

let obj = {
    name : 'nAV',
    age : 23,

    myfn : function(){
        console.log(this) // function isnide obj referes to object itsef 
    }
}
obj.myfn()

// Constructor function ~ 


function createCar(name , company , color){
    this.name = name
    this.company = company
    this.color = color

}

let car1 = new createCar('X4' , 'B&W' , 'red')

console.log(car1)

// Classes in JS 

class Person {
    constructor(name , age ){
        this.name =name
        this.age = age
    }

    welcome(){
        console.log(` Welcome ${this.name}`)
    }
}


let Person1 = new Person("Harry" , 22)
console.log(Person1)
Person1.welcome()

// Inheritance

// Base class
class Personx {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Derived class
class Teacher extends Person {
  constructor(name, age, classStrength) {
    super(name, age); // Call parent constructor
    this.classStrength = classStrength;
  }
}

// Another derived class
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);  // Call parent constructor
    this.grade = grade;
  }
}

// Creating objects
let person1 = new Personx("Adam", 23);
let teacher1 = new Teacher("Mark", 40, 100);
let student1 = new Student("Sara", 19, "A");

// Logs
console.log(person1);
console.log(teacher1);
console.log(student1);

console.log()
// Asynchronous Programming
// Synchronous ~ means it will use a single thread , so only one operation will run at a time
// Asynchronous ~ non blocking , means it will send multiple requests to a sever at a time


// set timeout 


// setTimeout(() => {
//     console.log("Hello from the setTimeout")
// }, 5000);


// setInterval(() => {
//     console.log("Hello from the setInterval")
    
// }, 1000);

// Prmoises in JS 
// A Promise is like a container for a future value.
// It can be in one of three states:
// Pending  (still working)
// Resolved / Fulfilled (successful)
// Rejected ( failed )

// let myPromise = new Promise((resolve, reject) => {
//   resolve(" Hello, Promise!");
// });

// myPromise.then(result => {
//   console.log(result); // prints: Hello, Promise!
// });

// Miscellaneous Topics

let q = 2
let w = '2'
console.log(q==w) // go for values 
console.log(q===w) // go for datatype too



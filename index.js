# operator

let a = 12; 
let  b = 25; 

result = a & b; 
console.log(result); // 8 

// bitwise OR operator example
let a = 12; 
let  b = 25; 

result = a | b; 
console.log(result); // 29

// bitwise XOR operator example
let a = 12; 
let  b = 25; 

result = a ^ b; 
console.log(result); // 21

// bitwise NOT operator example
let  b = 12;

result = ~b;

console.log(result); // -13

let a = 12; 
let  b = 25; 

var a=10;
console.log(a);
var b=10;
function fun()
{
    var b=20;
    console.log(b);
}
console.log(b);
fun();


var c=100;
{
    var c=200;
}
console.log(c);
function fun()
{
    var c=300;
    console.log(c);
}
fun();
let a=20;

function fun()
{
    let a=40;
    console.log(a);
}
fun();
let d=100;
function fun()
{
    let d=200;
    console.log(d);
}
fun();


const a=100;
a=200;
console.log(a);
const g=100;

console.log(g);


let age=18;

switch(true)
{
    case (age<18):
    console.log("noob player");
    case (age>18):
    console.log("pro player");
    case (age=18):
        console.log("dono taraf sai pitega tum");
    default:
        console.log("not eligible");
}



let day=5;
switch(day)
{
    case 0:
    console.log("monday");
    break;
    case 1:
    console.log("tuesday");
    break;
    case 2:
    console.log ("wednesday");
    break;
    case 3:
    console.log("thursday")
    break;
    case 4:
    console.log("fri");
    break;
    default:
    console.log("sunday fun  day");
    break;
}

   
 let gender= "m";
 switch(gender){
    case "m":
        console.log("male");
         break;
    case "f":
         console.log("female");
        break;
    default:
        console.log("transgender");
        break;        
 }

//Q2
 let age= 7;
 switch(true){
     case age<18:
        console.log("Child");
         break;
   case 18<age<=40:
         console.log("Adult");
         break;
     default:
         console.log("Old Age");
         break;        
 }

//Q3
 let day= 3;
 switch(day){
    case 0:
        console.log("Monday");
         break;
     case 1:
         console.log("Tuesday");
         break;
     case 2:
         console.log("Wednesday");
        break;
     case 3:
        console.log("Thursday");
         break;
    case 4:
         console.log("Friday");
         break;
     case 5:
         console.log("Saturday");
        break;  
     default:
         console.log("Invalid Input");
         break;        
 }


// Q4
 for (let i = 1; i <= 10; i++) {
     console.log(i);;
   }

//q5
 for (let i = 1; i <= 10; i++) {
    console.log("19*" + i +"="+ 19*i);;
   }

// let sum=0;
// for(let i=1; i<=5; i++){
//     sum+=i;
// }
// console.log("sum of n numbers:", sum);

/////////////////////////////////////////////////////////////


// For-of loops are used in string and arrays


// let str = "javascript";

// let size = 0;
// for(let i of str){
//     console.log("i=", i);
//     size++;
// }

// console.log("string size", size);

////////////////////////////////////////////////////////////////


// for-in loop


// let student = {
//     name : "Usman",
//     age : 20,
//     cgpa : 2.9,
//     isPass : true,
// }

// for(let key in student){
//     console.log("key=",key, "value=", student[key]);
// }


///////////////////////////////////////////////////////////////////
// Print all even numbers from 0 to 100

// let even;
// for (let i=0; i<=100; i++){
//     if(i%2==0){
//         console.log(i, "is even.");
//     }
//     else{ 
//         console.log(i, "is odd.")
//     }
// }



///////////////////////////////////////////////////////////////////////
//Create a game where you start with any random game number. Ask the user to keep guessing
// the number until the user enters the correct number.

let num = prompt("Please guess the number:");
let num2=25;

while(num!=num2){
    num = prompt("you entered wrong, Please Guess again: ");
    }
    
console.log("congratulations, you have guessed the correct number.")




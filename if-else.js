// let num = prompt("Enter a number.");

// if(num%5==0){
//     console.log(num, "is the multiple of 5.")
// }

////////////////////////////////////////////////////////////////////

let marks = prompt("Please enter your marks:");
let grade;

if(marks >= 80){
    grade = "A";
}
else if(marks >=70 && marks < 79){
    grade = "B";
}
else if(marks >= 60 && marks < 69){
    grade = "C";
}
else{
    grade = "F";
}

console.log("grade is:",grade);
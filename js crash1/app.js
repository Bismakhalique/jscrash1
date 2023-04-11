//<QUESTION 1>////


let number1 = prompt("Enter the 1st number:");
let number2 = prompt("Enter the 2nd number:");

if (number1 > number2) {
  console.log(number1 + " is larger than " + number2);
} else if (number2 > number1) {
  console.log(number2 + " is larger than " + number1);
} else {
  console.log("The two numbers are equal");
}

//<QUESTION 2>///


let num = prompt("Enter a number:");

if (num > 0) {
  alert("The sign is +");
} else if (num < 0) {
  alert("The sign is -");
} else {
  alert("The number is zero.");
}
 

//<QUESTION 3>///


var num1 = prompt("Enter number 1:");
var num2 = prompt("Enter number 2:");
var num3 = prompt("Enter number 3:");
var num4 = prompt("Enter number 4:");
var num5 = prompt("Enter number 5:");

var max = num1;

if(num2 > max) {
  max = num2;
}

if(num3 > max) {
  max = num3;
}

if(num4 > max) {
  max = num4;
}

if(num5 > max) {
  max = num5;
}

console.log("The largest number is: " + max);
 

//<QUESTION 4>///


for(let i = 0; i <= 15; i++) {
  if(i % 2 === 0) {
    document.write(i + " is even" + "<br>");
  } else {
    document.write(i + " is odd" + "<br>");
  }
}
//<QUESTION 6>///




for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      document.write("FizzBuzz<br>");
    } else if (i % 3 === 0) {
      document.write("Fizz<br>");
    } else if (i % 5 === 0) {
      document.write("Buzz<br>");
    } else {
      document.write(i + "<br>");
    }
  } 
  
  
  
  //<QUESTION 7>///
  
  
  
  for (let i = 1; i <= 5; i++) {
      let line = '';
      for (let j = 1; j <= i; j++) {
        line += '* ';
      }
      console.log(line);
    }


//<QUESTION 5>///

const marks = [70, 85, 92, 60, 78, 80, 95, 67, 75, 84];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}

const average = sum / marks.length;

let grade;

if (average < 60) {
  grade = "F";
} else if (average < 70) {
  grade = "D";
} else if (average < 80) {
  grade = "C";
} else if (average < 90) {
  grade = "B";
} else {
  grade = "A";
}

console.log(`The average mark is ${average}, which corresponds to a grade of ${grade}`);


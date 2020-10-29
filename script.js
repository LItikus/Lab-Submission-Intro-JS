//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."

let jobTitle = "CEO";
let geoLocation = "Canada";
let salary = "$200000";
let compName = "Tik Tok";

console.log(`You will be a ${jobTitle} in ${geoLocation}, making ${salary} for ${compName}`);

document.getElementById("ex1").innerHTML=`You will be a ${jobTitle} in ${geoLocation}, making ${salary} for ${compName}`;


//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.

let year = parseInt(new Date().getFullYear());
let byear = 1992;

console.log(`They are ${year-byear} years old.`);

document.getElementById("ex2").innerHTML = `They are ${year-byear} years old.`;

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".

let curAge = 20;
let maxAge = 100;
let dailyConsumtion = 10;

let totalStock = (maxAge - curAge) * dailyConsumtion;

console.log(`You will need ${totalStock} to last you until the ripe old age of ${maxAge}`);

document.getElementById("ex3").innerHTML = `You will need ${totalStock} to last you until the ripe old age of ${maxAge}`;

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

let radius = 3;
let circumference = 2*Math.PI*radius;
let area = Math.PI*radius*radius;

console.log(`The circumference is ${circumference}. The area of the circle is ${area}`);

document.getElementById("ex4").innerHTML = `The circumference is ${circumference}. The area of the circle is ${area}`;

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let celTemp = 32;
let convF = Math.round(celTemp * 9 / 5 + 32);
let farTemp = 90;
let convC = Math.round((farTemp-32)*5/9);

console.log(`${celTemp}°C is ${convF}°F. ${farTemp}°F is ${convC}°C.`);

document.getElementById("ex5").innerHTML = `${celTemp}°C is ${convF}°F. ${farTemp}°F is ${convC}°C.`;


// Exercise 6
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(n){
  return (n*n);
}

let num = 4;

console.log(`The result of squaring the number ${num} is ${squareNumber(num)}.`);

document.getElementById("ex6").innerHTML = `The result of squaring the number ${num} is ${squareNumber(num)}.`;


//Exercise 7
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber(n){
  return (n/2);
}

let num1 = 5;

console.log(`Half of ${num1} is ${halfNumber(num1)}`);

document.getElementById("ex7").innerHTML = `Half of ${num1} is ${halfNumber(num1)}.`;

//Exercise 8
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(n,m){
  return (Math.round((n/m)*100*100)/100);
}

let n=2,m=4;

console.log(`${n} is ${percentOf(n,m)}% of ${m}.`);

document.getElementById("ex8").innerHTML = `${n} is ${percentOf(n,m)}% of ${m}.`;

//Exercise 9
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle(n){
  return (Math.round(Math.PI*n*n*100)/100);
}

let rad = 2;

console.log(`The area for a circle with radius ${rad} is ${areaOfCircle(rad)}.`);

document.getElementById("ex9").innerHTML = `The area for a circle with radius ${rad} is ${areaOfCircle(rad)}.`;



// Exercise 10
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result.
//      3. Calculate the area of a circle with the result of #2 as the radius.
//      4. Calculate what percentage that area is of the squared result (#3).
function god(n){
  let half = halfNumber(n);
  let square = squareNumber(half);
  let area = areaOfCircle(square);
  let percent = percentOf(square , area);

  console.log(`Half of the number ${n} is ${half}. The square of half is ${square}. The area of circle with the radius ${square} is ${area}. ${square} is ${percent}% of ${area}.`);

  document.getElementById("ex10").innerHTML = `Half of the number ${n} is ${half}. The square of half is ${square}. The area of circle with the radius ${square} is ${area}. ${square} is ${percent}% of ${area}.`;
}

god(5);

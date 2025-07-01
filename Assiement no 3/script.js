// Q1
// ● Declare a variable using var outside of any function or block.
// ● Declare a variable using let outside of any function or block.
// ● Declare a variable using const outside of any function or block.
// ● Log all three variables to the console.
// ● Are they accessible globally?

// var a = "var";

// let b = "let";

// const c = "const";

// console.log(a,b,c);



// Q2
// ● Create a function and declare a variable using var inside the
// function.
// ● Declare a variable using let inside the function.
// ● Declare a variable using const inside the function.
// ● Try to log all three variables to the console outside the function.
// ● What do you observe?

// let check = () => {
//     var d = "var";

//     let e = "let";

//     const f = "const";
// }

// console.log(d,e,f);

// main nai ya observe kiya kai yaha errore a raha hai kyu kai variable globly nahi declar huwai is liyai errore a raha hai kai d is not define


// Q3
// ● Use an if statement and declare a variable using var inside the
// block.
// ● Declare a variable using let inside the block.
// ● Declare a variable using const inside the block.
// ● Try to log all three variables to the console outside the block.
// ● What do you observe?

// if(true){
//     var varVariable = "Var Variable";

//     let letVariable = "let Variable";

//     const constVariable = "const Variable";
// }

// console.log(varVariable);
// console.log(letVariable);
// console.log(constVariable);

// main nai yaha observe kiya kai var se delare variable a raha hai console.log main lekin const our let main nahi error a raha hai

// Q4
// ● Write code where you log a var variable before it is declared.
// ● What value do you get?

// console.log(city);


// var city = "karachi";

// The valu is undefine 



// Q5

// ● Write code where you log a let variable before it is declared.
// ● Write code where you log a const variable before it is declared.
// ● What kind of error do you get?

// console.log(age);

// let age = 16;

// console.log(fullName);

// const fullName = "Muhammad Yameen Dadu";

// The error is Not access before initilization 


// Q6

// ● Try to declare the same variable name twice using var.
// ● Try to declare the same variable name twice using let.
// ● Try to declare the same variable name twice using const.
// ● What happens in each case?

// var sameVar = "var1";

// var sameVar = "var2";

// let sameLet = "let1"; 

// let sameLet = "let2"; syntax error

// const sameConst = "const1";

// const sameConst = "const2";   syntax errorr


// Q7

// ● Declare a variable using var and assign it a value. Then reassign it a
// new value.
// ● Declare a variable using let and assign it a value. Then reassign it a
// new value.
// ● Declare a variable using const and assign it a value. Then reassign it
// a new value.
// ● What happens in each case?

// var h = 20;

// h = 30;

// console.log(h);

// var allow kertta hai resiengment 

// let g = 40;

// g = 50;

// console.log(g);

// let aloww kerta hai resiagnment 

// const j = 70;

// j = 80;

// console.log(j);

// const allow nahi kerta reassign 


// Q8

// ● Declare a let variable inside a block but try to log it before the
// declaration.
// ● Declare a const variable inside a block but try to log it before the
// declaration.
// ● What error do you get? Why?

// {
//     console.log(x);
//     let x = "let Variable";
// }

// {
//     console.log(y);
//     const y = "const Variable";
// }

// Cannot access 'x , y' before initialization yai error ayga  

// Q10

// ● Create variables for a person's first name and last name.
// ● Use a template literal to create a full name string and log it to the
// console.

// let firstName = "Muhammad",lastName = "Yameen";

// console.log(`My Name is ${firstName} ${lastName}`);


// Q11

// ● Use a template literal to create a multi-line string (e.g., an address) and
// log it to the console.

// let myIntroduction = `
// Yameen
// A / 157
// Karachi`;

// console.log(myIntroduction);

// Q12
// ● Create variables for two numbers.
// ● Use a template literal to create a string that includes the sum of the
// numbers.
// ● Log the string to the console.

// let num1 = 30;

// let num2 = 20;

// let sum = num1 + num2;

// console.log(`The sum of ${num1} and ${num2} is ${sum}`);

// Q13

// ● Create a function that takes two numbers and returns their product.
// ● Use a template literal to call this function inside a string and log the
// result to the console.

// let sum = (a,b) =>{
//     return a * b;
// }

// let multiply = sum(3,5);

// console.log(`The multiply of two numbers is ${multiply}`);

// Q14
// ● Write a simple tag function that takes a template string and logs it.
// ● Use this tag function with a template literal.

// let tag = (naam,city) =>{
//     console.log(`Maira naam ${naam} hai our main ${city} main rahta hu`);
// }

// tag("yameen","karachi")

// Q15

// ● Write a tag function that formats a string by making it uppercase.
// ● Use this tag function with a template literal and log the result.

// let myName = (naam) =>{
//     let result = naam.toUpperCase() 
//     console.log(`My Name is ${result}`)
// }

// myName("yameen")

// Q16

// let currentHour = new Date().getHours();

// let massage = `Good ${currentHour < 12 ? "morning" : "afternooon"}`;

// console.log(massage);

// Q18

// ● Create a string that includes a backtick character using a template
// literal.
// ● Log the string to the console.


// let massage = `This is a Backtick : \``;

// console.log(massage);

// Q20

// let age = 16;

// let canVote = age >= 18 ? "yes" : "no";

// console.log(canVote);

// Q21

// ● Create a variable number.
// ● Use the ternary operator to assign a variable evenOrOdd the value
// "Even" if number is even, and "Odd" if it's odd.
// ● Log evenOrOdd to the console.

// let number = 8;

// let find = (number % 2 === 0) ? "even" : "odd";

// console.log(find);

// Q22

// Create a variable score.
// Use the ternary operator to assign a variable grade based on the following conditions:
// ● "A" if score is 90 or above.
// ● "B" if score is 80 or above.
// ● "C" if score is 70 or above.
// ● "D" if score is 60 or above.
// ● "F" otherwise.
// Log grade to the console.


// let score = 85;


// let grade = score >= 90 ? "A" :
//             score >= 80 ? "B" :
//             score >= 70 ? "C" :
//             score >= 60 ? "D" : "F";


// console.log(grade);

// Q23

// ● Create a variable isLoggedIn.
// ● Use the ternary operator and logical operators to assign a variable
// statusMessage the value "Welcome back!" if isLoggedIn is true,
// and "Please log in" if isLoggedIn is false.
// ● Log statusMessage to the console.

// let isLoggedIn = true;

// let massage = isLoggedIn ? "Welcome back" : "Please Login in";

// console.log(massage);

// Q25

// ● Create a function maxValue(a, b) that returns the larger of the two
// numbers using the ternary operator.
// ● Call the function with two numbers and log the result.


// let maxValue = (a,b) => {
//     return a > b ? a : b;
// }

// console.log(maxValue(10,15));

// Q27

// ● Create an array of numbers.
// ● Use the map method with a ternary operator to create a new array
// where each number is doubled if it is even and tripled if it is odd.
// ● Log the new array to the console.

// let numbers = [1,2,3,4,5];

// let result = numbers.map(numbers => numbers % 2 === 0 ? numbers * 2 : numbers *3 );

// console.log(result);

// Q29

// ● Create an array originalArray with some elements.
// ● Use the spread operator to create a copy of originalArray called
// copiedArray.
// ● Log both arrays to the console to verify they are the same but not the
// same reference.


// let originalArray = [1, 2, 3, 4, 5];


// let copiedArray = [...originalArray];


// console.log(originalArray);
// console.log(copiedArray);


// console.log(originalArray === copiedArray);

// Q30

// ● Create two arrays array1 and array2.
// ● Use the spread operator to create a new array mergedArray that
// combines the elements of array1 and array2.
// ● Log mergedArray to the console.

// let arr1 = [1,2,3,4,5];

// let arr2 = [6,7,8,9,10];

// let marrgendArr = [...arr1,...arr2];

// console.log(marrgendArr);

// Q32

// ● Create an array numbers with some elements.
// ● Use the spread operator to add a new element at the beginning and at
// the end of the numbers array.
// ● Log the updated array to the console.

// let arr = [1,2,3,4,5];

// let arr2 = [1,2,...arr,6,7];

// console.log(arr2);

// Q33

// ● Create an object originalObject with some key-value pairs.
// ● Use the spread operator to create a copy of originalObject called
// copiedObject.
// ● Log both objects to the console to verify they are the same but not the
// same reference.

// let originalObject = {
//     name : "yameen",
//     age : 16,
//     City : "karachi"
// }


// let copiedObject = {
//     ...originalObject
// }

// console.log(originalObject);

// console.log(copiedObject);

// Q34

// ● Create two objects object1 and object2 with some overlapping
// keys.
// ● Use the spread operator to create a new object mergedObject that
// combines the properties of object1 and object2.
// ● Log mergedObject to the console and note which values are
// retained for the overlapping keys.

// let obj1 = {
//     name : "yameen",
//     age : 16,
//     city : "karachi"
// }

// let obj2 = {
//     name : "Akhter",
//     age : 15,
//     city : "karachi"
// }

// let marrgedObj = {...obj1,...obj2};

// Q35

// ● Create an object user with properties name, age, and email.
// ● Use the spread operator to create a new object updatedUser that
// updates the email property and adds a new address property.
// ● Log the updatedUser object to the console.

// let user = {
//     name : "yameen",
//     age : 16,
//     email : "abc123@gmail.com"
// }

// let updatedUser = {
//     ...user,
//     email : "xyz987@gmail.com",
//     address : "A-100"
// }

// console.log(updatedUser);

// Q36

// ● Create a function sum(a, b, c) that returns the sum of three
// numbers.
// ● Create an array numbers with three elements.
// ● Use the spread operator to pass the elements of numbers as
// arguments to the sum function.
// ● Log the result to the console.

// let sum = (a,b,c) => {
//     return a + b + c;
// }

// let numbers = [5,10,15];

// let result = sum(...numbers);

// console.log(result);

// Q37

// ● Create a function combineArrays that takes any number of arrays
// as arguments and returns a single array containing all elements.
// ● Use the spread operator inside the function to combine the arrays.
// ● Call the function with multiple arrays and log the result.

// function combineArrays(...arrays) {

//   return [].concat(...arrays);
// }

// let result = combineArrays([1, 2], [3, 4], [5, 6]);

// console.log(result);

// Q41

// ● Create a function average that uses the rest operator to take any
// number of arguments.
// ● The function should return the average of all its arguments.
// ● Call the function with different numbers of arguments and log the
// results.

// function average(...rest) {
//     return rest
// }

// let result = average(8,7,8);

// console.log(result);

// Q42

// ● Create an array numbers with at least 5 elements.
// ● Use array destructuring with the rest operator to assign the first
// element to a variable first and the remaining elements to a variable
// rest.
// ● Log first and rest to the console.

// let [first,...rest] = [1,2,3,4,5];

// console.log(first);
// console.log(rest);

// Q43

// ● Create an array colors with at least 5 elements.
// ● Use array destructuring with the rest operator to skip the first two
// elements and assign the remaining elements to a variable
// remainingColors.
// ● Log remainingColors to the console.

// let [,,...remainingColors] = ["red","yellow","blue","green","purple"];

// console.log(remainingColors);

// Q44

// ● Create an object person with properties name, age, email, and
// address.
// ● Use object destructuring with the rest operator to assign name and
// email to individual variables, and the remaining properties to a
// variable rest.
// ● Log the variables to the console.

// let person = {
//   name: 'Yameen',
//   email: 'abc123@example.com',
//   age: 16,
//   address: 'A-157'
// };


// let { name, email, ...rest } = person;


// console.log(name);     
// console.log(email);     
// console.log(rest);

// Q46

// ● Create a function filterEven that uses the rest operator to take any
// number of arguments.
// ● The function should return a new array containing only the even
// numbers.
// ● Call the function with different numbers of arguments and log the
// results.

// let person = {
//   name: 'Yameen',
//   email: 'abc123@example.com',
//   age: 16,
//   address: 'A-157'
// };


// let { name, email, ...rest } = person;


// console.log(name);     
// console.log(email);     
// console.log(rest);

// Q50

// ● Create an array numbers with the elements 1 through 5.
// ● Use destructuring to assign the first element to firstNumber and
// the rest of the elements to remainingNumbers.
// ● Log the variables to the console.

// let [firstNumber, ...remainingNumbers] = [1, 2, 3, 4, 5];

// console.log(firstNumber);
// console.log(remainingNumbers);

// Q51

// ● Create an object person with properties name, age, and city.
// ● Use destructuring to assign the properties to variables name, age,
// and city.
// ● Log the variables to the console.


// let { name, age, city } = {
//   name: "Alice",
//   age: 30,
//   city: "New York"
// };


// console.log(name);
// console.log(age);
// console.log(city);

// Q52

// ● Create an object car with properties make, model, and year.
// ● Use destructuring to assign the properties to variables carMake,
// carModel, and carYear.
// ● Log the variables to the console.

// let { make: carMake, model: carModel, year: carYear } = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2022
// };


// console.log(carMake);
// console.log(carModel);
// console.log(carYear);

// Q53

// ● Create an object settings with properties theme and language.
// ● Use destructuring to assign the properties to variables theme and
// language, and provide a default value of "English" for language.
// ● Log the variables to the console.


// let { theme, language = "English" } = {
//   theme: "dark"
 
// };

// console.log(theme);
// console.log(language);

// ● Create an array nestedArray with the elements [1, 2], [3, 4],
// and [5, 6].
// ● Use nested destructuring to assign the first elements of each
// sub-array to variables a, b, and c.
// ● Log the variables to the console.

// let [a,b,c] = [[1,2],[3,4],[5,6]]

// console.log(a,b,c);


// Q54

// ● Create an object profile with properties username, details
// (which is another object with properties email and address).
// ● Use nested destructuring to assign username, email, and address
// to variables.
// ● Log the variables to the console.


// const {
//   username,
//   details: { email, address }
// } = {
//   username: "john_doe",
//   details: {
//     email: "john@example.com",
//     address: "123 Main St"
//   }
// };


// console.log(username);
// console.log(email);
// console.log(address);

// Q55

// ● Create an object profile with properties username, details
// (which is another object with properties email and address).
// ● Use nested destructuring to assign username, email, and address
// to variables.
// ● Log the variables to the console.
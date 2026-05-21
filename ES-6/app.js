// global scope

// var globalvar = "i am var";
// let globallet = "i am let";
// const globalconst = "i am const";

// console.log(globalvar);
// console.log(globallet);
// console.log(globalconst);

// function scope

// function testscope(){
//     var a = "var variable";
//     var b = "let variable";
//     var c = "const variable";

//     console.log(a);
//     console.log(b);
//     console.log(c);
    
// }
// testscope();

// block scope

// if (true){
//     var x = "var inside block";
//     var y = "let inside block";
//     var z = "const inside block";
// }
// console.log(x);

// hoisting with var

// console.log(myVar);
// var myVar = 10;

// hoisting with let and const

// console.log(a);
// let a = 5;

// console.log(b);
// const b = 8;

//redeclaration

// var a = 5;
// var a = 6;

// console.log(a);

// let b = 4;
// let b = 8;

// console.log(b);  // syntax error


// const c = 4;
// const c = 8;

// console.log(b);  // syntax error

//re assignment allowed only let and var

// var x = 10;
// x = 30;

// let y = 20;
// y = 40;

// const z = 30;
// z = 60;

// console.log(x);
// console.log(y);
// console.log(z);


// temporal dead zone tdz
// reference error

// {
//     console.log(a);
//     let a = 5;
    
//     console.log(b);
//     const b = 6;
    
// }


// when to use var let and const

// for(var i = 0; i < 3;i++){
//     console.log(i);
// } 
//we use for loop

// let score = 90;
// score = 95;
//value updation

// const PI = 3.14;
//constant do not change fix value

//string interpolation

// let firstname = "Muhammad";
// let lastname = "Daniyal";

// let fullname = `${firstname} ${lastname}`
// console.log(fullname);

//multi line string 

// let address = `
// House 333/b
// Street no 8
// Sherhshah Karachi , Pakistan`;

// console.log(address);

// simple expression

// let num1 = 10;
// let num2 = 20;

// console.log(`${num1 + num2}`);

// function calls in template literal

// function multiply(a,b){
//     return a * b;
// }
// console.log(`product is ${multiply(3,10)}`);

// tagged template

// function tag(strings){
//     console.log(strings);
    
// }

// tag`hello world`;

// formating with tag template 

// function upperCase(strings, value) {
//     return strings[0] + value.toUpperCase();
// }

// let name = "daniyal";

// console.log(upperCase`Hello ${name}`);

// conditional logic 

// let hour = 10;
// console.log(`${hour < 12 ? 'good morning' : 'good afternoon'}`);

//loops with template literals 

// let item = ["milk", "bread" , "eggs"];

// let list = `
// <ul>
// ${item.map(item => `<li>${item}</li>`).join("")} </ul>`;

// console.log(list);


// escaping bacticks

// console.log(`this is a backtick \``);

// nested template literals

// let table = `
// <table>
//     ${[1,2].map(row => `
//         <tr>
//             <td>Row ${row}</td>
//         </tr>
//     `).join("")}
// </table>
// `;

// console.log(table);

// simple condition

// let age = 20;
// let canvote = age >= 18 ? "yes" : "no";
// console.log(canvote);

// even or odd

// let number  = 19;
// let evenorodd = number % 2 === 0 ? "even" : "odd";
// console.log(evenorodd);

// grade evolution 

// let score = 85 ;

// let grade = 
// score >= 90 ? "A" :
// score >= 80 ? "B" :
// score >= 70 ? "C" :
// score >= 60 ? "D" : "F" ; 

// console.log(grade);


// login status 

// let isloggedin = true;

// let loginstatus = isloggedin ? "welcome Back" : "Please log in ";

// console.log(loginstatus);

// discount eligibility

// let isMember = true;

// let purchaseamount = 200;

// let discount = isMember && purchaseamount > 100 ? purchaseamount * 0.10 : 0;

// console.log(discount);


// determine max vlaue 

// function maxValue(a,b){
//     return a > b ? a : b ;
    
// }
// console.log(maxValue(10,20));


// greeting message 

// function greet(name){
//     return name ? `hello , ${name} ` : "hello , guest!";

// }

// console.log(greet("Daniyal"));
// console.log(greet());

// maping values 

// let numbers = [1,2,3,4,5];
// let result = numbers.map( n =>
//     n % 2 === 0 ? n * 2 : n * 3
// );

// console.log(result);

// filtering values

// let words = ["cat" , "dog" , "Apple" , " Banana"];
// let filtered = words.filter(words => words.length > 3);
// console.log(filtered);

// coping an array 

// let originalarray = [1,2,3,4];

// let copiedarray = [...originalarray];

// console.log(originalarray);
// console.log(copiedarray);

// console.log(originalarray === copiedarray);

// merging array 

// let array1 = [1,2];
// let array2 = [3,4];

// let mergearray = [...array1, ...array2];

// console.log(mergearray);

// adding element in array

// let numbersarr = [2,3,4];

// let updated = [1 , ...numbersarr, 5]

// console.log(updated);

//copying an object 
 
// let originalobject = {
//     name : "Daniyal",
//     age : 21
// };

// let copiedobject = {...originalobject};
// console.log(copiedobject);

// merging object 

// let object1 = {a:1 , b:2};
// let object2 = {b:3 , d:4};

// let mergingobject = {...object1, ...object2};

// console.log(mergingobject);

// updating object properties

// let user = {
//     name : "Daniyal",
//     age : 21,
//     email:"dniaz0122@gmail.com"
// };

// let updateuser = {
//     ...user,
//     email: "daniyalniaztanoli@gmail.com",
//     address: "Karachi"
// };

// console.log(updateuser);

// parsing array elements as arguments

// function sum(a, b, c) {
//     return a + b + c;
// }

// let nums = [1,2,3];

// console.log(sum(...nums));

// combining multiple arrays 

// function combineArrays(...arrays) {
//     return [].concat(...arrays);
// }

// console.log(combineArrays([1,2], [3,4], [5,6]));

// rest parameter with spread operator 

// function multiply(num, ...args) {
//     return args.map(arg => arg * num);
// }

// console.log(multiply(2,1,2,3));

//spread operator with nested structures

// let nestedarray = [[1,2],[3,4]];

// let copied = [...nestedarray];

// copied[0][0] = 99;

// console.log(nestedarray);
// console.log(copied);


// sum function using rest 

// function sumAll(...nums) {
//     return nums.reduce((a,b) => a+b, 0);
// }

// console.log(sumAll(1,2,3,4));

// average functions 
// function average(...nums) {
//     return nums.reduce((a,b)=>a+b,0) / nums.length;
// }

// console.log(average(2,4,6));

// first and rest 

// let arr = [1,2,3,4,5];

// let [first, ...rest] = arr;

// console.log(first);
// console.log(rest);


// slip and rest 

// let colors = ["red","green","blue","yellow","black"];

// let [,, ...remainingColors] = colors;

// console.log(remainingColors);

// basic object destructuring 
// let person = {
//     name: "Ali",
//     age: 25,
//     email: "ali@gmail.com",
//     address: "Karachi"
// };

// let {name, email, ...restData} = person;

// console.log(name);
// console.log(email);
// console.log(restData);

// nested destructuring

// let student = {
//     id: 1,
//     name: "Ahmed",
//     grades: "A",
//     info: {
//         age: 22,
//         major: "CS"
//     }
// };

// let {id, name, info:{major}, ...restObj} = student;

// console.log(id);
// console.log(name);
// console.log(major);
// console.log(restObj);


//Filter Even Numbers

// function filterEven(...nums) {
//     return nums.filter(num => num % 2 === 0);
// }

// console.log(filterEven(1,2,3,4,5,6));

// Combine and Sort Arrays

// function combineAndSort(...arrays) {
//     return arrays.flat().sort((a,b)=>a-b);
// }

// console.log(combineAndSort([3,1],[6,2],[5,4]));


// Array Destructuring

// let fruits = ["apple", "banana", "cherry"];

// let [firstFruit, secondFruit, thirdFruit] = fruits;

// console.log(firstFruit);
// console.log(secondFruit);
// console.log(thirdFruit);

//Skipping Elements 

// let colorList = ["red","green","blue","yellow"];

// let [primaryColor,,tertiaryColor] = colorList;

// console.log(primaryColor);
// console.log(tertiaryColor);

// Rest Operator

// let numsArray = [1,2,3,4,5];

// let [firstNumber, ...remainingNumbers] = numsArray;

// console.log(firstNumber);
// console.log(remainingNumbers);

// Object Destructuring

// let personObj = {
//     name: "Ali",
//     age: 20,
//     city: "Karachi"
// };

// let {name, age:personAge, city} = personObj;

// console.log(name);
// console.log(personAge);
// console.log(city);

// remaining variables

// let car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2022
// };

// let {
//     make: carMake,
//     model: carModel,
//     year: carYear
// } = car;

// console.log(carMake);
// console.log(carModel);
// console.log(carYear);

// default values 

// let settings = {
//     theme: "dark"
// };

// let {theme, language = "English"} = settings;

// console.log(theme);
// console.log(language);

// arrays of arrays

// let nested = [[1,2],[3,4],[5,6]];

// let [[a],[b],[c]] = nested;

// console.log(a,b,c);


// object and object 
// let profile = {
//     username: "daniyal",
//     details: {
//         email: "abc@gmail.com",
//         address: "Karachi"
//     }
// };

// let {
//     username,
//     details:{email,address}
// } = profile;

// console.log(username);
// console.log(email);
// console.log(address);


// mixing of arrays and onjects
//  let data = {
//     id: 1,
//     info: [
//         {name:"Alice"},
//         {age:25}
//     ]
// };

// let {
//     id,
//     info:[{name},{age}]
// } = data;

// console.log(id);
// console.log(name);
// console.log(age);


// array parameter

// function printCoordinates([x,y]) {
//     console.log(x,y);
// }

// printCoordinates([10,20]);


// object parameters 

// function displayUser({name, age}) {
//     console.log(name, age);
// }

// displayUser({
//     name:"Ali",
//     age:22
// });


// objects keys 

// let book = {
//     title:"JS",
//     author:"ABC",
//     year:2025
// };

// console.log(Object.keys(book));


// count properties 
// let studentObj = {
//     name:"Ali",
//     age:20,
//     grade:"A",
//     school:"XYZ"
// };

// console.log(Object.keys(studentObj).length);

// iterate over keys 
// let product = {
//     name:"Laptop",
//     price:50000,
//     category:"Electronics"
// };

// Object.keys(product).forEach(key => {
//     console.log(key, product[key]);
// });

// object values

// let movie = {
//     title:"Movie",
//     director:"John",
//     year:2024,
//     genre:"Action"
// };

// console.log(Object.values(movie));

// sum values 
// let scores = {
//     math:90,
//     science:85,
//     english:80
// };

// let total =
//     Object.values(scores)
//     .reduce((a,b)=>a+b,0);

// console.log(total);

// iterate over values 

// let userObj = {
//     username:"daniyal",
//     email:"abc@gmail.com",
//     location:"Karachi"
// };

// Object.values(userObj).forEach(value => {
//     console.log(value);
// });


// object entries 

// let carObj = {
//     make:"Honda",
//     model:"Civic",
//     year:2023
// };

// console.log(Object.entries(carObj));

// convert object to array 

// let personData = {
//     firstName:"Ali",
//     lastName:"Khan",
//     age:25
// };

// console.log(Object.entries(personData));

// iterate over entries

// let settingsObj = {
//     theme:"dark",
//     notifications:true,
//     privacy:"high"
// };

// Object.entries(settingsObj).forEach(([key,value])=>{
//     console.log(key,value);
// });


// filter keys

// let inventory = {
//     apples:5,
//     bananas:15,
//     oranges:20,
//     grapes:8
// };

// let resultKeys =
//     Object.keys(inventory)
//     .filter(key => inventory[key] > 10);

// console.log(resultKeys);

// tarnsform values

// let temperatures = {
//     morning:20,
//     afternoon:30,
//     evening:25
// };

// let fahrenheit =
// Object.fromEntries(
//     Object.entries(temperatures).map(
//         ([key,value]) => [
//             key,
//             (value * 9/5) + 32
//         ]
//     )
// );

// console.log(fahrenheit);

// key value swap

// let roles = {
//     admin:"Ali",
//     editor:"Ahmed",
//     viewer:"Sara"
// };

// let swapped =
// Object.fromEntries(
//     Object.entries(roles).map(
//         ([key,value]) => [value,key]
//     )
// );

// console.log(swapped);


// filter and map

// let numsList = [1,2,3,4,5,6,7,8,9,10];

// function filterAndMap(arr, filterFn, mapFn) {
//     return arr.filter(filterFn).map(mapFn);
// }

// let output = filterAndMap(
//     numsList,
//     n => n % 2 !== 0,
//     n => n * n
// );

// console.log(output);

// sort and reduce 

// let wordsArr = ["apple","banana","cherry","date"];

// function sortAndReduce(arr, sortFn, reduceFn) {
//     return arr.sort(sortFn).reduce(reduceFn);
// }

// let resultString = sortAndReduce(
//     wordsArr,
//     (a,b)=>a.localeCompare(b),
//     (a,b)=>a + " " + b
// );

// console.log(resultString);


// simple callback

// function greet(name, callback) {
//     callback(`Hello ${name}`);
// }

// function printGreeting(message) {
//     console.log(message);
// }

// greet("Daniyal", printGreeting);

//asynchronus callback

// function fetchData(callback) {
//     setTimeout(() => {
//         callback("Data received");
//     }, 2000);
// }

// function displayData(data) {
//     console.log(data);
// }

// fetchData(displayData);

// simple arrow function

// const add = (a,b) => a + b;

// console.log(add(3,5));

// arrow function with array method 

// let numsSquare = [1,2,3,4,5];

// let squared = numsSquare.map(n => n*n);

// console.log(squared);

// variable scope 
// function outer() {
//     let x = 10;

//     function inner() {
//         console.log(x);
//     }

//     inner();
// }

// outer();

// clousure 

// function createCounter() {
//     let count = 0;

//     return function() {
//         count++;
//         console.log(count);
//     };
// }

// let counter1 = createCounter();
// let counter2 = createCounter();

// counter1();
// counter1();

// counter2();

// default parameter 

// function greet(name, greeting = "Hello") {
//     console.log(`${greeting} ${name}`);
// }

// greet("Ali");
// greet("Ali", "Hi");

// dafault parameter and arguments

// function calculateArea(width = 10, height = 5) {
//     return width * height;
// }

// console.log(calculateArea());
// console.log(calculateArea(20,10));

// square numbers

// let numsSq = [1,2,3,4,5];

// console.log(numsSq.map(n => n*n));

// convert to uppercase

// let fruitsWords = ["apple","banana","cherry"];

// console.log(
//     fruitsWords.map(word => word.toUpperCase())
// );

// filter even numbers 

// let evenNums =
// [1,2,3,4,5,6,7,8,9,10];

// console.log(
//     evenNums.filter(n => n % 2 === 0)
// );

// filter long words

// let longWords =
// ["apple","banana","cherry","date"];

// console.log(
//     longWords.filter(word => word.length > 5)
// );

//log numbers
// [1,2,3,4,5].forEach(num => {
//     console.log(num);
// });

//log words length

// ["apple","banana","cherry"]
// .forEach(word => {
//     console.log(word.length);
// });

//sum of numbers
// let totalSum =
// [1,2,3,4,5]
// .reduce((a,b)=>a+b,0);

// console.log(totalSum);


// concatenate strings 
// let sentence =
// ["Hello","world","this","is","JavaScript"]
// .reduce((a,b)=>a+" "+b);

// console.log(sentence);

// check for even numbers

// let hasEven =
// [1,3,5,7,8]
// .some(n => n % 2 === 0);

// console.log(hasEven);


//check for long words
// let hasLong =
// ["apple","banana","cherry","date"]
// .some(word => word.length > 5);

// console.log(hasLong);

// check all even numbers

// let allEven =
// [2,4,6,8,10]
// .every(n => n % 2 === 0);

// console.log(allEven);

// check all long words

// let allLong =
// ["elephant","giraffe","hippopotamus"]
// .every(word => word.length > 5);

// console.log(allLong);

// find first and even numbers

// let firstEven =
// [1,3,5,7,8]
// .find(n => n % 2 === 0);

// console.log(firstEven);


// find long words 
// let longWord =
// ["apple","banana","cherry","date"]
// .find(word => word.length > 5);

// console.log(longWord);

// find the index of all even numbers

// let evenIndex =
// [1,3,5,7,8]
// .findIndex(n => n % 2 === 0);

// console.log(evenIndex);

// find index of all long words 
// let wordIndex =
// ["apple","banana","cherry","date"]
// .findIndex(word => word.length > 5);

// console.log(wordIndex);

// simple promise 

// function delay(ms) {
//     return new Promise(resolve => {
//         setTimeout(resolve, ms);
//     });
// }

// delay(2000).then(() => {
//     console.log("Hello, world!");
// });


// promise chain 

// function fetchData() {
//     return Promise.resolve({
//         name:"Ali",
//         age:22
//     });
// }

// fetchData()
// .then(data => {
//     console.log(data);
// });

// error handling 
// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         let user = {name:"Ali"};

//         if(user.age) {
//             resolve(user);
//         } else {
//             reject("Age property missing");
//         }
//     });
// }

// fetchUserData()
// .then(data => console.log(data))
// .catch(error => console.log(error));


//  simulate network request

// function getWeather(success = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(success) {
//                 resolve("Sunny 30°C");
//             } else {
//                 reject("Weather data failed");
//             }
//         },1000);
//     });
// }

// getWeather(true)
// .then(data => console.log(data))
// .catch(error => console.log(error));

// simple asyunc function 

// async function sayHello() {
//     await delay(2000);
//     console.log("Hello, world!");
// }

// sayHello();

// fetch data with async/await

// async function getUserData() {
//     try {
//         let data = await fetchUserData();
//         console.log(data);
//     } catch(error) {
//         console.log(error);
//     }
// }

// getUserData();

// fetch and process data 

// function fetchUser() {
//     return Promise.resolve({
//         id:1,
//         name:"Ali",
//         age:22
//     });
// }

// function fetchPosts() {
//     return Promise.resolve([
//         "Post 1",
//         "Post 2"
//     ]);
// }

// async function getUserAndPosts() {
//     let user = await fetchUser();
//     let posts = await fetchPosts();

//     console.log(user);
//     console.log(posts);
// }

// getUserAndPosts();

// error handling async/await

// function fetchUser() {
//     return Promise.reject("User not found");
// }

// async function getUserInfo() {
//     try {
//         let user = await fetchUser();
//         console.log(user);
//     } catch(error) {
//         console.log(error);
//     }
// }

// getUserInfo();

// simulate api call 

// function apiCall() {
//     return new Promise((resolve, reject) => {

//         let delay = Math.random() * 2000;

//         setTimeout(() => {
//             resolve("API Data");
//         }, delay);
//     });
// }

// async function getData() {
//     try {
//         let data1 = await apiCall();
//         console.log(data1);

//         let data2 = await apiCall();
//         console.log(data2);

//         let data3 = await apiCall();
//         console.log(data3);

//     } catch(error) {
//         console.log(error);
//     }
// }

// getData();
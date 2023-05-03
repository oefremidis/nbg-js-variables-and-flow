// // variables 

// // data types --> string, number, undefined, boolean, null, BigInt, symbol
// var uname = 'Alice';
// console.log(uname, typeof uname);

// uname = 10;
// console.log(uname, typeof(uname));

// var age = 20;
// var found = true;

// var uninit = undefined;

// var none = null;

// var countries = ['Greece', 'Gemany', 'Italy'];
// console.log(countries);
// console.log(countries[0]);

// var car = {
//   brand: 'Audi',
//   color: 'blue',
//   doors: 4,
//   accessories: ['nav', 'leather seat', 'sunroof'],
//   info: function(){
//     return 'has' + this.doors + 'doors and is ' + this.color;
//   }
// }

// console.log(car.brand);

// var key = 'color';
// console.log(car[key]);

// // define a variable
// function greeting(){
//   console.log("hello world");
// }

// -----------------------------------

// console.log(color);
// var color = 'red'; 
// console.log(color);

// var color = 'red';
// // var does
// // 1. declaration
// // 2. initialization : undefined
// // 3. assing a value
// console.log('+', color);

// function changeColor(){
  // console.log('-', color);
//   var color;

// }

// console.log('*', color);
// changeColor();
// console.log('/', color);

// variable in block
// var color = 'red';
// console.log(color);

// if (color){
//   var color = "green"; // overide
//   console.log(color);
// }

// console.log("Color: ", color);
// console.log("Color: " + color);
// console.log(`Color: ${color}`);

// ----------- ES6 (2015) --------------
// let, const

// console.log(color);
// let color; // hoist: 1. declaration

// var color = 'red';
// console.log(color);

// if (color){
//   let color = "green"; // overide
//   console.log(color);
// }

// console.log(`Color: ${color}`);


// const in action 
// let age = 12;
// const age = 12;
// console.log(age);
// age = 15;  // error
// console.log(age);

// let countries = ['Greece', 'Gemany', 'Italy'];
// const countries = ['Greece', 'Gemany', 'Italy'];
// countries[0] = 'Greece...'
// countries[4] = 'Spain';
// console.log(countries);

// countries = 219;
// countries = ['Greece', 'Gemany', 'Italy'];
// console.log(countries);

// variable declaration without var, let or const
// goes to the global environment wherever is actually declared
// error prone - do not use them
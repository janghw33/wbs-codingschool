// ! negative
// & and
// | or
// == same value
// === same value and type

// if (1 === 1) {
//   console.log(1 != '1');
// }

// if (1 === 2) {
//   console.log('Hello');
// } else {
//   console.log('world');
// }

// (x !== y) & (x > 0) & (y < 5) ? console.log('Hello') : console.log('World');

// (x !== y) & (x > 0) & (y < 5) && console.log('Hello');

// if (x === y) {
//    function a(params) {
//       console.log("Hello")
//    }
//    a()
// } else if (x == y) {
//   console.log('x == y ');
// } else {
//   console.log('x !== y ');
// }

// x === y
//   ? console.log('x === y')
//   : x == y
//   ? console.log('x == y ')
//   : console.log('x !== y ');

//   const y = '2';

// const q = 2;

// function a() {
//   const q = 3;
//   console.log(q + q);
// }

// console.log(a);
// function b() {
//    console.log(q + z);
// }

// a();
// b();
const x = 5;
showX();
function showX() {
  console.log(`x is equal to ${x}`);
}
switch (x) {

  
  default:
    console.log('x is more than 3');
    break;

  case 0:
    console.log('x is 0');
    break;

  case 1:
    showX();
    console.log('x is 1');
    break;

  case 2:
    console.log('x is 2');
    break;

  case 3:
    console.log('x is 3');
    break;
}

let index = 0;

function a() {
  console.log('from func' + index);
  if (index++ < 10) {
    a();
  }
}

a();

// const people = [
//     'Alex',
//     'Amir',
//     'Dominic',
//     'Eddy',
//     'Gary',
//     'Gulmina',
//     'Hyeongwook',
//     'Kapil',
//     'Mehedi',
//     'Muhammad',
//     'Anna',
//     'Nikolay',
//     'Vladimir',
//     'Yohannes',
//   ];
  
//   for (let i = 0; i < people.length; ++i) {
//     const time = (i + 1) * 5;
  
//     console.log(`1:${time} Meet with ${people[i]}.`);
//   }
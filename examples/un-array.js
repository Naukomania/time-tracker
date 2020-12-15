const {unionArray} = require('../lib/arr')

const intputArr = [
  {
    text: 'one',
    seconds: 1
  },
  {
    text: 'two',
    seconds: 2
  },
  {
    text: 'one',
    seconds: 3
  },
];

console.log(unionArray(intputArr)) // outputArray
// const intputArr = [
//   {
//     text: 'one',
//     seconds: 4
//   },
//   {
//     text: 'two',
//     seconds: 2
//   }
// ];
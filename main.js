const { IsPrime } = require('./build/Release/addon');
const isPrime = require('./isPrime');

const number = 654188429;
const NATIVE = 'native';
const JS = 'js';

const nativeTimes = [];
const jsTimes = [];

let averageNative = 0;
let averageJS = 0;

for (let i = 0; i < 10; i++) {
  console.time(NATIVE);
  let startTime = Date.now();
  console.log(`${NATIVE}: checking whether ${number} is prime... ${IsPrime(number)}`);
  console.timeEnd(NATIVE);
  let endTime = Date.now();
  let elapsedTime = endTime - startTime;
  nativeTimes.push(elapsedTime);
  console.log(`Calculated time: ${elapsedTime}`);
  console.log('');
}
console.log("done with native tests");

for (let i = 0; i < 10; i++) {
  console.time(JS);
  let startTime = Date.now();
  console.log(`${JS}: checking whether ${number} is prime... ${isPrime(number)}`);
  console.timeEnd(JS);
  let endTime = Date.now();
  let elapsedTime = endTime - startTime;
  jsTimes.push(elapsedTime);
  console.log(`Calculated time: ${elapsedTime}`);
  console.log('');
}
console.log("done with all tests");
console.log('');
nativeTimes.forEach(timestamp => {
  averageNative += timestamp;
});
jsTimes.forEach(timestamp => {
  averageJS += timestamp;
})
averageNative = averageNative / nativeTimes.length;
averageJS = averageJS / jsTimes.length;
console.log(`Average native time: ${averageNative}`);
console.log(`Average JS time: ${averageJS}`);
console.log(`Average performance increase: ${averageJS / averageNative}`);

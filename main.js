const { IsPrime } = require('./build/Release/addon');
const isPrime = require('./isPrime');

const number = 654188429;
const NATIVE = 'native';
const JS = 'js';

for (let i = 0; i < 10; i++) {
  console.time(NATIVE);
  console.log(`${NATIVE}: checking whether ${number} is prime... ${IsPrime(number)}`);
  console.timeEnd(NATIVE);
  console.log('');
}
console.log("done with native tests");

for (let i = 0; i < 10; i++) {
  console.time(JS);
  console.log(`${JS}: checking whether ${number} is prime... ${isPrime(number)}`);
  console.timeEnd(JS);
  console.log('');
}
console.log("done with all tests");

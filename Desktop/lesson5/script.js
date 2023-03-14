// 1
let result = '';
for (let i = 10; i <= 20; i++) {
  result += `${i}, `;

}

console.log(result);

//2 
let resultSqurt = '';
for (let i = 10; i <= 20; i++) {
  resultSqurt += `${i ** 2}, `;

}

console.log(resultSqurt);

//3

let multiply = 1;

for (let i = 15; i <= 35; i++) {
   multiply = multiply * i;
}

console.log(multiply);

//4 
let sum = 0;

for (let i = 1; i <= 500; i++) {
  sum += i;
}

const average = sum / 500;

console.log(average);

//5
let evenSum = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  }
}

console.log(evenSum);

//6
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

//7
function isPrime(num) 
{
  if (num <= 1)
    return false;

  for(i = 2; i * i <= num; i++)
  { 
      if( num % i === 0 ) 
        return false;
  }
  return true;
}



const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
// PRINT ODD NUMBERS IN AN ARRAY USING ARROW FUNCTIONS
const OddNumbers = numbers.filter((num) =>{
    return num % 2 === 1;
})

console.log(`Odd numbers in an arrya ${OddNumbers}`);



// SUM OF ALL NUMBERS IN AN ARRAY USING ARROW FUNCTIONS
const sumOfNumbers = numbers.reduce((currentVal, num) =>{
    return currentVal + num;
},0)

console.log(`Sum of all numbers in an arra is ${sumOfNumbers}` );


// RETURN ALL THE PRIME NUMBRES IN AN ARRAY USING ARROW FUNCTIONS
const primeNumber = numbers.filter((num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
});

console.log(`primeNumbers in an array ${primeNumber}`);

// RETURN ALL THE PALINDROMES IN AN ARRAY
const numbersList = [123,145,167,121,333,189,127721,345543,78900987,890908,12321]
const isPalindrome = numbersList.filter((num) => {
   let factor = 1;
   while (num / factor >= 10){
      factor *= 10;
   }
   while (num) {
      let first = Math.floor(num / factor);
      let last = num % 10;
      if (first != last){
         return false;
      }
      num = Math.floor((num % factor) / 10);
      factor = factor / 100;
   }
   return true;
});

 console.log(`PALINDROMES in an array ${isPalindrome}`);


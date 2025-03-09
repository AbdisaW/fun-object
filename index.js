// FizzBuzz algorithm

// Divisible by 3 => Fizz;
// Divisible by 5 => BUZZ;
// Divisible by both 3 and 5 => FizzBuzz

// Not divisible by 3 or 5 => input
// Not a nmber => 'NaN

const outPut = fizzBuzz(3);
console.log(outPut);
function fizzBuzz(input){
    if(typeof input !== 'number')
        return NaN
    if(input % 3 === 0 && input % 5 === 0)
        return 'fizzBuzz';
    if(input % 3 === 0 )
        return 'fizz';
    
    if(input % 5 === 0) 
        return 'Buzz';

    return input;


}
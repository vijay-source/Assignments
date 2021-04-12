function* genPrime(n) {

    // if (isNaN(n) || !isFinite(n) || n % 1 || n < 2)
    //     return " Number not valid : " + n;

    for (var i = 2; i < n; i++) {
        if (isPrime(i)) {
            yield i;
        }
    }
}

//to check number is prime or not

function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

//call to generator function 
const generatorObject = genPrime(10);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);


// setTimeout(function () { myFunction("I love You !!!"); }, 3000);

// function myFunction(value) {
//     document.getElementById("demo").innerHTML = value;
// }
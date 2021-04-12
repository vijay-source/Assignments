// setInterval(primeFinder(2, 10), 1000);
// document.write("<br>");
// setInterval(primeFinder(2, 1000), 10000);
// document.write("<br>");
// setInterval(primeFinder(2, 100), 3000);





function batch(a, b) {
    console.log("Start");
    let first = a;
    let second = a + 8;
    let inv = setInterval(()=>{
        primeFinder(first, second, result => {
            for (let i of result) {
                console.log(i,);
            }
        });
        first = second;
        second = first + 10;
        if (second > b) {
            clearInterval(inv)
        }
    }, 3000);
}
batch(2, 10);
batch(2, 100);
batch(2, 1000);



function primeFinder(a, b, callback) {
    let arr = [];

    for (let j = a; j <= b; j++) {
        let flag = 0;
        for (let i = 2; i < j; i++) {
            if (j % i === 0) {
                flag = 1;
            }
        }
        if (flag != 1) {
            arr.push(j);
        }

    }
    callback(arr);
}


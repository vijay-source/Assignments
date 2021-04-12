Array.prototype.myMap = function(callback) {
    const resultArray = []
    for (index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;
}

const sample = [1, 2, 3];
const result = sample.myMap(function(val, index, array) {
    console.log('val:', val);
    console.log('index', index);
    console.log('array', array);
    return val;
});
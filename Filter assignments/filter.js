Array.prototype.filtering = function(cb) {
    var arr = []

    for (let i of this) {
        if (cb(i)) {

        }
    }
    return arr;

}
console.log(Array.filtering(check))
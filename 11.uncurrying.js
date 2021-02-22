Function.prototype.uncurrying = function () {
    console.log('this', this)
    var self = this; //self 此时是Array.prototype.push
    return function () {
        console.log('-->', arguments) //{ '0': { '0': 1, length: 1 }, '1': 2 }
        var obj = Array.prototype.shift.call(arguments);
        return self.apply(obj, arguments) //相当于Array.prototype.push.apply(obj, 2)
    }
}

//Array.prototype.push 它调用的uncurrying this就是Array.prototype.push
var push = Array.prototype.push.uncurrying();
var obj = {
    "length" : 1,
    "0": 1
}
push(obj, 2)
console.log(obj)
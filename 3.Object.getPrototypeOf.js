var obj1 = new Object();
var obj2 = {};

console.log(Object.getPrototypeOf(obj1))
console.log(Object.getPrototypeOf(obj1) === Object.prototype)
console.log(Object.getPrototypeOf(obj2) === Object.prototype) 
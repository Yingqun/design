//一个类 继承自 另外一个类的效果时
var A = function () { };
A.prototype = { name: 'sven' }

var B = function () { };
B.prototype = new A()

var b = new B();
console.log(b.name)

// 最常见的继承
var obj = { name: 'sven' }
var A = function () { }
A.prototype = obj

var a = new A();
console.log(a.name)
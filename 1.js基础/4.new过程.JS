function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  return this.name;
}

var objectFactory = function () {
  var obj = new Object() // Object.prototype上克隆一个空对象
  Constructor = [].shift.call(arguments) // 取外部传入构造器
  obj.__proto__ = Constructor.prototype // 指向正确原型
  var ret = Constructor.apply(obj, arguments) //借用外部传入的构造器给obj设置属性
  console.log(ret)
  return typeof ret === 'object' ? ret : obj;
}

var a = objectFactory(Person, 'sven')
console.log(a.getName())
console.log(Object.getPrototypeOf(a) === Person.prototype)
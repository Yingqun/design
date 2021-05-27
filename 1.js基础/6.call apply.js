var obj1 = {
  name: 'sven',
  getName: function () {
    return this.name;
  }
}
var obj2 = {
  name: 'anna'
}

console.log(obj1.getName())
console.log(obj1.getName.call(obj2))

//第一个参数为空的时候
// var func = function(a, b, c) {
//   console.log(this === window)
// }
// func.apply(null, [1, 2, 3])
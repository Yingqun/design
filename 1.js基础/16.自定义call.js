Function.prototype.call2 = function (context) {
  // context为null的时候 this指向window
  var context = context || window;
  context.fn = this;
  var args = [];
  // 执行后 args为 ["arguments[1]", "arguments[2]", "arguments[3]"] 
  for (var i = 1, len = arguments.length; i < len; i++) {
    // 这里 args 会自动调用 Array.toString() 这个方法。
    args.push('arguments[' + i + ']')
  }
  // 函数是可以有返回值的！
  var result = eval('context.fn(' + args + ')');
  delete context.fn;
  return result;
}

// 测试一下
var value = 2;

var obj = {
  value: 1
}

function bar(name, age) {
  console.log(this.value);
  return {
    value: this.value,
    name: name,
    age: age
  }
}

bar.call2(null); // 2
console.log(bar.call2(obj, 'kevin', 18));
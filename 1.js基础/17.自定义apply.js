Function.prototype.apply = function (context, arr) {
  var context = Object(context) || window;
  context.fn = this;

  var result;
  if (!arr) {
    result = context.fn()
  } else {
    var args = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      // 这里 args 会自动调用 Array.toString() 这个方法。
      args.push('arr[' + i + ']')
    }
    result = eval('context.fn(' + args + ')')
  }
  delete context.fn;
  return result;
}
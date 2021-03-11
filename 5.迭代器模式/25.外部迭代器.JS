var Iterator = function (obj) {
  var current = 0;
  var next = function () {
    current += 1
  }
  var isDone = function () {
    return current >= obj.length
  }
  var getCurrItem = function () {
    return obj[current]
  }
  return {
    next: next,
    isDone: isDone,
    getCurrItem: getCurrItem,
    length: obj.length
  }
}

//判断数组是否相等
var compare = function (iterator1, iterator2) {
  if (iterator1.length !== iterator2.length) {
    console.log('不相等')
  }
  while (!iterator1.isDone() && !iterator2.isDone()) {
    if (iterator1.getCurrItem() !== iterator2.getCurrItem()) {
      throw new Error('不相等')
    }
    iterator1.next()
    iterator2.next()
  }
  console.log('相等')
}

var array1 = ['1', '2', '3']
var array2 = ['1', '2', '3']

var iterator1 = new Iterator(array1)
var iterator2 = new Iterator(array2)

compare(iterator1, iterator2)
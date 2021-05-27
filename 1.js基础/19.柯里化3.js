function curry(fn) {

  return function _curry(...arg1) {
    console.log(fn.length, arg1.length)
    if (arg1.length >= fn.length) {
      return fn.apply(this, arg1)
    }
    return function (...arg2) {
      return _curry.apply(this, arg1.concat(arg2))
    }
  }
}

function add(x, y, z) {
  return x + y + z
}

const addPlus = curry(add)

console.log(addPlus(3)(2)(1))





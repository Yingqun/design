var order500 = function (orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    console.log('500定金得到100优惠券')
  } else {
    // 不知道下一个节点是谁 把请求往后面传递
    return 'nextSuccessor';
  }
}

var order200 = function (orderType, pay, stock) {
  if (orderType === 2 && pay === true) {
    console.log('200定金得到50优惠券')
  } else {
    // 不知道下一个节点是谁 把请求往后面传递
    return 'nextSuccessor';
  }
}

var orderNormal = function (orderType, pay, stock) {
  if (stock > 0) {
    console.log('普通购买 无优惠券')
  } else {
    console.log('手机库存不足');
  }
}

Function.prototype.after = function (fn) {
  var self = this;
  return function () {
    var ret = self.apply(this, arguments);
    if (ret === 'nextSuccessor') {
      return fn.apply(this, arguments)
    }
    return ret
  }
}

var order = order500.after(order200).after(orderNormal)


order(1, true, 500)
order(2, true, 500)
order(1, false, 500)
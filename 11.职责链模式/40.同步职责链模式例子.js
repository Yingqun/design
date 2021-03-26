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

var Chain = function (fn) {
  this.fn = fn;
  this.successor = null;
}

Chain.prototype.setNextSuccessor = function (successor) {
  return this.successor = successor
}

Chain.prototype.passRequest = function () {
  console.log(this)
  var ret = this.fn.apply(this, arguments);
  if (ret === 'nextSuccessor') {
    return this.successor &&
      this.successor.passRequest.apply(this.successor, arguments)
  }
  return ret;
}

var chainOrder500 = new Chain(order500)
var chainOrder200 = new Chain(order200)
var chainOrderNormal = new Chain(orderNormal)

chainOrder500.setNextSuccessor(chainOrder200)
chainOrder200.setNextSuccessor(chainOrderNormal)

chainOrder500.passRequest(1, true, 500)
chainOrder500.passRequest(2, true, 500)
chainOrder500.passRequest(3, true, 500)
chainOrder500.passRequest(1, false, 0)
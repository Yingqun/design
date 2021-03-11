var salesOffices = {}
salesOffices.clientList = {}
salesOffices.listen = function (key, fn) {
  if (!this.clientList[key]) {
    this.clientList[key] = []
  }
  this.clientList[key].push(fn)
}

//发布消息
salesOffices.trigger = function () {
  var key = Array.prototype.shift.call(arguments),
    fns = this.clientList[key]
  if (!fns || fns.length === 0) {
    return false
  }
  for (var i = 0, fn; fn = fns[i++];) {
    fn.apply(this, arguments) //发送消息时候附送的参数
  }
}

salesOffices.listen('squareMeter88', function (price) {
  console.log('价格=' + price);
})

salesOffices.listen('squareMeter100', function (price) {
  console.log('价格=' + price);
})

// 有key之后订阅 感兴趣的事件 发布事件
salesOffices.trigger('squareMeter88', 200000)
salesOffices.trigger('squareMeter100', 300000)
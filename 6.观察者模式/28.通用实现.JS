var event1 = {
  clientList: [],
  listen: function (key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = []
    }
    this.clientList[key].push(fn)
  },
  trigger: function () {
    var key = Array.prototype.shift.call(arguments),
      fns = this.clientList[key]
    if (!fns || fns.length === 0) {
      return false
    }
    for (var i = 0, fn; fn = fns[i++];) {
      fn.apply(this, arguments) //发送消息时候附送的参数
    }
  },
  remove: function (key, fn) {
    var fns = this.clientList[key];
    if (!fns) {
      return false
    }
    if (!fn) {
      fns && (fns.length = 0);
    } else {
      for (var l = fns.length - 1; l >= 0; l--) {
        var _fn = fns[l]
        if (_fn === fn) {
          fns.splice(l, 1)
        }
      }
    }
  }
}

var installEvent = function (obj) {
  for (var i in event1) {
    obj[i] = event1[i]
  }
}

var salesOffices = {}
installEvent(salesOffices)
// 小明订阅
salesOffices.listen('squareMeter88', fn1 = function (price) {
  console.log('价格=' + price);
})

// 小红订阅
salesOffices.listen('squareMeter100', fn2 = function (price) {
  console.log('价格=' + price);
})

salesOffices.listen('squareMeter100', fn3 = function (price) {
  console.log('价格=' + price);
})

// 有key之后订阅 感兴趣的事件 发布事件
salesOffices.trigger('squareMeter88', 200000)
salesOffices.remove('squareMeter100', fn2)
salesOffices.trigger('squareMeter100', 400000)
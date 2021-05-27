$.ajax('http://xxx.com? login', function (data) {
  //登录成功
  login.trigger('loginSucc', data);//发布登录成功消息
})

var header = (function () {
  login.listen('loginSucc', function (data) {
    header.setAvatar(data.avatar)
  })
  return {
    setAvatar: function (data) {
      console.log('设置header模块的头像')
    }
  }
})();

var nav = (function () {
  login.listen('loginSucc', function (data) {
    nav.setAvatar(data.avatar)
  })
  return {
    setAvatar: function (data) {
      console.log('设置nav模块的头像')
    }
  }
})();

var address = (function () {
  login.listen('loginSucc', function (obj) {
    address.refresh(obj)
  })
  return {
    refresh: function (obj) {
      console.log('刷新收货地址列表')
    }
  }
})();
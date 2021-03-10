// 函数 throttle函数接受2个参数，第一个参数为需要被延迟执行的函数，第二个参数为延迟执行的时间
// 将即将被执行的函数用setTimeout延迟一段时间执行。如果该次延迟执行还没有完成，则忽略接下来调用该函数的请求
var throttle = function (fn, interval) {
    var __self = fn, // 保存需要被延迟执行的函数引用
    timer, //定时器
    firstTime = true;
    return function () {
        var args = arguments,
            __me = this;
        if(firstTime) { //第一次调用不需要延迟执行
            __self.apply(__me, args)
            return firstTime = false
        }
        if(timer) { //如果定时器还在 说明前一次延迟执行还没有完成
            return false;
        }
        timer = setTimeout(function () { //延迟一段时间执行
            clearTimeout(timer);
            timer = null;
            __self.apply(__me, args)
        }, interval || 500)
    }
}

window.onresize = throttle(function() {
    console.log(1)
}, 500)
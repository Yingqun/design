var tween = {
  linear: function (t, b, c, d) {
    return c * t / d + b;
  },
  easeIn: function (t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  strongEaseIn: function (t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },
  strongEaseOut: function (t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  sineaseIn: function (t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },
  sineaseOut: function (t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  }
}
var Animate = function (dom) {
  this.dom = dom;         // 进行运动的dom节点
  this.startTime = 0;     // 动画开始时间
  this.startPos = 0;      // dom初始位置
  this.endPos = 0;        // dom目标位置
  this.propertyName = null;   //  dom节点需要被改变的css属性名字
  this.easing = null;     //  缓动算法
  this.duration = null;   //  动画持续时间
}
Animate.prototype.start = function (propertyName, endPos, duration, easing) {
  this.startTime = +new Date; //动画启动时间
  this.startPos = this.dom.getBoundingClientRect()[propertyName]; //dom节点初始位置
  this.propertyName = propertyName; //dom节点需要被改变的css属性名
  this.endPos = endPos;
  this.duration = duration;
  this.easing = tween[easing]; //缓动算法, 把算法传入到动画中，可以轻易被替换
  var self = this;
  var timeId = setInterval(function () { //启动定时器,开始执行动画
    if (self.step() === false) { //如果动画已结束，则清除定时器
      clearInterval(timeId)
    }
  }, 19)
}
Animate.prototype.step = function () {
  var t = + new Date;
  if (t >= this.startTime + this.duration) { //动画已经结束，修正小球的位置
    this.update(this.endPos); //更新小球css属性值
    return false; //通知start方法清除定时器
  }
  var pos = this.easing(t - this.startTime, this.startPos,
    this.endPos - this.startPos, this.duration);
  this.update(pos) //更新小球css的值
}
Animate.prototype.update = function (pos) {
  this.dom.style[this.propertyName] = pos + 'px'
}

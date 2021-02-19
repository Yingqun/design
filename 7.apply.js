document.getElementById = (function (func) {
  return function () {
    return func.apply(ducument, arguments)
  }
})(document.getElementById)
var getId = document.getElementById;
var div = getId('div1');
alert(div.id);
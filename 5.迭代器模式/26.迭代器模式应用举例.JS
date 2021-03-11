var getActiveUploadObj = function () {
  try {
    return new ActiveXObject("TXFTNActiveX.FTNUpload")
  } catch (e) {
    return false
  }
}

var supportFlash = function () {
  return true
}

var getFlashUploadObj = function () {
  if (supportFlash()) {
    var str = '<object type="application/x-shockwave-flash></object>'
    return str
  }
  return false
}

var getFormUploadoBJ = function () {
  var str = '表单上传'
  return str
}

var iteratorUploadObj = function () {
  for (var i = 0, fn; fn = arguments[i++];) {
    var uploadObj = fn();
    if (uploadObj !== false) {
      return uploadObj;
    }
  }
}

//提供一个可以被迭代的方法，使得getActiveUploadObj,getFlashUploadObj以及getFlashUploadObj依照优先级被循环迭代。
//如果正在被迭代的函数返回一个对象，则表示找到了正确的upload对象，反之如果该函数返回false，则让迭代器继续工作。
var uploadObj = iteratorUploadObj(getActiveUploadObj, getFlashUploadObj, getFormUploadoBJ)
console.log(uploadObj)
var getActiveUploadObj = function () {
  try {
    return new ActiveXObject("TXFTNActiveX.FTNUpload")
  } catch (e) {
    return 'nextSuccessor'
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
  return 'nextSuccessor'
}

var getFormUploadoBJ = function () {
  var str = '表单上传'
  return str
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

var getUploadObj = getActiveUploadObj.after(getFlashUploadObj).after(getFormUploadoBJ)

console.log(getUploadObj())
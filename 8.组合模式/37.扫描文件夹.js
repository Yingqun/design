var Folder = function (name) {
  this.name = name;
  this.parent = null;
  this.files = [];
}
Folder.prototype.add = function (file) {
  file.parent = this; //设置父对象
  this.files.push(file)
}

Folder.prototype.scan = function () {
  console.log('开始扫描文件夹:' + this.name);
  for (var i = 0, file, files = this.files; file = files[i++];) {
    file.scan();
  }
}

Folder.prototype.remove = function () {
  if (!this.parent) {
    return;
  }
  for (var files = this.parent.files, l = files.length - 1; l >= 0; l--) {
    var file = files[l]
    if (file === this) {
      files.splice(l, 1)
    }
  }
}

var File = function (name) {
  this.name = name;
  this.parent = null;
}

File.prototype.add = function () {
  throw new Error('文件夹下面不能再添加文件')
}

File.prototype.scan = function () {
  console.log('开始扫描文件:' + this.name)
}

File.prototype.remove = function () {
  if (!this.parent) { //根节点或者树外的节点
    return;
  }
  for (var files = this.parent.files, l = files.length - 1; l >= 0; l--) {
    var file = files[l];
    if (file === this) {
      files.splice(l, 1)
    }
  }
}

var folder = new Folder('学习资料文件夹')
var folder1 = new Folder('js文件夹')
var folder2 = new Folder('java文件夹')

var file1 = new File('go')
var file2 = new File('ts')
var file3 = new File('lang')

folder1.add(file1)
folder2.add(file2)

folder.add(folder1)
folder.add(folder2)
folder.add(file3)

var folder3 = new Folder('nodejs文件夹')
var file4 = new File('php')
folder3.add(file4)
var file5 = new File('数据结构')

folder.add(folder3)
folder.add(file5)

folder1.remove(); //移除
folder.scan()
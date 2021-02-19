//简单版本
Function.prototype.bind = function(context) {
    var self = this; // 保存原函数
    return function() { // 返回一个新的函数
        // 执行新的函数的时候 会把之前传入的context 当作新函数体内的this
        return self.apply(context, arguments) 
    }
};

var obj = {
    name: 'sven'
};

var func = function() {
    console.log(this.name)
}.bind(obj);

// func();

//复杂版本
Function.prototype.bind2 = function() {
    var self = this, // 保存原函数
        context = [].shift.call(arguments), //需要绑定的this上下文
        args = [].slice.call(arguments); //剩余的参数转成数组
    
        return function() {
            return self.apply(context, [].concat.call(args, [].slice.call(arguments)));
        }
}
var obj2 = {
    name: 'lyq'
}

var func2 = function(a, b, c, d) {
    console.log([].slice.call(arguments))
    console.log(this.name)
}.bind2(obj2, 1, 2)

func2(3, 4)
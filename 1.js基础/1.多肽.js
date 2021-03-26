var makeSound = function (animal) {
    animal.sound();
}

var Duck = function () { }
Duck.prototype.sound = function () {
    console.log('嘎嘎嘎')
}

var Chicken = function () { }
Chicken.prototype.sound = function () {
    console.log('咯咯咯')
}

//多肽： 一个方法接收不同的对象 会有不同的行为
//再加一个动物 不用修改makeSound函数 

makeSound(new Duck());
makeSound(new Chicken());
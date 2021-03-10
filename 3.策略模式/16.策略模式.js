// 不使用策略模式
var calculateBonusOld = function (performanceLevel, salary) {
    if(performanceLevel === 'S') {
        return salary * 4
    }
    if(performanceLevel === 'A') {
        return salary * 3
    }
    if(performanceLevel === 'B') {
        return salary * 2
    }
}

// 策略模式的目的就是将算法的使用与算法的实现分离开来
// 消除了原程序中大片的条件分支语句
var strategy = { //策略对象
    "S": function (salary) {
        return salary * 4
    },
    "A": function (salary) {
        return salary * 3
    },
    "B": function (salary) {
        return salary * 2
    }
}

//Context并没有计算奖金的能力，而是把这个职责委托给了某个策略对象
var calculateBonus = function (level, salary) {
    return strategy[level](salary)
}

console.log(calculateBonus('S', 2000))
console.log(calculateBonus('A', 1000))
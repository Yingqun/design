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
var strategy = {
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

var calculateBonus = function (level, salary) {
    return strategy[level](salary)
}

console.log(calculateBonus('S', 2000))
console.log(calculateBonus('A', 1000))
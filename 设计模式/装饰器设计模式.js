/**
 * 下面需要你来定义一个 `addLog` 的函数，它只有一个参数：需要添加日志功能的函数。下面是 `addLog` 装饰器函数需要完成的操作：
 * 1. 根据传入的函数参数，返回一个经过包装后的新函数
 * 2. 当调用装饰后的新函数，不仅能够调用基础函数的原本逻辑，且能够输出函数调用的时延日志
 */

/**
 * 装饰器函数 addLog
 * @param {function} func 需要增添功能的函数
 */
function addLog(func) {
    let newFunc = function (times) {
        var startTime = new Date().getTime();
        var sum = func.call(null,times);
        console.log(sum);
        var endTime = new Date().getTime();
        console.log("使用了"+ (endTime-startTime)+"毫秒");
        return sum;
    };
    return newFunc;
}


// 计算数字函数
function calculate(times) {
    var sum = 0;
    var i = 1;
    while(i < times) {
        sum += i;
        i++;
    }
    return sum;
}
var newCalculate = addLog(calculate);
console.log(newCalculate(532423));
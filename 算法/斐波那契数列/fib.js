// 普通递归方法
function fib(n) {
    if (n <= 1) {
        return 1
    }
    return fib(n - 1) + fib(n - 2)
}

// 闭包
// 直接缓存了mes，如果存在数字在mes中就直接取值，否则就赋值
var fibClosure = (function () {
    let mes = [0, 1]
    var f = function (n) {
        let res = mes[n]
        if (typeof res !== 'number') {
            mes[n] = f(n - 1) + f(n - 2)
            res = mes[n]
        }
        return res
    }
    return f
})() 
fibClosure(6) //  [0, 1, 1, 2, 3, 5, 8]

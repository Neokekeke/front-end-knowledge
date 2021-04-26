// 函数扁平化
// 思想就是上一个函数的返回值作为下一个函数的参数
// 思想是compose接受不同个数的参数，每次返回都是一个函数，参数个数可以为0个、1个、多个
function compose(...fn) {
    if (fn.length == 0) {
        return args => args;
    } 
    
    else if (fn.length == 1) {
        return fn[0];
    } 
    
    else {
        // func handler
        return fn.reduce((a, b) => (...args) => a(b(...args)))
    }
}

function mid1(next) {
    console.log('fn1',  next);
    return next;
}

function mid2(next) {
    console.log('fn2',  next);
    return next;
}

function mid3(next) {
    console.log('fn3',  next);
    return next;
}

// console.log("null params", compose()()); // 参数为空时
// console.log("one params", compose(mid1)(6)); // 参数为一个函数 
console.log("more params", compose(mid1, mid2, mid3)(5)); 
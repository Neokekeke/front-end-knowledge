export function throttle(fn, delay, options) {
    let timer = null; // 计时器
    return function () {
        const args = arguments; // 保留调用时传入的参数
        console.log(args, this);
        if (timer) { // 如果计时器还在说明还没执行结束，则继续执行
            return false;
        }
        timer = setTimeout(function () {
            clearTimeout(timer);
            timer = null;
            fn.apply(this, args);
        }, delay || 2000);
    };
}
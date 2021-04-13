// 实现一个函数多次调用，并有调用时间间隔
function repeatFn(fn, args, times = 3, delay = 2000) {
    let flag = 0
    let timer = null
    timer = setInterval(() => {
        if (flag < times) {
            fn.call(this, args);
            flag += 1;
        } else {
            timer = null;
        }
    }, delay)
}

repeatFn(console.log, '666')
// 函数柯里化 add(1,2,3) == add(1)(2)(3) == add(1,2)(3)
function curry1() {
    const args = []

    function sum() {
        args.push(...Array.from(arguments))
        console.log(args)
        return sum
    }

    sum.toString = function () {
        return args.reduce((total, curval) => (total += curval), 0)
    }

    return sum
}

var add = curry1()
add(1)(2)(3).toString()
add(1, 2, 3).toString()

/**************************************************************** */

// 实现无限柯里化，参数开始累加
// 思路就是当参数为空时返回计算值，参数不为空时收集参数并返回当前函数句柄，参数为空时计算

/**
 * 1、重点就是利用闭包把后面函数的入参给保存起来，这样就达到了可以无限存储函数参数的目的
 * 2、当入参的数量为0时进行想要的操作，这里的操作就是累加
 */
function infiniteCurry() {
    const args = Array.from(arguments)

    return function () {
        const len = arguments.length
        console.log('arguments',arguments)
        if (len == 0) {
            return args.reduce((total, cuval) => (total += cuval), 0);
        } else {
            return infiniteCurry.apply(this, args.concat(Array.from(arguments))); // 重点
        }
    }
}

const adder = infiniteCurry(1)(2)(3,66,77);
console.log(adder());
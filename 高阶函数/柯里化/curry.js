// 函数柯里化 add(1,2,3) == add(1)(2)(3) == add(1,2)(3)
function curry1() {
    const args = [];

    function sum() {
        args.push(...Array.from(arguments));
        console.log(args);
        return sum;
    }

    sum.toString = function () {
        return args.reduce((total, curval) => total += curval, 0);
    }

    return sum;
}

var add = curry1();
add(1)(2)(3).toString()
add(1,2,3).toString()
/**
 * 手写instanceof
 * instanceof作用: 判断一个实例是否是其父类或者祖先类型的实例。
 * 思想：
 * 比较的就是左边的__proto__ === 右边的prototype
 * instanceof 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 prototype查找失败，返回 false
 */

function myInstanceof(target, origin) {
    if (!target) {
        return;
    } else {
        if (target.__proto__ === origin.prototype) {
            return true
        } 
    }

    return false;
}

console.log(myInstanceof([1,2], Array)); // true
console.log(myInstanceof([1,2], Object)); // false
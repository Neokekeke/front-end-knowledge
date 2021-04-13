// new
// new 一个对象的过程
/**
 * 
 * new的过程文字描述：
 * 创建一个空对象 obj;
将空对象的隐式原型（proto）指向构造函数的prototype。
使用 apply 改变 this 的指向
如果无返回值或者返回一个非对象值，则将 obj 返回作为新对象；如果返回值是一个新对象的话那么直接直接返回该对象。
 */

function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.say = function () {
    console.log(this.name, this.age)
}

function myNew() {
    let obj = {}; // 创建一个空对象

    const args = Array.from(arguments); // 获取函数参数数组

    const fn = args.shift(); // 取出第一个参数，默认是原型

    obj.__proto__ = fn.prototype; // 把实例的原型指向构造函数的原型

    fn.apply(obj, args); // 改变this指向，为实例obj添加方法和属性

    return obj; 
}

let obj = myNew(Person, '666', 18);
obj.say();
console.log(obj);


// new 一个对象的过程
function new2(fn, ...args) {
    const obj = {};
    obj.__proto__ = fn.prototype;
    fn.apply(obj, args);
    return obj;
}

var me = new2(Person, '666', '777')
me.say();
console.log("me", me)
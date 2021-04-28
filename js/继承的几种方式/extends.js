// js 继承有哪几种方式？

// 1、原型链继承
function A() {
    this.name = 'A';
}
A.prototype.say = function () {
    console.log('say AAA', this)
}
A.prototype.abc = '321'
var a = new A();
var a1 = new A();
a1.__proto__.abc = '123' // a1修改了原型属性，导致a的原型属性也被修改
a.say();
a.abc


// 2、借用构造函数继承
function B() {
    this.name = 'B'
    A.call(this);
}
B.prototype.run = function () {
    console.log('run BBB', this);
}
var b = new B();
b.run();
b.say(); // 无法使用到A原型的say方法
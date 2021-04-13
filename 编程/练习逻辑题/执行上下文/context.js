var a = 1

const obj = {
    a: 2,
    b: function () {
        if (a) {
            a = 100
        }
        console.log('1', a)
    },
    c: function () {
        console.log('2', this.a)
    },
    d: function () {
        console.log('3', a)
        console.log('4', this.a)
    },
}

console.log(a) // 1
obj.b() // 100
obj.c() // 2
obj.d() // 100 2

// 立即执行的函数表达式(IIFE)的函数名称跟内部变量名称重名后，
// 函数名称优先，因为函数名称是不可改变的
// 内部会静默失败，在严格模式下会报错
var a = 1;
(function a() {
  a = 2;
  console.log(a);
})(); // function a

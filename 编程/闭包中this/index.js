var a = 123

const c = () => {
    ;(function () {
        console.log(a)
        console.log(this)
    })()
}

var obj = {
    a: 'obj a',
    b: function () {
        console.log('obj', this, this.a)

        (function() {  // IIFE函数的this是指向window的无论任何时候
            console.log("IIFE", this, this.a)
        })();

        return function() {
            console.log("clouse", this, this.a)
        }
    }
}

obj.b.call(obj)()

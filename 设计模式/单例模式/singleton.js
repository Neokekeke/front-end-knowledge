/**
 * 最简单的单例模式
 * @param {} name
 */
const SingleTon = function (name) {
    this.name = name
}
SingleTon.getInstance = function (name) {
    if (!this.instance) {
        this.instance = new SingleTon(name)
    }
    return this.instance
}

var a = SingleTon.getInstance('666')
var b = SingleTon.getInstance('777')

console.log(a == b, a, b)

/**
 * es6 单例
 */

class SingleTon {
    constructor(name) {
        this.name = name
        this.instance = null
    }

    static getInstance(name) {
        if (!this.instance) {
            this.instance = new SingleTon(name)
        }
        return this.instance
    }
}

var c = SingleTon.getInstance('666')
console.log(c)
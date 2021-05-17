// 观察者模式
// 思路就是有一个被观察的对象，这个被观察对象可能有多个观察者对象
// 1、一个被观察对象
// 2、一个或多个观察者对象

/**
 * 被观察者需要两个方法
 * 1、观察者订阅集合 subscribe()
 * 2、变化通知观察者 notify()
 */

function Observer() {
    function update(data) {
        console.log('数据更新了', data)
    }

    return { update }
}

function Target() {
    let observe = []

    function subscribe(fn) {
        observe.push(fn)
    }

    function notify() {
        observe.forEach((fn) => fn())
    }

    return { subscribe, notify }
}

const o1 = new Observer()
const o2 = new Observer()
const t = new Target()
t.subscribe(() => o1.update(1))
t.subscribe(() => o2.update(2))
// 通知
t.notify();
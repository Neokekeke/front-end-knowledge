/**
 * Map的Api方法
 * set()
 * get()
 * has()
 * delete()
 * clear()
 * size 返回集合的元素个数
 * --------------
 * Map遍历方法
 * 声明一个为map的键值对数据结构,每个key值都是唯一的
Map 结构原生提供三个遍历器生成函数和一个遍历方法。
keys()：返回键名的遍历器。
values()：返回键值的遍历器。
entries()：返回所有成员的遍历器。
forEach()：遍历 Map 的所有成员。
Map 结构的默认遍历器接口（Symbol.iterator属性），就是entries方法。
 */
var map1 = new Map()
map1.set(1, 'aaa') // 1 -> aaa
map1.get(1) // 'aaa'
map1.get('1') // undefined
map1.has(1) // true

// map可以接受一个数组作为初始化，数组的每个成员都是一个个键值对
var map2 = new Map([
    [1, 'a'],
    [2, 'b'],
    [3, 'c'],
])
map2.get('1') // undefined
map2.get(1) // a

map2.set(1, '666') // 重新赋值给1
map2.get(1) // '666' 如果对同一个键多次赋值，后面的值将覆盖前面的值。

map2.size == 3 // true
map2.delete(3) // true
console.log(map2) // 2 -> b 3 -> c
map2.clear() // 清空map2
console.log(map2) // Map(0)

/************************************************************************* */

/**
 * WeakMap
WeakMap结构与Map结构类似，也是用于生成键值对的集合。
WeakMap与Map的区别有两点。
首先，WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。
其次，WeakMap的键名所指向的对象，（不计入垃圾回收机制。）

weakMap与Map的区别：
WeakMap 与 Map 在 API 上的区别主要是两个，

一是没有遍历操作（即没有keys()、values()和entries()方法），也没有size属性。

二是无法清空，即不支持clear方法。因此，WeakMap只有四个方法可用：get()、set()、has()、delete()。
 */

// WeakMap 也可以使用 set 方法添加成员
const wm1 = new WeakMap()
const key = { foo: 1 }
wm1.set(key, 2)
wm1.get(key) // 2

// WeakMap 也可以接受一个数组，
// 作为构造函数的参数
const k1 = [1, 2, 3]
const k2 = [4, 5, 6]
const wm2 = new WeakMap([
    [k1, 'foo'],
    [k2, 'bar'],
])
wm2.get(k2) // "bar"

/**
 * WeakMap 与 Map 在 API 上的区别主要是两个，
一是没有遍历操作（即没有keys()、values()和entries()方法），也没有size属性。
二是无法清空，即不支持clear方法。因此，WeakMap只有四个方法可用：get()、set()、has()、delete()。
 */

/************************************************************************* */

/**
 * Set是一种在ES6中新增的数据结构，与数组不同的是其成员无重复且无序。
 * 
与Array一样，Set本身也是一个构造函数,可以从其身上new出新对象。
size属性: 返回集合的元素个数。（类似数组的长度length）
add(value)方法: 向集合中添加一个元素value。注意：如果向集合中添加一个已经存在的元素，不报错但是集合不会改变。
delete(value)方法: 从集合中删除元素value。
has(value)方法: 判断value是否在集合中，返回true或false.
clear()方法: 清空集合。
————————————————
 */
let mySet = new Set([1, 2, 3, 2, 1])
console.log(mySet.size) //3
console.log(...mySet) //1,2,3
mySet.add(4)
console.log(mySet.size) //4
mySet.delete(3)
console.log(mySet.size) //3
console.log(mySet.has(2)) //true
mySet.clear()
console.log(mySet.size) //0

/**
 * Set遍历插入顺序
 * keys()：返回一个包含集合中所有键的迭代器
values()：返回一个包含集合中所有值得迭代器
entries()：返回一个包含Set对象中所有元素得键值对迭代器
forEach(callbackFn, thisArg)：用于对集合成员执行callbackFn操作，如果提供了 thisArg参数，回调中的this会是这个参数，没有返回值
 */

let mySet = new Set([1, 2, 3, 2, 1])
console.log(mySet.keys()) // SetIterator {1, 2, 3}
console.log(mySet.values()) // SetIterator {1, 2, 3}
console.log(mySet.entries()) // SetIterator {1, 2, 3}
mySet.forEach(function (i) {
    console.log(i + this) // 11,12,13
}, 10)

/**
 * WeakSet
 * 成员只能是对象，而不能是其他类型的值。 可以接受一个数组或类似数组的对象作为参数。
 * 没有size和无法被遍历
 */
const ws = new WeakSet()
const obj = {}
const foo = {}

ws.add(window)
ws.add(obj)

ws.has(window) // true
ws.has(foo) // false

ws.delete(window)
ws.has(window) // false

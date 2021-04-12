// 数组扁平化
// 5种方法 
// 思路：遍历数组arr，若arr[i]为数组则递归遍历，直至arr[i]不为数组然后与之前的结果concat。 

// 最牛逼的两种解法
// 最牛逼的两种解法
// 最牛逼的两种解法 join & split || toString & split

//-----------------------------------------------------------------------
// join & split
function joinAndSplit(arr) {
    return arr.join(',').split(',').map(item => Number(item));
}
console.log(joinAndSplit([1, 2, [5, 6, 7, [8, 9, 10]]]));

//-----------------------------------------------------------------------

// toString & split
function toStringAndSplit(arr) {
    return arr.toString().split(',').map(item => Number(item));
}
console.log(toStringAndSplit([1, 2, [5, 6, 7, [8, 9, 10, [666,[777,[10]]]]]]));

//-----------------------------------------------------------------------

// 数组拓展展开符，es6的扩展运算符能将二维数组变为一维，一直展开到一维数组为止
function expander(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }

    return arr;
}

console.log(flatten([1, 2, [5, 6, 7, [8, 9, 10]]]));

// 递归
function recursion(arr) {
    let temp = [];
    arr.map(item => {
        if (Array.isArray(item)) {
            // temp = temp.concat(item) 等价于 => temp.push(...flatern2(item));
            // [1,2].concat([3]) <=> [1,2].concat(3) 写法
            temp.push(...recursion(item));
        } else {
            temp.push(item);
        }
    });

    return temp;
}

console.log(recursion([1, 2, [5, 6, 7, [8, 9, 10]]]));
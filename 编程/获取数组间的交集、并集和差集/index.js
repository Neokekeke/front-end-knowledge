// 思路：
// 交集 ==> 多个数组之间共用的集合
// 并集 ==> 多个数组共用和非共有集合
// 差集 ==> 多个数组之间不共有的集合

// 交集
function getCrossArr() {
    const args = Array.from(arguments)
    if (args.length == 0 || args.length == 1) {
        return args[0]
    } else {
        const cross_obj = {};
        const cross_arr = [];
        const arr = args;
        const len = arr.length
       
        args.map(arg => {
            arg.map(item => {
                if (!cross_arr.includes(item)) {
                    cross_arr.push(item);
                } 
            })
        });

        console.log('cross', arr, cross_arr)
    }
}
getCrossArr([1, 2], [1, 2, 3], [3, 2, 66])

// 并集
function getCombineArr() {
    const args = Array.from(arguments)
    if (args.length == 0 || args.length == 1) {
        return args[0]
    } else {
        return Array.from(new Set([...args].flat(Infinity))) // 扁平化数组
    }
}
getCombineArr([1, 2], [1, 2, 3], [3, 2, 66]) // [1, 2, 3, 66]

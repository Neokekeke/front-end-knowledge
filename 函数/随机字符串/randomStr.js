// 原理还是使用随机数，给定一个范围的值，从中选值后拼接
function getRandomStr(len) {
    const source_str = 'abcdefghijklmnopqrstuvwxyz0123456789'
    const source_len = source_str.length
    let str = '';
    for (let i = 0; i < len; i += 1) {
        str += source_str.charAt(Math.floor(Math.random() * source_len));
    }

    return str;
}

getRandomStr(10);
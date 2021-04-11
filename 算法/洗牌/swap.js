// 主要思路还是使用随机数
// 洗牌
function swap(arr) {
    const ranArr = [];
    let len = arr.length;
    while(len > 0) {
        ranArr.push(arr.splice(Math.floor(Math.random() * len--), 1)[0])
    }

    console.log(ranArr);
}

swap([1,3,2,166,233,321])
swap([1,3,2,166,233,321])
swap([1,3,2,166,233,321])
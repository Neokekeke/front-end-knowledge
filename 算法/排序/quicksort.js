// 快排
function quickSort(arr) {
    if (arr.length <= 0) {
        return arr;
    }

    const middleIndex = Math.floor(arr.length / 2);
    const middle = arr.splice(middleIndex, 1)[0];

    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i += 1) {
        if (middle > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat(middle, quickSort(right));
}

console.log(quickSort([3,1,2,66,50,10,2]))
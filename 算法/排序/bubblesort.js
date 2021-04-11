// 冒泡排
function bubbleSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr.length; j += 1) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;
}

console.log(bubbleSort([3,1,2,66,50,10,2]));

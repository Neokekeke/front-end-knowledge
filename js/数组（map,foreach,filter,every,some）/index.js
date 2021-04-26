const list = [1, 2, 3];

const foreach = list.forEach((item, index, arr) => {
    console.log('foreach', item, index, arr);
})

const map = list.map((item, index, arr) => {
    console.log('map', item, index, arr);
})

const filter = list.filter((item, index, arr) => {
    console.log('filter', item, index, arr);
    return item > 1;
})

const every = list.every((item, index, arr) => {
    console.log('every', item, index, arr);
    return item > 1;
})

const some = list.some((item, index, arr) => {
    console.log('some', item, index, arr);
    return item > 1;
})
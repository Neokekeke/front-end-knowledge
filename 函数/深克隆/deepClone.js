// 深克隆的原理
// 深层遍历对象或者数组，如果子对象或者数组有嵌套则继续递归
import { checkType } from '../../utils/checkType'

function deepClone(params) {
    let cloneData;
    if (checkType(params) == 'Object') {
        cloneData = {};
        for (let key in params) {
            if (params[key] == 'Object' || params[key] == 'Array') {
                cloneData[key] = deepClone(params[key]);
            } else {
                cloneData[key] = params[key];
            }
        }
    } else if (checkType(params) == 'Array') {
        cloneData = [];
        params.map(item => {
            if (item == 'Object' || item == 'Array') {
                cloneData.push(deepClone(item));
            } else {
                cloneData.push(item);
            }
        });
    } else {
        cloneData = params;
    }

    return cloneData;
}
var obj = {
    name: '213',
    super: {
        name: '321',
        super: {
            name: '666'
        }
    }
}
var obj2 = deepClone(obj);
console.log(obj2, obj2 == obj);

var arr = [1,2,[3,66,[77]]];
var arr2 = deepClone(arr);
console.log(arr2, arr2 == arr);
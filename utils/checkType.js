// 检查变量类型
function checkType(type) {
    const _type = Object.prototype.toString.call(type).slice(8, -1);
    // console.log('params type---', _type)
    return _type;
}

export {
    checkType
}
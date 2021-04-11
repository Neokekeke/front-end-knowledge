console.log('defer js');

const borderBox = getClassName('border-box');
const contentBox = getClassName('content-box');
console.log('borderBox', borderBox.clientWidth, contentBox.clientWidth)
// borderBox.innerHTML = 'box width: ' + borderBox.clientWidth + borderBox.pad

function getClassName(type) {
    return document.getElementsByClassName(type)[0];
}
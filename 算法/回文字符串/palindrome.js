import {
    checkType
} from "../../utils/checkType.js";

// 判断字符串是否是回文字符串
function checkStringIsPalindrome(str) {
    if (checkType(str) !== "String") {
        return;
    }
    const reverse = str.trim().split("").reverse().join("");
    console.log(`${str} === ${reverse}`, str === reverse)
    return reverse === str;
}

checkStringIsPalindrome("php")
checkStringIsPalindrome("phpaaa")
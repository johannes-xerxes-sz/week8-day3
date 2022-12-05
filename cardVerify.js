function cardVerify(text) {
let regex  = /(^[4|5|6]\d{3})+?-?(\d{4})+?-?(\d{4})+?-?(\d{4})$/g
let obj = text
let res = regex.test(obj)
console.log(obj)
return res

}
console.log(cardVerify('4123456789123456'));
console.log(cardVerify('5123-4567-8912-3456'));
console.log(cardVerify('61234-567-8912-3456'));
console.log(cardVerify('4123356789123456'));
console.log(cardVerify('5133-3367-8912-3456'));
console.log(cardVerify('5123 - 3567 - 8912 - 3456'));
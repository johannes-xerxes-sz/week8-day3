function cardVerify(text) {
    let regex  = /^(?=[456])(?!.*(\d)(?:-?\1){3})(?:\d{4}(?:-?\d{4}){3})$/g , res = regex.test(text); return res
    }
    console.log(cardVerify('412')); // false 3 digits
    console.log(cardVerify('412345678912345')); // false  15 digits
    console.log(cardVerify('4123456789123456')); // true
    console.log(cardVerify('41234567891234567')); // false 17 digits
    console.log(cardVerify('5123-4567-8912-3456')); // true
    console.log(cardVerify('61234-567-8912-3456')); // false 5 digits at start
    console.log(cardVerify('4123356789123456')); // true
    console.log(cardVerify('5133-3367-8912-3456')); // true
    console.log(cardVerify('5123 - 3567 - 8912 - 3456')); // false

    console.log(cardVerify('5133-3367-4444-4444')); // true

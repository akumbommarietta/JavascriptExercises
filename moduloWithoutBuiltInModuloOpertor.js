/*
Write a function called "modulo".

Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.

It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

Notes:
* Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
* 0 % ANYNUMBER = 0.
* ANYNUMBER % 0 = NaN.
* If either operand is NaN, then the result is NaN.
* Modulo always returns the sign of the first number.

var output = modulo(25, 4);
console.log(output); // --> 1
*/

function modulo(num1, num2) {
    // your code here
    var mod = 0;
    var product = 1;

    var modWithNegativeNumbers = function (val1, val2) {
        var mod = 0;
        product = 1;
        if (val1 < 0 && val2 > 0) {
            var positiveVal1 = Math.abs(val1);
            if (val2 > positiveVal1) {
                return val1;
            } else {
                var index = 1;
                product = val2;
                while (product <= positiveVal1) {
                    mod = product - positiveVal1;
                    index++;
                    product = index * val2;
                }
            }
        } else if (val1 > 0 && val2 < 0) {
            var positiveVal2 = Math.abs(val2);
            if (positiveVal2 > val1) {
                return val1;
            } else {
                var index = 1;
                product = positiveVal2;
                while (product <= val1) {
                    mod = val1 - product;
                    product = index * positiveVal2;
                    index++;
                }
            }
        } else {
            var positiveVal1 = Math.abs(val1);
            var positiveVal2 = Math.abs(val2);
            if (positiveVal2 > positiveVal1) {
                return val1;
            } else {
                var index = 1;
                while (product <= positiveVal1) {
                    mod = val1 - product;
                    index++;
                    product = index * positiveVal2;
                }
            }
        }
        return mod;
    }

    var modWithNoNegativeNumber = function (val1, val2) {
        var mod = 0;
        var product = 1;
        if (val1 < val2) {
            return val1;
        } else if (val1 === val2) {
            return 0;
        } else {
            var index = 1;
            while (product <= val1) {
                mod = val1 - product;
                index++;
                product = index * val2;
            }
        }
        return mod;
    }

    if (isNaN(num1) || isNaN(num2) || num2 === 0) {
        return NaN;
    }
    if (num1 === 0 || num1 === num2) {
        return 0;
    }
    if (num1 < 0 || num2 < 0) {
        mod = modWithNegativeNumbers(num1, num2);
    }
    if (num1 > 0 && num2 > 0) {
        mod = modWithNoNegativeNumber(num1, num2);
    }

    return mod;
}

var output = modulo(25, 4);
console.log(output);



///////////////////////
/// ASSERTIONS ///////
/////////////////////
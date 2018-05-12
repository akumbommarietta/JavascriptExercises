/*

Write an "assertArraysEqual" function from scratch, from memory.

Please DO NOT simply PASTE in from before.

If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

Then use your assertion function to thoroughly test BOTH the functions in the provided code.

Use categorical reasoning to consider all the useful cases.

Debug the code under test, if necessary.
*/

// Your assertion function:

function assertArraysEqual(actual, expected, testName) {
    // your code here
    var areEqualItems = areEqualArrays(actual,expected);
    var areEqualLength = actual.length === expected.length;
    if (areEqualItems && areEqualLength) {
        console.log('passed');
    } else {
        console.log('FAILED [' + testName + '] Expected "' + expected + '" but obtained "' + actual + '".');
    }
}
 

// Your code under test:
function map(array, callbackFunction) {
    var newArray = [];
    array.forEach(function (element) {
        newArray.splice(newArray.length, 0 , callbackFunction(element));
    });
    return newArray;
}

function areEqualArrays(arr1,arr2){
    var isTrue = true;
    for(var i = 0 ; i < arr1.length ; i++){
        if(arr1[i] > arr2[i] || arr1[i] < arr2[i]){
            isTrue = false;
            break;
        }
    }
    return isTrue;
}

function cubeAll(numbers) {
    return map(numbers, function (n) {
        return n * n * n;
    });
}

function cube(n) {
    return n * n * n;
}

// Your calls to 'assertArraysEqual':
assertArraysEqual(map([2, 3, 4], cube), [8, 27, 64], 'should return the cube of every element in the array');
assertArraysEqual(map([-2, 0, 4], cube), [-8, 0, 64], 'should return the cube of every element in the array');
assertArraysEqual(map([0.2, 3, 4], cube), [0.008000000000000002, 27, 64], 'should return the cube of every element in the array');
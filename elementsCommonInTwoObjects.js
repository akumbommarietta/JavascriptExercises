/// get items found in two objects
  /// first convert the object to JSON string
    ///Convert the string to an array
      /// Create an empty array to hold values which are found in both arrays
        /// Get the first item of one array is found in the other
            /// then get the item if it exists.
            /// continue the check for the other items
                /// return the values containing elements found in both arrays.
                  /// if the array is not empty, then convert it to an object and return
                    /// return null for an empty array.

function getItemsFoundInTwoObjects(obj1, obj2){
    var str1 = convertObjectToString(obj1);
    var str2 = convertObjectToString(obj2);

    return getElementsFromString(str1,str2);
}

function convertObjectToString(obj){
    return JSON.stringify(obj);
}

function getElementsFromString(str1, str2){
    var arr1 = convertStringToArray(str1);
    var arr2 = convertStringToArray(str2);

    return getElementsFromArray(arr1, arr2);
}

function convertStringToArray(str){
    str = removeBracesFromString(str);
    var arr = str.split(',');
    //console.log(arr);

    return arr;
}

function removeBracesFromString(str){
   var pattern = '{|}';
   var regexp = new RegExp(pattern , 'g');
   str = str.replace(regexp,'');
  // console.log(str);
   return str;
}

function getElementsFromArray(arr1, arr2){
    var arrayOfCommonElements = [];
    var len = arr1.length >= arr2.length ? arr1.length : arr2.length;
    if(arr1.length === 0 || arr2.length === 0){
        return arrayOfCommonElements;
    }
   // console.log(len);
    for(var i = 0 ; i < len ; i++ ){
       // console.log(arr1[i] + ' : ' + arr2[i]);
        for(var j = 0 ; j < len ; j++){
            if(arr1[i] === arr2[j]){
                arrayOfCommonElements.splice(len, 0, arr1[i]);
            }
        }
    }
    return convertArrayToObject(arrayOfCommonElements);
}

function convertArrayToObject(arrayOfCommonElements){
    var objOfCommonElements = { };
    arrayOfCommonElements.forEach(element => {
        var tempArray = element.toString().split(':');
        objOfCommonElements[tempArray[0]] = tempArray[1];
    });
    return objOfCommonElements;
}

var obj1 = {name : 'Marietta', age : 22, height : 1.62};
var obj2 = {age: 23 , height : 1.62};
console.log('elements common to both ' + JSON.stringify(obj1) + ' and ' + JSON.stringify(obj2) + ' is/are: ');
console.log(getItemsFoundInTwoObjects(obj1,obj2));



////////////////////////////////
/////////  ASSERTIONS /////////
//////////////////////////////

function assertConvertArrayToObjectIsNotNull(actual,expected,testName){
    var objKeys = JSON.stringify(Object.keys(actual));
    if(objKeys.length === 0){
        console.log('FAILED [ '+ testName + ' ] Expected ' + expected + ' but got ' + actual);
    }else{
        console.log('passed!');
    }
}
function assertConvertStringToArrayIsNotNull(actual, expected, testName) {
     if (actual.length === 0) {
         console.log('FAILED [ ' + testName + ' ] Expected ' + expected + ' but got ' + actual);
     } else {
         console.log('passed!');
     }
}
function assertConvertObjectToStringIsNotNull(actual, expected, testName) {
    if (actual.length === 0) {
        console.log('FAILED [ ' + testName + ' ] Expected ' + expected + ' but got ' + actual);
    } else {
        console.log('passed!');
    }
}

var obj = {
    age: 23,
    height: 1.62
};
var str = "{age: 23 , height : 1.62}";
var arr = [{
    age: 23,
    height: 1.62
}]
assertConvertObjectToStringIsNotNull(convertObjectToString(obj2),str,'it should convert string to object');
assertConvertArrayToObjectIsNotNull(convertArrayToObject(arr),obj, 'it should convert array to object');
assertConvertObjectToStringIsNotNull(convertObjectToString(obj),str, 'it should convert object to string');
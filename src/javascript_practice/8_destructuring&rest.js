const array = ['thing', 42, false, {key: 'value'}, [1, 2, 3, 4, undefined], NaN];

let stringVar = array [0];
let numVar = array[1];
let objVar = array[3];
let nanVar = array[array.length - 1];

console.log(stringVar, numVar, objVar, nanVar);


//destructuring the above to simplify the action codes above "let" variables

let [string, num, , obj, , nan] = array;
console.log(string, num, obj, nan);

//spread operators
let newArr = ['a', 1, undefined, ...array];
console.log(newArr);

/* result: thing 42 { key: 'value' } NaN
[
    'a',
    1,
    undefined,
    'thing',
    42,
    false,
    { key: 'value' },
    [ 1, 2, 3, 4, undefined ],
    NaN
  ]   */

  //practice of the above new array to play with
  const testObj = {
      testString: 'stringy thingy',
      testNum: 2, 
      testBool: true, 
      testObject: {key: 'waluigi'},
      testArray: [1, 2, 3, 4, undefined],
      testNaN: NaN
  }

  //long way
  const objString = testObj.testString;
  const objNum = testObj.testNum;
  const objObj = testObj.testObject;
  const objNan = testObj.testNaN;

  console.log(objString, objNum, objObj, objNan)

  //using destructuring to do the same thing as the code above
  let {testString, testNum, testObject, testNaN} = testObj;
  console.log(testString, testNum, testObject, testNaN);

let newObj = {nweString: 'more strings', anotherString: 'this is a string', ...testObj};
console.log(newObj);

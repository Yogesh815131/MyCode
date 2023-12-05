let str = "Yogesh Jadhav"
console.log(str.length);

//slice() Method 
console.log(str.slice(0, 5));//start index inclusive and end index exclusive
//minuse index
console.log(str.slice(-13, -7));//-13 index inclusive and -7 index exclusive
//substring() method
console.log(str.substring(-5, 6));// '-'index tread as a 0
//substr() method
console.log(str.substr(7, 6)); //first parm start position string and last parm string length

//replace() method

//  The replace() method does not change the string it is called on.
// The replace() method returns a new string.
// The replace() method replaces only the first match
// If you want to replace all matches, use a regular expression with the /g flag set. See examples below.
let text = "Mumbai is a great city, i like mumbai city, Mumbai is big city "
let str1 = str.replace("Yogesh", "Ajay");
console.log(str1);
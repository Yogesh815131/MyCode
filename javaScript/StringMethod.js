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
let text1 = "Mumbai is a great city, i like mumbai city, Mumbai is big city "
let text2 = text1.replace("Mumbai", "Pune");//replace only first
console.log(text2);
let text3 = text1.replace(/Mumbai/g, "Pune");//follow case sensitive
console.log(text3);
let text4 = text1.replace(/mumbai/ig, "Pune");//replace all not follow case sensitive
console.log(text4);

//ReplaceAll() method
console.log(text1.replaceAll("mumbai", "Nashik"));//follow case sensitive
console.log(text1.replaceAll(/mumbai/ig, "Nashik"));//not follow case sensitive

//toUpperCase() and toLowerCase() method
console.log(text1.toUpperCase());
console.log(text1.toLowerCase());

//concat() method
let fName = "Yogesh";
let lName = "Jadhav";
let fullName = fName.concat(" ", lName);
console.log("Full Name",fullName);

// trim() method
let strTrim = "       hello world      ";
console.log(strTrim.trim());

//trimStart() method
console.log(strTrim.trimStart());
//trimEnd() method
console.log(strTrim.trimEnd());

// split() method
let bDate = "12/01/2001";
let year = bDate.split("/");
console.log(year);
console.log(year[2]);
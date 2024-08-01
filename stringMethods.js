// 2. Create a detailed note and try out at least one example for each 
// of these string methods (create one JS file named stringMethods)?

let str1 = "Hello";
let str2 = "World";
let combinedStr = str1.concat(" ", str2);
console.log("concat:", combinedStr); // Output: "Hello World"

// 2. includes - Determines whether one string may be found within another string
let includesStr = str1.includes("ell");
console.log("includes:", includesStr); // Output: true

// 3. indexOf - Returns the index within the calling string of the first occurrence of the specified value
let indexOfStr = str1.indexOf("l");
console.log("indexOf:", indexOfStr); // Output: 2

// 4. lastIndexOf - Returns the index within the calling string of the last occurrence of the specified value
let lastIndexOfStr = str1.lastIndexOf("l");
console.log("lastIndexOf:", lastIndexOfStr); // Output: 3

// 5. padEnd - Pads the current string with another string until the resulting string reaches the given length
let paddedEndStr = str1.padEnd(10, ".");
console.log("padEnd:", paddedEndStr); // Output: "Hello....."

// 6. padStart - Pads the current string with another string until the resulting string reaches the given length
let paddedStartStr = str1.padStart(10, ".");
console.log("padStart:", paddedStartStr); // Output: ".....Hello"

// 7. repeat - Constructs and returns a new string which contains the specified number of copies of the string on which it was called
let repeatedStr = str1.repeat(3);
console.log("repeat:", repeatedStr); // Output: "HelloHelloHello"

// 8. replace - Returns a new string with some or all matches of a pattern replaced by a replacement
let replaceStr = str1.replace("Hello", "Hi");
console.log("replace:", replaceStr); // Output: "Hi"

// 9. search - Executes a search for a match between a regular expression and this String object
let searchStr = str1.search("ell");
console.log("search:", searchStr); // Output: 1

// 10. slice - Extracts a section of a string and returns it as a new string
let sliceStr = str1.slice(1, 4);
console.log("slice:", sliceStr); // Output: "ell"

// 11. split - Splits a String object into an array of strings by separating the string into substrings
let splitStr = str1.split("l");
console.log("split:", splitStr); // Output: ["He", "", "o"]

// 12. startsWith - Determines whether a string begins with the characters of a specified string
let startsWithStr = str1.startsWith("He");
console.log("startsWith:", startsWithStr); // Output: true

// 13. substr - Returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards
let substrStr = str1.substr(1, 3);
console.log("substr:", substrStr); // Output: "ell"

// 14. substring - Returns the part of the string between the start and end indexes, or to the end of the string
let substringStr = str1.substring(1, 4);
console.log("substring:", substringStr); // Output: "ell"

// 15. toLowerCase - Returns the calling string value converted to lower case
let lowerCaseStr = str1.toLowerCase();
console.log("toLowerCase:", lowerCaseStr); // Output: "hello"

// 16. toUpperCase - Returns the calling string value converted to upper case
let upperCaseStr = str1.toUpperCase();
console.log("toUpperCase:", upperCaseStr); // Output: "HELLO"

// 17. trim - Removes whitespace from both ends of a string
let strWithWhitespace = "  Hello  ";
let trimmedStr = strWithWhitespace.trim();
console.log("trim:", trimmedStr); // Output: "Hello"

// 18. trimEnd (or trimRight) - Removes whitespace from the end of a string
let trimmedEndStr = strWithWhitespace.trimEnd();
console.log("trimEnd:", trimmedEndStr); // Output: "  Hello"

// 19. trimStart (or trimLeft) - Removes whitespace from the start of a string
let trimmedStartStr = strWithWhitespace.trimStart();
console.log("trimStart:", trimmedStartStr); // Output: "Hello  "

// 20. charAt - Returns the character at the specified index
let charAtStr = str1.charAt(1);
console.log("charAt:", charAtStr); // Output: "e"

// 21. charCodeAt - Returns the Unicode value of the character at the specified index
let charCodeAtStr = str1.charCodeAt(1);
console.log("charCodeAt:", charCodeAtStr); // Output: 101
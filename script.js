function firstNonRepeatedChar(str) {
 // Write your code here
	let res = null;
	for (let char of str) {
    if (
        str.indexOf(char) ===        str.lastIndexOf(char)
    ) {
        res = char;
        break;
    }
}
//console.lo("Input: " + str);
return res;
}
const input = prompt("Enter a string");

alert(firstNonRepeatedChar(input)); 
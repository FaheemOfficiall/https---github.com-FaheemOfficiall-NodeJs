// Q12)write a program to reverse the string and print in console.

//   str="hello junaid"   
//   result should be "dianuj olleh"




let str = "hello junaid";
let revStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  revStr += str[i];
}

console.log(revStr); // Output: dianuj olleh

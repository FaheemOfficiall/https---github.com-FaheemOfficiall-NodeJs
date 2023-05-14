let userName = 'Faheem11';

function showMessage() {
  let userName = "Khan"; // declare a local variable

  let message = `Hello,  ${userName}`; // Khan
  console.log(message);
}

// the function will create and use its own userName
showMessage();

console.log( userName ); // Faheem, unchanged, the function did not access the outer variable
console.log( userName ); // Faheem, unchanged, the function did not access the outer variable

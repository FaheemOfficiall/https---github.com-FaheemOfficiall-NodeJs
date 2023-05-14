let userName = 'Faheem';

function showMessage() {
  userName = "Khan"; // (1) changed the outer variable

  let message = `Hello, ${userName}`;
  console.log(message);
}

console.log( userName ); // Faheem before the function call

showMessage();

console.log( userName ); // Khan, the value was modified by the function
function checkAge(age) {
    if (age >= 18) {
      return true ;
    } else {
      return console.log('Do you have permission from your parents?');
    }
  }
  
  let age = 18;
  
  if ( checkAge(age) ) {
    console.log( 'Access granted' );
  } else {
    console.log( 'Access denied' );
  }
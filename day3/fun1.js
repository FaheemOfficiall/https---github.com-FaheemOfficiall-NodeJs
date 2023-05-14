console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");
console.log("7");


let arrow = (i)=>{
    for (i = 0; i <=10; i++) {
        console.log("Faheem Khan = "+i);
        
    }
}
let expresion=function (i) {
    for (i = 0; i <=10; i++) {
        console.log("Faheem Khan = "+i);
        
    }
    
}

function Namefunc(i) {
    for (i = 0; i <=10; i++) {
        console.log("Faheem Khan = "+i);
        
    }
    
}
// arrow("Faheem Khan");
// arrow("Matin Khan");
// arrow("Qayyum Khan");
// expresion("Mujju Don");
// expresion("Hello Don");
// expresion("Hello ji Don");
// Namefunc("Rehan Shaikh");
// Namefunc("Muntu Shaikh");
// Namefunc("Mustu Shaikh");


// even odd

let evenOrOdd=(x)=>{
   if (x%2 ==0) {
    console.log(`Given ${x} Number Is Even`);
    
   }else{
    console.log(`Given ${x} Number Is  Odd`);

   }
}

// evenOrOdd(1)

// 3 number greater

let minNum=(...i)=>{
  
  console.log(Math.min(...i));

}
minNum(1,2,3)

let maxNum=(...
    i)=>{
  
    console.log(Math.max(...i));
  
  }

  maxNum(1,3,1,55,44,11);

  function square(number) {
      let x=number ** 2;
    return console.log(x);
  }
  square(2) ;

//   const areaCircle=(i)=>{
//   console.log( Math.PI(i)); 
//   }

//   areaCircle(2);

  function circleArea(radius) {
    return console.log(Math.PI * radius ** 2);

  }
circleArea  (2);
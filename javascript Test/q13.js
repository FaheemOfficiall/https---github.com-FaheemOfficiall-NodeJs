// var characters = [
//     {
//       name: 'Harry',
//       designation: "Student"
//     },
//     {
//       name: 'Dumbledore',
//       designation: "Headmaster"
//     },
//     {
//       name: 'Snape',
//       designation: "Professor"
//     },
//     {
//       name: 'Hermione',
//       designation: "Student"
//     }
//      ]
// destructure the object and print it in console

// const { name } = require("../day4/localModules/main");

var characters = [
        {
          name: 'Harry',
          designation: "Student"
        },
        {
          name: 'Dumbledore',
          designation: "Headmaster"
        },
        {
          name: 'Snape',
          designation: "Professor"
        },
        {
          name: 'Hermione',
          designation: "Student"
        }
         ]

         for (let {name,designation} of characters ){
         console.log(`Employee Name Is${name} And Designation Is ${designation}`);
            
         }
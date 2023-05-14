const fs = require("fs")

fs.writeFileSync("1.txt", "first File ")
fs.writeFileSync("2.txt", " second File ")
fs.writeFileSync("3.txt", " third File ")
fs.writeFileSync("4.txt", " fourth File ")
fs.writeFileSync("5.txt", " fifthcls File ")


const fileToCopy = ['1.txt','2.txt','3.txt','4.txt','5.txt']

const final = 'final.txt'
const writeStream = fs.createWriteStream(final)

fileToCopy.forEach((file)=>{
    const readStream = fs.createReadStream(file)

    readStream.on('data',(chunk)=>{
        writeStream.write(chunk)
    });
    
    readStream.on('end',()=>{
        console.log(`content of ${file } has been Copied Succesfully to ${final}`);
    })
    
    // Once all files have been copied, close the write stream
    // writeStream.end(() => {
    //     console.log(`All files have been copied to ${file}`);
    //   });
});







// console.log(_1);


    // fs.appendFileSync('final.txt',_1[_2])

// const arr=[]
// for (i=1; i<=5; i++) {
// //     // const element = array[index];
//     // fs.appendFileSync('final.txt',`_${i}`)
    

    
// }

// console.log(arr);
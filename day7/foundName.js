
const fs = require('fs')

const data = fs.readFileSync('./name.txt','utf-8')
//  const nameFound=data.includes('junaid')

if(data.includes("824522413550")){
    console.log(`data  Found`);
}else{
    console.log(`data Not Found`);
}

//  console.log(nameFound);




const foundName= fs.readFileSync("./acces.txt",'utf-8')

const enterName = 'f'

if (foundName.includes(enterName)) {
    console.log(`${enterName} Name Was Found In This List`);
    
}else{
    console.log(`${enterName} Name Was Not Found In This List`);
}

if (foundName.startsWith(enterName)) {
    console.log(`${enterName} Name Was Found In This List`);
    
}else{
    console.log(`${enterName} Name Was Not Found In This List`);
}
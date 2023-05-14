const isMultiple=(num)=>{
    if(num%3===0){
        console.log(`This Number ${num} is multiple of 3`);
    }else if(num%7===0){
        console.log(`This Number ${num} is multiple of 7`);
    }else{
        console.log(`This Number ${num} is not multiple of 3 or 7`);
    }
    
}

isMultiple(11)
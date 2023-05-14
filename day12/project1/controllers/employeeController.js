
let mobile={comName:"samsung",model:"nokia"}
const getemployee = (req, res) => {
    let id = req.params.id;
    const name=req.params.name;
    
    console.log(id);  

    if (id == 1 ) {
        res.json(mobile)
        // fetch().then((res)=>{res.json()}).then((res)=>{})
        // res.send(`<h1>get id =1 employee</h1><h2> Name Is${name} ${JSON.stringify(mobile)}</h2>`)
    } else if (id == 2) {
        res.send(`<h1>get id= 2 employee</h1><h2> Name Is${name}</h2>`)
    } else if (id == 3) {
        res.send(`<h1>get id= 3 employee</h1><h2> Name Is${name}</h2>`)

    } else {
        res.send("<h1>invalid path</h1>")

    }

}


const postemployee = (req, res) => {

    // res.send("<h1>post employee</h1>")
    let id = req.params.id;
    if (id === 1) {
        res.send("<h1>post id =1 employee</h1>")
    } else if (id === 2) {
        res.send("<h1>post id= 2 employee</h1>")
    } else if (id === 3) {
        res.send("<h1>post id= 3 employee</h1>")

    } else {
        res.send("<h1>invalid path</h1>")

    }


}


const putemployee = (req, res) => {

    // res.send("<h1>put employee</h1>")
        let id=req.params.id;
    if (id===1) {
        res.send("<h1>put id =1 employee</h1>")
    }else if (id===2) {
        res.send("<h1>put id= 2 employee</h1>")
    }else if (id===3) {
        res.send("<h1>put id= 3 employee</h1>")
        
    }else{
        res.send("<h1>invalid path</h1>")

    }


}

const patchemployee = (req, res) => {

    // res.send("<h1>patch employee</h1>")
    let id=req.params.id;
    if (id===1) {
        res.send("<h1>patch id =1 employee</h1>")
    }else if (id===2) {
        res.send("<h1>patch id= 2 employee</h1>")
    }else if (id===3) {
        res.send("<h1>patch id= 3 employee</h1>")
        
    }else{
        res.send("<h1>invalid path</h1>")

    }


}

const deleteemployee = (req, res) => {

    // res.send("<h1>delete employee</h1>")
    let id=req.params.id;
    if (id===1) {
        res.send("<h1>delete id =1 employee</h1>")
    }else if (id===2) {
        res.send("<h1>delete id= 2 employee</h1>")
    }else if (id===3) {
        res.send("<h1>delete id= 3 employee</h1>")
        
    }else{
        res.send("<h1>invalid path</h1>")

    }


}

export { getemployee, postemployee, putemployee, patchemployee, deleteemployee }
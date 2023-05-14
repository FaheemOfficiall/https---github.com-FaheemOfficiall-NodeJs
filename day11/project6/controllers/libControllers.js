const getlib = (req, res) => {
    res.send("<h1>get lib</h1>")
}

let postlib = (req, res) => {
    res.send("<h1>post lib</h1>")
}

let putlib = (req, res) => {
    res.send("<h1>put lib</h1>")
}

let patchlib = (req, res) => {
    res.send("<h1>patch lib</h1>")
}

let deletelib = (req, res) => {
    res.send("<h1>delete lib</h1>")
}


module.exports = { getlib, postlib, putlib, patchlib, deletelib };
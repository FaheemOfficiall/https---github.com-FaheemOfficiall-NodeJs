let getteacher = (req, res) => {
    res.send("<h1>get teacher</h1>")
}

let postteacher = (req, res) => {
    res.send("<h1>post teacher</h1>")
}

let putteacher = (req, res) => {
    res.send("<h1>put teacher</h1>")
}

let patchteacher = (req, res) => {
    res.send("<h1>patch teacher</h1>")
}

let deleteteacher = (req, res) => {
    res.send("<h1>delete teacher</h1>")
}


module.exports = { getteacher, postteacher, putteacher, patchteacher, deleteteacher };
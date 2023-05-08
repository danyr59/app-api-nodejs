const pathInitial =  (req, res) =>{
    res.json({msg: "hola mundo en express"})
}

const pathInitialPost = (req,res) => {
    console.log(req.body)
    res.json({msg: "response of type post"})
}

export {
    pathInitial,
    pathInitialPost

}
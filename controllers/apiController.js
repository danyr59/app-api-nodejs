const getProducts =  (req, res) =>{
    res.json({msg: "hola mundo en express"})
}

const getProduct = (req,res) => {
    console.log(req.body)
    res.json({msg: "get"})
}
const createProduct = (req,res) => {
    console.log(req.body)
    res.json({msg: "post"})
}

const updateProduct = (req,res) => {
    console.log(req.body)
    res.json({msg: "post"})
}

const deleteProduct = (req,res) => {
    console.log(req.body)
    res.json({msg: "post"})
}


export {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct

}
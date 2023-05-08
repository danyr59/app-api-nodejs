import { Product } from "../models/product.js"
import { ProductService } from "../service/productService.js"

//instancia del provedor de servicios
const productService = new ProductService()



const getProducts =  (req, res) =>{

    res.status(200).send(productService.listAll())
}

const getProduct = (req,res) => {
    const {id} = req.params
    res.status(200).json(productService.findById(id))
}
const createProduct = (req,res) => {
    const {id, name} = req.body
    const p = new Product(id, name)
    productService.save(p)
    res.status(200).json(p)
}

const updateProduct = (req,res) => {
    const {id} = req.params
    const {name} = req.body
    
    if(productService.findById(id) == undefined){
        res.status(404).end()
        return;
    }
        
    const p = productService.update(new Product(id,name))
    res.status(200).json(p)
}

const deleteProduct = (req,res) => {
    const {id} = req.params
    
    if(productService.findById(id) == undefined){
        res.status(404).end()
        return;
    }
    productService.delete(id)
    res.status(200).end()
}


export {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct

}
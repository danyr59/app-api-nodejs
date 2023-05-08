//import Product from "../models/product"
class ProductService {
    constructor(){
        this.products = []
    }
    //guarda el producto
    save(product){
        this.products.push(product)
    }
    //actualiza el producto
    update(product){
        const id = product.id
        this.products.map(product => product.id )
    }

    //returna una lista
    listAll(){
        
    }

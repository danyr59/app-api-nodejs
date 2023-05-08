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
        console.log(this.products.map(product => product.id == id ))
    }

    //returna una lista
    listAll(){
        return this.products
    }
        
}

export {
    ProductService
}

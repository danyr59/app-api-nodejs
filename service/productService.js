//import Product from "../models/product"
class ProductService {
    constructor(){
        this.products = []
    }
    //guarda el producto
    save(product){
        
        this.products.push(product)
        return product
    }
    //actualiza el producto
    update(product){
        
        this.products = this.products.map(productOriginal => productOriginal.id == product.id 
            ? product
            : productOriginal
        )
        return product
    }

    //returna una lista
    listAll(){
        return this.products
    }
    findById(id){
        return this.products.find(element => element.id == id)
    }

    delete(id){
       this.products =  this.products.filter(product => product.id != id)
    }
        
}

export {
    ProductService
}

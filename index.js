import express from "express"
import apiRoutes from "./routes/apiRoutes.js"
import dotenv from "dotenv"
import { Product } from "./models/product.js"
import { ProductService } from "./service/productService.js"

dotenv.config({path: '.env'})
//inicializando la app
const app = express()

//habilitar lecturas de datos 
app.use(express.urlencoded({extended : true}))


const p = new Product(1, "daniel")

const productService = new ProductService()
productService.save(p)
productService.save(new Product(2, "fernando"))
productService.save(new Product(5, "hola"))
productService.update(new Product(2, "diego"))
console.log(productService.listAll())
console.log(productService.findById(2))
productService.delete(5)
console.log(productService.listAll())




//routing
app.use("/api", apiRoutes)



const port = process.env.PORT
app.listen(port,() => {
    console.log(`server is running on port ${port}`)
    
})



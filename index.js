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


const p = new Product("1", "daniel")

const productService = new ProductService()
productService.save(p)
productService.save(new Product("2", "fernando"))
console.log(productService.listAll())



//routing
app.use("/", apiRoutes)



const port = process.env.PORT
app.listen(port,() => {
    console.log(`server is running on port ${port}`)
    
})



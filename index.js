import express from "express"
import apiRoutes from "./routes/apiRoutes.js"
import dotenv from "dotenv"


dotenv.config({path: '.env'})
//inicializando la app
const app = express()

//habilitar lecturas de datos 
app.use(express.urlencoded({extended : true}))


//routing
app.use("/api", apiRoutes)



const port = process.env.PORT
app.listen(port,() => {
    console.log(`server is running on port ${port}`)
    
})



import express from "express"
import "dotenv/config"
import { json } from "body-parser"
import Connect from "./utils/MongoConnect"

const cors = require("cors")

const app = express()

app.use(json())
app.use(cors())
const PORT: any = process.env.PORT || 3000

app
  .listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
    Connect().then(res=>{
      //connected to mongoose
    }).catch(e=>{
      console.log(e)
    })
  })
  .on("error", (e:any) => {
    console.log("There's an error ! " ,e )
  })

import express from "express"
import "dotenv/config"
import { json } from "body-parser"
import appDataSource from "./utils/POSTGRES"

const cors = require("cors")

const app = express()

app.use(json())
app.use(cors())
const PORT: any = process.env.PORT || 3000

app
  .listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
    //since I use a lot of POSTGRESQL assumed that im connecting to psql database 
    appDataSource
      .initialize()
      .then((res: any) => {
        console.log("Connected to the database ! ")
        
      })
      .catch((e: any) => {
        console.log(e)
      })
  })
  .on("error", (e:any) => {
    console.log("There's an error ! " ,e )
  })

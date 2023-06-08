import { Router } from "express"
import Create from "../controllers/Save"
import Filter from "../controllers/Filter"
import GetAll from "../controllers/Getall"
import CreateList from "../controllers/SaveList"
const countryRouter = Router()


countryRouter.get("/",GetAll)
countryRouter.get("/by",Filter)
countryRouter.post("/",Create)
//countryRouter.post("/list",CreateList)



export default countryRouter
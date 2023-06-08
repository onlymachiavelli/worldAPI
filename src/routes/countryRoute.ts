import { Router } from "express"
import Create from "../controllers/Save"
import Filter from "../controllers/Filter"
import GetAll from "../controllers/Getall"
const countryRouter = Router()


countryRouter.get("/",GetAll)
countryRouter.get("/by",Filter)
countryRouter.post("/",Create)



export default countryRouter
import mongoose from "mongoose"

import { Schema } from "mongoose"

const countriesSchema = new Schema({
    name : String, 
    continent : String,
    capital : String,
    iso1 : String, 
    iso2:String,
    dialCode:String ,
    currency:String,
    flag : String 
})

const Countries = mongoose.model("Countries", countriesSchema)

export default Countries
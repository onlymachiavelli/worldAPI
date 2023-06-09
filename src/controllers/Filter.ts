import * as Express from 'express'
import * as Services from './../services/countries.services'


const Filter:Express.RequestHandler = async (req, res)=>{

    let field : any = req.query.field
    field = field.toLowerCase()
    let target :any = req.query.target
    if (!field || !target) {
        res.status(400).send("Bad request")
        return 
    }
    target = ["iso1","iso2","currency"].includes(field) ? target.toUpperCase() : target[0].toUpperCase() + target.slice(1).toLowerCase() 
    console.log(field, " ", target)
    const datas : any = await Services.Filter(field,target)
    if (datas.length ===0) {
        res.status(404).send("No results")
        return 

    }
    res.status(200).send(datas)
}

export default Filter
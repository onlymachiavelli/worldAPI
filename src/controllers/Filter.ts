import * as Express from 'express'
import * as Services from './../services/countries.services'


const Filter:Express.RequestHandler = async (req, res)=>{

    const field = req.query.field
    const target = req.query.target
    if (!field || !target) {
        res.status(400).send("Bad request")
        return 
    }
    const datas : any = await Services.Filter(field,target)
    if (datas.length ===0) {
        res.status(404).send("No results")
        return 

    }
    res.status(200).send(datas)
}

export default Filter
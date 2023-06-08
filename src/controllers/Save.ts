import * as Express from 'express'
import * as Services from './../services/countries.services'


const Create : Express.RequestHandler = async(req, res) =>{
    
    const datas = req.body
    if (!datas) {
        res.status(400).send("Bad request")
        return 
    }
    await Services.Save(datas).then(resp=>{
        res.status(200).send("Done saving the country")
    }).catch(e=>{
        res.status(500).send("Error saving the country")
        console.log(e)
    })
}

export default Create

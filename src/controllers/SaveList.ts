import * as Express from 'express'
import * as Services from './../services/countries.services'


const CreateList : Express.RequestHandler = async(req, res) =>{
    
    const datas:any = req.body
    if (datas.length==0) {
        res.status(400).send("Bad request")
        return 
    }
    let i
    for (i=0;i<datas.length;i++) {
        await Services.Save(datas[i]).then(resp=>{
            console.log("Done saving the country")
            
        }).catch(e=>{
            console.log("Error saving the country")
            console.log(e)
        })
    }
    if (i == datas.length) {
        res.status(200).send("Done saving the countries")
        return 

    }
    res.status(500).send("Error saving the countries")

}

export default CreateList

import * as Express from 'express'
import * as Services from './../services/countries.services'


const GetAll:Express.RequestHandler = async (req, res) =>{


    const datas : any = await Services.GetAll()
    console.log(datas)
    if (datas.length ===0) {
        res.status(404).send("The database is empty")
        return 

    }
    res.status(200).send(datas)
}


export default GetAll 
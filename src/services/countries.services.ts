

import mongoose from "mongoose"

import Countries from "../models/countries"
const Save = async (datas : any) =>{
    const country = new Countries(datas)
    const saved = await country.save()
    return saved
}

const Update = async (datas : any) =>{
    const updated = await Countries.updateOne({name:datas.name},datas)
    return updated
}

const Delete = async (target : any) =>{
    const deleted = await Countries.deleteOne(target)
    return deleted
}
const GetAll = async () =>{
    const all = await Countries.find()
    return all
}

const Filter = async (field : any, target : any) =>{
    const filtered = await Countries.find({[field]:target})
    return filtered
}

export {
    Save,
    Update,
    Delete,
    GetAll,
    Filter
}
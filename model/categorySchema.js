import mongoose from "mongoose";

const categorySchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        description:{type:String,required:true,unique:true},
        image:{type:String,required:true},
        
    }
)

export const Category=mongoose.model("Category",categorySchema)
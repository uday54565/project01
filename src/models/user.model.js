// import { Schema } from "mongoose";
import mongoose , {Schema} from "mongoose";

const userSchema = new Schema (

    {
        userName : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim : true,
            index : true,
        },

         email : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim : true,
        },

         fullname : {
            type : String,
            required : true,
            trim : true,
            index : true,
        },

        avtar : {
            required : true,
            type : String,
        },
        
        coverimage : {
            type : String
        },

        watchHistory : [{

            type : Schema.types.objectId,
            ref : " video url"
        }],

        password : {
            type : String,
            required : [true , 'password is required'],
        },
        reftokan : {
            type : String
        }

}, {timestamps : true}
)

export const User = mongoose.model("User" , userSchema);
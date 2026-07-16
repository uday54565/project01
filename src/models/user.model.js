import mongoose , {Schema} from "mongoose";
import bcrypt from "bcrypt";
import { JsonWebTokenError } from "jsonwebtoken";

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

}, {timestamps : true},

userSchema.pre( "save" , async function (next) {
    if(!this.isModifyed("password")) return next();

    this.password = bcrypt.hash(this.password , 10);
    next();
},
userSchema.methods.ispasswordcorrect  = async function (password) {

 return    await   bcrypt.compare(password,this.password);
    
},

userSchema.methods.genrateAccessTokan = function (){
    jwt.sign({

        _id : this._id,
        email : this.email,
        fullname : this.fullname,
        userName : this.fullname
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIN : process.env.ACCESS_TOKEN_EXPIRY
    }

)

},

userSchema.methods.genrateRefrenceToken = function () {
     {
        expiresIN : process.env.ACCESS_TOKEN_EXPIRY
        
    }
}

))

export const User = mongoose.model("User" , userSchema);
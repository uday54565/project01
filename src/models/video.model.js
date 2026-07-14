import mongoose ,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const video = new Schema ({
    videofile : {
        type : String,
        required : true
    },

    thumbnail : {
        type : String,
        required : true,
    },

    tital : {
            type : String,
            required : true
    },
    dueration : {
        type : Number ,
        required : true
    },

    viwes : {
      type : Number ,
        required : true

    },

    discription : {
        type : String ,
        required : true

    },

    ispublished  :{
        type : Boolean,
        default : true,
    },

    owner : {
        type : Schema.Types.ObjectId,
        ref = " user"

    }


})
mongoose.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video" , userSchema);
import { v2  as cloudinary} from "cloudinary";

import fs from " fs";
import { autoBatchEnhancer } from "@reduxjs/toolkit";

cloudinary .config ({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secrate : process.env.CLOUDINARY_API_SECRET

});

const uplodeOnCludinary = async  (localfilepath)  => {
    try{

        if( !localfilepath) return null;

        // uplode on cloudinary

        const responce = await cloudinary.uploader.upload(localfilepath ,
             {

                resource_type : "auto",
             }        
        )

        console.log("file has uploded successfully uploded" , responce.url);

        return responce ;

    }
    catch {
       
        fs.unlink(localfilepath);
        return null;
    }
    
}
export { uplodeOnCludinary};
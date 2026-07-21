import express from  'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();

app.use (cors( {
    origin : process.env.CORES_ORIGEN ,
    credentials : true
}))

app.use(express.json({limit : "16KB"}))
app.use(express.urlencoded ({ extended : true ,limit : " 16kb"}))
app.use(express.static("public"))

import userRoute from './routes/user.routes.js';


//  route declaration

app.use("/api/v2/users", userRoute)

export default app
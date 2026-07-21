import {asyncHandler} from '../utils/acynchandler.js'

const registerUser = asyncHandler ( async (req, res) =>{
     res.status ( 200).json({
        message : " running the user regester route"
    })
})

export { registerUser }
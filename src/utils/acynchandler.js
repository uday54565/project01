const asyncHandler  = (requiesthndler) => {
   return (req,res,next) => {
        Promise.resolve(requiesthndler(req,res,next)).
        catch((err) => next(err))

    }

}

export { asyncHandler }
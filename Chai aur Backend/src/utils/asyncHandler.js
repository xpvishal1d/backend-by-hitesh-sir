// const asyncHandler = (requestHandler) => {
//     (req , res , next) => {
//         Promise.resolve(requestHandler(req , res , next)).catch((err) => next(err))
//     }

// }


// export {asyncHandler}


// chat gpt code 👇
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch(next);
    };
};

export { asyncHandler };





// const asyncHandler = (fn) => async (req , res , next) => {
//     try {
//         await frameElement(req , res , next)
        
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success : false ,
//             message : err.message
//         })
//     }
// }


const asyncControler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).reject((err)=>{err})
    }
}













export {asyncControler}


// const asyncControler=(fn)=> async(req,res,next)=>{
//     try{
//         await fn(req,res,next)
// }
//     catch(error){
//         res.status(error.status || 500).json({
//             success:false,
//             message:error.message || "internal server error"

//     })

// }}

class apierror extends Error {
    constructor(statuscode, message="something went wrong !!",errors=[]) {
       super(message)
        this.statuscode = statuscode
        this.data=data
        this.success=false
        this.errors=errors



     if(stack)   {
        this.stack=stack
     }
     else{
        Error.captureStackTrace(this, this.constructor)
     }
}}



export {apierror }
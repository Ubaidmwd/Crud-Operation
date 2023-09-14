class ErrorHandler extends Error{
    constructor(message,statusCode){
        this.statusCode=statusCode,
        Error.captureStackTrace(this,this.statusCode);

    }
}

module.exports= ErrorHandler;

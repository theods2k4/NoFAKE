const sourcedArticleHandler = require("./handlers/SourcedArticleHandler");
const sourcedArticleParser = require("./parsers/SourcedArticleParser");
const sourcedArticleFormatValidator = require("./validators/SourcedArticleFormatValidator");

class SourcedArticleService{

    constructor(validator,parser,handler) {
        this.validator = validator;
        this.parser = parser;
        this.handler=handler;
    }

    processToDB(obj) {
    
        
        const validatorObj=this.validator.toDto(obj);

        if(validatorObj.validated==true) {

            const dto=this.parser.toDto(obj);
            
            this.handler.toDB(dto);
            

        }

    }

    processManyToDB(data){
        for(let obj of data){
            this.processToDB(obj);
        }
    }

}


module.exports=new SourcedArticleService(sourcedArticleFormatValidator,
                                        sourcedArticleParser,
                                        sourcedArticleHandler
);
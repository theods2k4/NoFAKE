
const SourcedArticleDto = require("../../domain/dto/SourcedArticleDto");
const sourcedArticleDtoFactory = require("../factories/SourcedArticleDtoFactory");

class SourcedArticleParser{
    constructor(){
        
    }

    toDto(data){
        return sourcedArticleDtoFactory.create(data);
    }
}


module.exports =  new SourcedArticleParser();   
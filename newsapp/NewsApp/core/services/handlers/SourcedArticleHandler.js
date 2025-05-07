const toSourcedArticleDB = require("../../../repo/mappers/toSourcedArticleDB");
const sourcedArticleFactory = require("../factories/SourcedArticleFactory");

class SourcedArticleHandler{

    constructor(factory){
        this.factory = factory;
    }

    toDB(sourcedArticleDto){

        const sourcedArticle=this.factory.create(sourcedArticleDto); 

        

        const sourcedArticleDB=toSourcedArticleDB.map(sourcedArticle);

        

        sourcedArticleDB.save();
    }

}


module.exports = new SourcedArticleHandler(sourcedArticleFactory);
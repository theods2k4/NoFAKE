const SourcedArticleDB= require("../SourcedArticleDB")


class  toSourcedArticleDB{

    constructor() {}

    map(sourcedArticle) {
    
        return new SourcedArticleDB(
            sourcedArticle        );
    }
    
        
    

}


module.exports = new toSourcedArticleDB();
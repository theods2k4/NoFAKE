const SourcedArticle=require("../../domain/entities/models/SourcedArticle");

class SourcedArticleFactory{

    constructor() {}

    create(sourcedArticleDto){

        return new SourcedArticle(sourcedArticleDto.category, sourcedArticleDto.description,
            sourcedArticleDto.title,sourcedArticleDto.language,sourcedArticleDto.imageURL,
            sourcedArticleDto.articleURL, sourcedArticleDto.sourceURL);
        
    }

}

module.exports = new SourcedArticleFactory();
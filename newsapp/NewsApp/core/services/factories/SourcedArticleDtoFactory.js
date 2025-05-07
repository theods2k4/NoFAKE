const SourcedArticleDto=require('../../domain/dto/SourcedArticleDto');

class SourcedArticleDtoFactory{

    constructor() {}

    create(data){
        
    return new SourcedArticleDto(data.title,data.category,
        data.description,data.source_url,data.image_url,data.article_url,data.language);
}
}


module.exports = new SourcedArticleDtoFactory();
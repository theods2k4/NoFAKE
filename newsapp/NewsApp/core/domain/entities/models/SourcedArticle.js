
const BaseArticle= require("../abstract/BaseArticle")


class SourcedArticle extends BaseArticle{
    constructor(category,description,title,language,imageURL,articleURL,sourceURL){
        super(category,description,title,language,imageURL);
        this.articleURL = articleURL;
        this.sourceURL = sourceURL;
    }

    toString() {
        const toPrint='Article '+ this.title+" description:"+this.description+' language:'
        +this.language+'imageURL:'+this.imageURL+' articleURL:'+this.articleURL+' sourceURL:'+this.sourceURL;
        return toPrint
    }
}

module.exports = SourcedArticle;


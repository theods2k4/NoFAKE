class SourcedArticleDto{
    constructor(title,category,description,sourceURL,imageURL,articleURL,language){
        this.title=title;
        this.category=category;
        this.description=description;
        this.sourceURL=sourceURL;
        this.imageURL=imageURL;
        this.articleURL=articleURL;
        this.language=language;
    }

    toString() {
        const toPrint='Article '+ this.title+" description:"+this.description+' language:'
        +this.language+'imageURL:'+this.imageURL+' articleURL:'+this.articleURL+' sourceURL:'+this.sourceURL;
        return toPrint
    }
}

module.exports = SourcedArticleDto;



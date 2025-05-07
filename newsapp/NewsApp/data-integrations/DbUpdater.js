const Digi24Scraper=require("./external-scrappers/Digi24Scraper");
const HotnewsScraper=require("./external-scrappers/HotnewsScraper");
const SourcedArticleDB=require("../repo/SourcedArticleDB");

class DbUpdater{

    constructor(){}

    
update=async() => {
    const Digi24Data = await Digi24Scraper();
    const HotnewsData= await HotnewsScraper();

    const data=HotnewsData.concat(Digi24Data);

    const articles=await SourcedArticleDB.find({})

    
    
    const articlesURL=articles.map(article=>{
        return article.articleURL;
    });
    
    const filteredData=data.filter(article=>{ return !articlesURL.includes(article.article_url)}
);

    if (filteredData.length === 0) {
        console.log("nimic nou");
        return;
    }

    fetch('http://localhost:3000/api/articles/save-sourced-articles',{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(filteredData)});

}
}


module.exports = new DbUpdater();

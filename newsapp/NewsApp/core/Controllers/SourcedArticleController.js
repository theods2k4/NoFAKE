const sourcedArticleService = require("../services/SourcedArticleService");
const HotnewsScraper = require("../../data-integrations/external-scrappers/HotnewsScraper");
const Digi24Scraper = require("../../data-integrations/external-scrappers/Digi24Scraper");
const SourcedArticleDB= require("../../repo/SourcedArticleDB");

class SourcedArticleControllers{


    constructor(sourcedArticleService){
        this.serviceToDB=sourcedArticleService;
    }

    getArticles= async(req,res)=>{
        const data=await SourcedArticleDB.find({});

        res.status(200).json(data);
    }

     saveArticles= async(req,res)=> {

        const data=req.body;

        console.log('Am primit cererea de post');
         await this.serviceToDB.processManyToDB(data);
        

        
    }

    getArticle=async(req,res) => {

        const id=req.params.id;

        const sourcedArticle=await SourcedArticleDB.findOne({_id:id});

        res.send(sourcedArticle);
        

    }

    saveArticle=async(req,res)=> {

        const id=req.params.id;

        const sourcedArticle= await SourcedArticleDB.findOne({_id:id});

        await fetch('http://localhost:8080/api/save-article',{method:"post",headers:{"content-type":"application/json"}
           , body:JSON.stringify(sourcedArticle)
        })

    }

} 




module.exports = new SourcedArticleControllers(sourcedArticleService);
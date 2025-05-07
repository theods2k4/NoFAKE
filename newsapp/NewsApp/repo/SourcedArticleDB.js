const mongoose=require("mongoose");


const sa_schema=new mongoose.Schema({

    category:{
        type: String,
        required: false,
    },
    description:{
        type: String,
        required:false
    },
    title:{
        type: String,
        required:false,
    },
    language:{
        type: String,
        required:false,
    },
    imageURL:{
        type: String,
        required:false,
    },
    sourceURL:{
        type: String,
        required:false
    },
    articleURL:{
        type: String,
        required:false
    }
});

const SourcedArticleDB= new mongoose.model('SourcedArticle',sa_schema);

module.exports = SourcedArticleDB;
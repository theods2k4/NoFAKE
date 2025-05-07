const mongoose= require("mongoose");

const ca_schema= new mongoose.Schema({

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
    imageLink:{
        type: String,
        required:false,
    },
    sourceLink:{
        type: String,
        required:false
    },
    
    author:{
        type: String,
        required:false
    },

    content:{
        type: String,
        required:false
    }


});


const CreatedArticleDB=mongoose.model("CreatedArticle",ca_schema);


module.exports=CreatedArticleDB;
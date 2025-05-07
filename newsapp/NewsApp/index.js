    const express = require("express");
    const app = express();
    const cors=require("cors");

    //const ejs= require('ejs');
    const port=3000;
    const dbUpdater=require("./data-integrations/DbUpdater")

    
    app.use(cors())

    app.use(express.json());

    app.set('view-engine', 'ejs');
    app.set('views','views');

    app.listen(port, (req,res) => {
        console.log(`http://localhost:${port}`);

        dbUpdater.update();

        //setInterval(()=> dbUpdater.update(),3*60*1000);
        
    })
//----------------------------------------------------------------------------------------------

    const ArticleRouter = require("./core/routes/ArticleRouter");
    app.use('/api/articles',ArticleRouter)
    
//---------------------------------------------------------------------------------------------------------------


    const mongoose=require("mongoose");
const DbUpdater = require("./data-integrations/DbUpdater");

    mongoose.connect('mongodb://127.0.0.1:27017/newsapp').then(()=>{
        console.log("Open connection");
    })

       

    
app.get('/', (req, res) => {
    res.render("index.ejs");
})
 




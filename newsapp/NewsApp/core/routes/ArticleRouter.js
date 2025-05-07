const express=require("express");
const SourcedArticleController = require("../Controllers/SourcedArticleController");
const router= express.Router();




router.post('/save-sourced-articles', SourcedArticleController.saveArticles);
router.get('/get-articles',SourcedArticleController.getArticles);
router.get('/get-article/:id',SourcedArticleController.getArticle);
router.get('/save-article/:id', SourcedArticleController.saveArticle);


module.exports = router;
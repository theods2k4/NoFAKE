package com.nofake.nofake;

public abstract class BaseArticle {
    
    protected String title;
    protected String description;
    protected String category;
    protected String language;
    protected String imageURL;


    public BaseArticle(String title, 
    String description, String category, String language, String imageURL){
        this.title=title;
        this.description=description;
        this.category=category;
        this.language=language;
        this.imageURL=imageURL;
    }

}

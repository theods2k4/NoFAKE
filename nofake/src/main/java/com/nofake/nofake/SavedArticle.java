package com.nofake.nofake;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class SavedArticle {
    
    @Id
    @GeneratedValue
    private long id;

    @Lob
    private String title;
    @Lob
    private String description;
    private String category;
    private String language;
    @Lob
    private String imageURL;
    
    private String sourceURL;
    @Lob
    private String articleURL;


    public SavedArticle(){}


    public long getId(){
        return this.id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description){
        this.description=description;
    }

    public void setCategory(String category){
        this.category=category;
    }

    public void setLanguage(String language){
        this.language=language;
    }

    public void setImageURL(String imageURL){
        this.imageURL=imageURL;
    }

    public void setSourceURL(String sourceURL){
        this.sourceURL=sourceURL;
    }

    public void setArticleURL(String articleURL){
        this.articleURL=articleURL;
    }


}

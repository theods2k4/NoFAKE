package com.nofake.nofake;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;



@CrossOrigin(origins="http://localhost:3000")
@RestController
public class SavedArticleController {

    RestTemplate restTemplate;
    SavedArticleRepo savedArticleRepo;

    public SavedArticleController(RestTemplate restTemplate, SavedArticleRepo savedArticleRepo ){
        this.restTemplate=restTemplate;
        this.savedArticleRepo=savedArticleRepo;
    }


    @PostMapping("/api/save-article")
    public void postMethodName(@RequestBody SavedArticle entity) {
        
        savedArticleRepo.save(entity);

        System.out.print("am primit cererea");
        System.out.print(entity);
        
    }

    @GetMapping("/api/get-articles")
    public ResponseEntity<List<SavedArticle>> getMethodName() {
        
       List<SavedArticle> articles=savedArticleRepo.findAll();

       return ResponseEntity.ok(articles);

    }
    
    
    


}

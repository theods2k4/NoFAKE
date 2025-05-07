package com.nofake.nofake;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SavedArticleRepo extends JpaRepository<SavedArticle,Long> {
    
}

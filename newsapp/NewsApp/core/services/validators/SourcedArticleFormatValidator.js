

class SourcedArticleFormatValidator{    

    constructor(required_fields) {
        this.required_fields = required_fields;
        
    }

    toDto(obj){

        try{
        

        let validated=this.required_fields.every(field=> field in obj);
        
        return new FormatValidatorObj(validated);

    }catch(e){console.log(e,'eroare la validare')
        return new FormatValidatorObj(false,'eroare la validare');
    }
    }
}

class FormatValidatorObj{

    constructor(validated=null,error_message=null){
        this.validated = validated;
        this.error_message = error_message;
    }

    setErrorMessage(error_message){this.error_message=error_message;}
    
    setValidated(validated){
        this.validated = validated;
    }
    }

class SourcedArticleRequiredFields{

    static required_fields=['description','category','title','article_url','source_url','image_url']

    constructor(){}

    static get(){
        return this.required_fields;
    }
}


module.exports = new SourcedArticleFormatValidator(SourcedArticleRequiredFields.get());



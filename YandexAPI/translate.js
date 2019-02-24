function Translate(word,language){
    this.apikey = "trnsl.1.1.20190218T204338Z.e8cdac0616cd14ec.79307818882e570ff912dd43d155da747e408b10";
    this.word = word;
    this.language = language;

    // XHR Object

    this.xhr = new XMLHttpRequest();

}

Translate.prototype.translateWord = function(callback){
    // Ajax İşlemleri
    // 
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET",endpoint);

    this.xhr.onload = () => {
        if(this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText);

            const text = json.text[0];

            callback(null,text);
        
            // console.log(JSON.parse(this.xhr.responseText).text[0]);
        }
        else{
            callback("Bir hata oluştu",null);
        }
    }

    this.xhr.send();

};

Translate.prototype.changeParameters = function(newWord,newLanguage){
    this.word = newWord;
    this.language = newLanguage;
    
}

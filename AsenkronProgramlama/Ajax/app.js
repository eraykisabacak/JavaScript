// Http Status
// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error

// Holds the status of the XMLHttpRequest.
// 0: request not initialized 
// 1: server connection established
// 2: request received 
// 3: processing request 
// 4: request finished and response is ready

document.getElementById("btn").addEventListener("click",function(){

    // XMLHttpRequest

    const xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function(){

        // if(this.readyState === 0){
        //     console.log("0: istek başlatılmadı ");
        // }
        // if(this.readyState === 1){
        //     console.log("1: sunucu bağlantısı kuruldu");
        // }
        // if(this.readyState === 2){
        //     console.log("2: istek alındı ");
        // }
        // if(this.readyState === 3){
        //     console.log("3: işlem isteği  ");
        // }
        // if(this.readyState === 4){
        //     console.log("4- istek tamamlandı ve yanıt hazır ");
        // }

        // console.log(this.status)

        // if(this.status === 200 && this.readyState == 4){
        //     // Response Hazır
        //     console.log("*******Response Hazır Metin*******");
        //     console.log(this.responseText);
        // }
        
        // xhr.onprogress = function(){
        //     console.log("Process İşleniyor");
        // }

        xhr.onload = function(){
            // Response Hazır ise buraya girecektir
            if(this.status === 200){
                // console.log(this.responseText);
                document.getElementById("ajax").textContent = this.responseText;
            } 
            

        }

    };
    xhr.open("GET","example.txt",true);

    xhr.send();

  

});




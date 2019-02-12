class Request{

    async get(url){ // Get Request
    //     return new Promise((resolve,reject) =>{
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(data => resolve(data))
    //     .catch( err => reject(err))
    // })

        // Üst satırdakiler ile alt satırdakiler aynı    

        const response = await fetch(url); // Response Object
        const data = await response.json(); // JSON Object
        return data;

    }

    async post(url,data){

        const response = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                      "Content-type": "application/json; charset=UTF-8"
                    }
                  }); // Response Object

        const responsedata = response.json();

        return responsedata;
            
    }

    async put(url,data){

        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          });

         const responsedata = response.json();
         
         return responsedata;
        
    }

    async delete(url){
        const response = await fetch(url,{
            method:'DELETE'
        });

        

        return "Veri Silme İşlemi Başarılı";
    }

}

const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(albums => {
//     console.log(albums);
// })
// .catch(err => console.log(err));

// console.log(albums); // Asenkron 


// request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Thriler"})
// .then(newAlbum => console.log(newAlbum))
// .catch(error => console.error(error));

// request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:10,title:"Eray"})
// .then(album => console.log(album))
// .catch(err => console.log(err)); 

request.delete("https://jsonplaceholder.typicode.com/albums/1",{userId:10,title:"Eray"})
.then(message => console.log(message))
.catch(err => console.log(err));


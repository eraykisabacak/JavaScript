// function getData(data){ // Promise Objesi Döndüren Fonksiyon
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){

//             if(typeof data === "string"){
//                 // Olumlu
//                 resolve(data);
//             }
//             else{
//                 // Olumsuz
//                 reject(new Error("Lütfen string bir değer girin"));
//             }

//         },5000);
        
//     });

// }

// getData(12)
// .then( response =>  console.log("Gelen Değer " + response))
// .catch( err => console.error(err) );


function addTwo(number){

    return new Promise( (resolve,reject) => setTimeout( () => {
        if(typeof number === "number") resolve(number+2);
        else console.error(new Error("Lütfen bir sayi giriniz"));
    },3000) );

}

addTwo(6)
.then( response => { 
    console.log(response);
    return response + 2; })
.then( response2 => console.log(response2) )
.catch( err => console.error(err));

// Yanlızca 1 tane catch kullanılır - birden fazla then kullanılabilir -























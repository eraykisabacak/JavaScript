// async function test(data){  // Async bu fonksiyon mutlaka ve mutlaka promise döner
//     // Promise return new Promise
//    // return data;
   
//    let promise = new Promise( (resolve,reject)=> {
//        setTimeout(() => {
//             resolve("Bu bir değerdir");
//        },5000);

//    })

//    let response = await promise; // 5 saniye bekleyecek


//    return response;

// //    console.log(response);
// //    console.log("Naber");


// }


//  // Await bir fonksiyonun olumlu dönüş yapmasını bekler

 
// test("Merhaba").then(response => console.log(response));


// async function testData(data){

//     let promise = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(typeof data === "string"){
//                 resolve(data);
//             }
//             else{
//                 reject(new Error("Lütfen String bir değer girin"));
//             }
//         },5000);
//     });

//     const response = await promise;

//     return response;


// }

// testData(12123)
// .then(data => console.log(data))
// .catch(err => console.log(err));


async function getCurrency(url){

    const response = await fetch(url); // Response Object
    console.log(response);

    const data = await response.json(); // JSON Object

    return data;


}

getCurrency("https://api.exchangeratesapi.io/latest")
.then(response => console.log(response))
.catch(err => console.log(err))













function getTextFile(){ // Text dosyası

    fetch("example.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
function getJsonFile(){ // Local bir JSON dosyasından veri alma
    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

function getExternalAPI(money){
    fetch("https://api.exchangeratesapi.io/latest")
    .then(response => response.json())
    .then(data => console.log(  data.rates.TRY * money ))
    .catch(err => console.log(err));
}
getTextFile();
getJsonFile();
getExternalAPI(5);


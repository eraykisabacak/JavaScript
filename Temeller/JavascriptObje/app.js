let value;
const programmer = {

    name : "Eray Kısabacak",
    age : 20,
    email : "eraykisabacak@hotmail.com",
    langs : ["Python","Java","Javascript"],
    
    address : {
        ciy : "Kastamonu",
        street : "Mehmet Akif Ersoy"
    },

    work : function(){
        console.log("Programcı Çalışıyor....");
    }

};

value = programmer;

value = programmer.langs;

const programmers = [

    {name : "Eray Kısabacak",age: 20},
    {name : "Oğuz",age : 25}

];

value = programmers;

console.log(value);

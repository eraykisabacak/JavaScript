// console.log(this);

// const emp1 = {
//     name: "Eray",
//     age:20,
//     showInfos: function(){ console.log("Bilgiler gösteriliyor")}
// };

// const emp2 = {
//     name:"Ahmet",
//     age:25
// };
// emp1.salary = 200;
// emp1.showInfos();
// console.log(emp1);

function Employee(){ // Yapıcı Fonksiyon - Constructor
    this.name = "Eray";
    this.surname = "Kısabacak";
    this.salary = 200;

}

function Employee(name,surname,salary){ // Yapıcı Fonksiyon - Constructor
    this.name = name;
    this.surname = surname;
    this.salary = salary;

}

const emp1 = new Employee();
const emp2 = new Employee("Mustafa","Mus",100);

console.log(emp1);
console.log(emp2)
// const object = new Object();
// object.name = "Eray";
// console.log(object);

function Employee(name,age){
    this.name = name;
    this.age = age;
    this.showInfos = function(){
        console.log("Bilgiler gösteriliyor");
    }
}
const emp1 = new Employee("Eray",20);
console.log(emp1);
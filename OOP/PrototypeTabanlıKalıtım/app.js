// Prototype Tabanlı Kalıtım

function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function(){
    console.log("İsim : " + this.name + " Yaş : " + this.age);
}

// const person = new Person("Eray",20);
// console.log(person);

function Employee(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
//Overriding İptal Etmek
Employee.prototype.showInfos = function(){
    console.log("İsim : " + this.name + " Yaş : " + this.age + " Maaş : " + this.salary);

}
const emp = new Employee("Eray",20,100);
emp.
console.log(emp);


emp.showInfos();

// Syntactic Sugar
/*
function Employee(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
}
Employee.prototype.showInfos = function(){
    console.log("İsim : " + this.name + " Yaş : " + this.age + " Salary : " + this.salary);
}

const emp = new Employee("Eray",20,100);

console.log(emp);

*/

class Employee{

    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    showInfos(){
        console.log("İsim : " + this.name + " Yaş : " + this.age + " Salary : " + this.salary);
    }

}


const emp = new Employee("Eray",20,100);

console.log(emp);
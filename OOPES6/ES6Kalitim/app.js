class Person{ // SuperClass, BaseClass
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    showInfos(){
        console.log("İsim : " + this.name + " Yaş : " + this.age);
    }

}

class Employee extends Person{ // DerivedClass SubClass ChildClass
    constructor(name,age,salary){
        super(name,age);
        this.salary = salary;
    }
    showInfos(){
        console.log("İsim : " + this.name + " Yaş : " + this.age + " Maaş : " + this.salary);
    }
}

const emp = new Employee("Eray",20,400);

console.log(emp);
emp.showInfos();

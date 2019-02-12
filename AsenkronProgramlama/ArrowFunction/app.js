const person = {
  
    age:20,

    // tellAge : function(){

    //     // This - Person

    //     console.log(this);
    //     console.log(this.age);
    // }.bind(this)

    tellAge : () =>{
        console.log(this);
        console.log(this.age);
    }

    // this - Window
}

person.tellAge();
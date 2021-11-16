//ES6 JS Classes
class User {//cookie cutter
    constructor(name) {// everything the cookie with come out as, 
        this.name = name;
        this.type = 'Trial User'
    };
    //method 1
    greet() {
        console.log(`Welcome back, ${this.name}`);
    };
    //Method 2
    status() {
        console.log(`Current status: ${this.type}`);
    };
};


//Instance of the class/new object
let anonDude = new User('Anonymous dude');

//we can now use the new instance and the  . operator to access the 2 methods
anonDude.greet();
anonDude.status();

//Another instance of the class
let anonLady = new User(' Anonymous lady');
anonLady.greet();
anonLady.status();

//Another instance of the class
let jeff = new User('Jeff');
jeff.greet();
jeff.status();

//practice 
let markyMark = new User(' dope boy');
markyMark.greet();
markyMark.status();

let homie = new User(' My homie');
homie.greet();
homie.status();
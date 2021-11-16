//ES6 JS Classes
class User {
    constructor(name) {
        this.name = name;
        this.type = 'Trial User'
    };

    //Method 1
    greet() {
        console.log(`Welcome back, ${this.name}`);
    };
    //Method 2
    status() {
        console.log(`Current status: ${this.type}`);
    };
};
//Extends inherits certain properties of another class also called subclass
class TrialUser extends User {
    trialEnding() {
        console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`);//So, when we use the  keyword, we are doing something that we, again, call sub-classing. This means that the  class becomes a child of , and therefore inherits all of its functions and properties.
    };
};

//Instance of User class
let anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();

//Instance of TrialUser class
let trialUser = new TrialUser('Paul');
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

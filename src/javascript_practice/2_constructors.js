class User {// we name the class
    //we call the constructor function and create parameters
    //the will be values that we want to be passed in and stored in the object
    constructor(first, last, e) {// on the right side of the below expressions, the word 'first', 'last', and 'e' are values that are getting passed in as the arguments when the object is created
        this.f = first;
        this.l = last;
        this.email = e;
        //^ on the left side, we have the actual keys of the object being created. The left side stores the incoming arguments from the newly created object as the value for 'this' specific object being created
    }
}

let userOne = new User ("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first); // Undefined
console.log(userOne.f);//Paul
console.log(userOne.l); // O'Connor
console.log(userOne); // User {f: "Paul", l: "O'Connor", email: "pocnnor@elevenfifty.org" }

class Car {
    constructor(make, model, year){
        this.m = make;
        this.m1 = model;
        this.y = year;

    }
}

let carOne = new Car ("Ford", "F150", "2004");
console.log(carOne.m);
console.log(carOne.m1);
console.log(carOne.y);

let carTwo = new Car ("Volvo", "V50", "2009");
console.log(carTwo.m);
console.log(carTwo.m1);
console.log(carTwo.y);
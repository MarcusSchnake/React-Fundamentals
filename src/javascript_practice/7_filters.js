const instructors = [
    {name: 'Quincy', specialty: 'Quantam Mechanics', medals: 7}, 
    {name: 'Kenn', specialty: 'Norse Mythology', medals: 5}, 
    {name: 'Carolyn', specialty: 'Kung Fu', medals: 8},
    {name: 'Paul', specialty: 'Entomology', medals: 4},
];

//filter to instructors in this array with 5 or more medals
let instructor_names = [];

for(let i = 0; i < instructors.length; i++) {
    if(instructors[i].medals >= 5) {
        instructor_names.push(instructors[i].name);
    }
}
console.log(instructor_names);

//filter method being used instead
const instructorNames = instructors.filter(instructor => instructor.medals >= 5);
console.log(instructorNames);

//exact same thing showing that the names of variables can be anything
const instructorNamesTwo = instructors.filter(i => i.medals >= 5);
console.log(instructorNamesTwo);
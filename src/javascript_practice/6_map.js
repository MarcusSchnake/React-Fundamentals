const instructor = [
    {name: 'Quincy', specialty: 'Quantam Mechanics'},
    {name: 'Kenn', specialty: 'Norse Mythology'},
    {name: 'Carolyn', specialty: 'Kung Fu'},
    {name: 'Paul', specialty: 'Entomology'},
];
 //forEach way of doing this
let instructor_names = [];
instructor_names.forEach(instructor => {
    instructor_names.push(instructor.name);
});

console.log(instructor_names);

//.map method to accomplish the same thing as above
const instructorNames = instructor.map(instructor => instructor.name);
console.log(instructorNames);

// const instructorInfo = instructors.map`(i => ${i.name}:${i.specialty})`; fix to .map to return and object

let kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
];

console.log(kvArray);

let reformattedArray = kvArray.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
});
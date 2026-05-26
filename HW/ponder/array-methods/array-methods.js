
// Js Arrays
let names = ["Bob", "Ross", "Painter", "Austria"];

console.log(names);
console.log(names[2]);

let grade = [100, 99, 78, 50];
console.log(grade);

console.log(grade[2]);
// Js Objects

let studentName = "Brother Caffrey"
let studentClasses = ["WDD131", "CSE210"]


//object literal
let student = {
    //key/value pairs
    name:"Tyler",
    classes: ["WDD131", "CSE210"],
    grades:[98,99]
}

//accessing object properties objectName.keyName
console.log(student.name)

// Array Methods

names.forEach((name) => {
    // runs this function for every element in the array one at a time. 
    console.log(name);

})

let newNames = names.map((name) => {
    return name + " Claus"
})
console.log(newNames);

let filteredNames = newNames.filter((name)=>{
    return name.length < 10;
})

console.log(filteredNames);
// A
let date = new Date().getTime();

console.log(date);

// B
const developer = {
    name : "emmanuel",
    location : "Nigeria",
    age : 21,
    stack : "frontend",
    experience : 0.2,
    hobby : "football"
};
let name = developer.name;
let locate = developer.location;
let age = developer.age;
let stack = developer.stack;
let experience = developer.experience;
let hobby = developer.hobby;

console.log(`My name is ${name}, I'm a ${stack} developer from ${locate} with ${experience}yrs of experience. I'm ${age}yrs old and i love ${hobby}.`);
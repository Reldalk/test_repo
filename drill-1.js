'use strict';

function getYearOfBirth(age){
    if(age === undefined){
        throw new Error("Arguments not valid");
    }
    if(typeofage !== "number"){
        throw new typeError("Not a number");
    }
    return 2018 - age;
}

function createGreeting(name, age){
    if(name === undefined){
        throw new Error("Arguments not valid");
    }
    if(typeof name !== "string"){
        throw new typeError("Not a string");
    }
    if(age < 0) {
        throw new Error("Age can not be negative");
    }
    return('Hi, my name is ${name} and I\'m ${age} years old.' + 
           'I was born in ${getYearOfBirth(age)}.');
}

try {
    const greeting1 = createGreeting('Ethan', 29);
    console.log(greeting1);
} catch (e) {
    console.log(e);
}
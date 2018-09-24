function getYearOfBirth(age){
    return 2018 - age;
}

function createGreeting(name, age){
    return('Hi, my name is ${name} and I\'m ${age} years old.' + 
           'I was born in ${getYearOfBirth(age)}.');
}

const greeting1 = createGreeting('Ethan', 29);
console.log(greeting1);

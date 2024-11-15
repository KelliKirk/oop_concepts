class Person {
    constructor () {
        this.firstname = '';  
        this.lastname = '';
        this.age = 0;
    }
}

class Student {
    constructor (firstname, lastname, age) {
        this.firstname = firstname;  
        this.lastname = lastname;
        this.age = age;
    } 
} 

// Loodud Person objektid
const person1 = new Person();
person1.firstname = 'Jane';  
person1.lastname = 'Doe';
person1.age = 32;

const person2 = new Person();
person2.firstname = 'Em'; 
person2.lastname = 'Andem';
person2.age = 35;

const person3 = new Person();  
person3.firstname = 'Rob';
person3.lastname = 'Smith';
person3.age = 39;

console.log(person1.firstname);  
console.log(person1.lastname);
console.log(person1.age);
console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.age);
console.log(person3.firstname);
console.log(person3.lastname);
console.log(person3.age);

// Loodud Student objektid
const student1 = new Student('Alex', 'Dog', 23);
const student2 = new Student('Nina', 'Rabbit', 24);
const student3 = new Student('Victoria', 'Noname', 22);

console.log(student1);
console.log(student2);
console.log(student3);

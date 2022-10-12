// Your code here.
/*
getFirstName
parameters:  person object

person = 
{firstName: string
 lastName: string}

 return firstName property (string)

 this is called a getter object
*/

function getFirstName(person){

  return person.firstName;
  //let firstName = person.firstName
  //return firstName;
  
  
}
function getLastName(person){

  return person.lastName;
  //let firstName = person.firstName
  //return firstName;
  
};

function getFullName(person){
  return person.firstName + " " + person.lastName;
};

let person1 = {
  firstName: 'Colin',
  lastName: 'Jaffe',
  age:  39,
  married: false
};


let person2 = {
  firstName: 'Petra',
  lastName: 'Solano',
  age: 29,
  married: false
};

let baby1 = {
  firstName: 'Baby',
  lastName: 'Jaffe',
  
}


/*
setFirstName
parameters: person object, newFirstName string
*/

//Pass by Reference!
function setFirstName(person, newFirstName){
  person.firstName = newFirstName;

}
setFirstName(person2, 'Zuko');

function setAge(person, newAge){
  person.age = newAge;

}

setAge(person1, 45);
setAge(person2, 35);

/*
person object
{
  firstName:
  lastName:
  age:
}
or 
{ firstName:
  lastName:
}

*/

function giveBirthday(person){
  if(person.age === undefined){
    person.age = 1;
  } else if (person.age !== undefined){
    person.age += 1;
  }
}
giveBirthday(baby1);
giveBirthday(person2)

function marry(person1, person2){
  if (person1.married === false && person2.married === false)
    person1.married = true; 
    person2.married = true;
    person1.spouseName = person2.firstName + " " + person2.lastName;
    person2.spouseName = person1.firstName + " " + person1.lastName; 
}

marry(person1, person2);
console.log(person1);
console.log(person2);

function divorce(person1, person2){
  if  (person1.married === true && person2.married === true)
    person1.married = false; 
    person2.married = false;
    delete person1.spouseName;
    delete person2.spouseName;

}

divorce(person1, person2);
console.log(person1);
console.log(person2);

// console.log(baby1);
// console.log(person2);

// console.log(getLastName(person1));
// console.log(getLastName(person2));

// console.log(getFirstName(person1));
// console.log(getFirstName(person2));

// console.log(getFullName(person1));
// console.log(getFullName(person2));

// console.log(person2);
// console.log(person1);




// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}

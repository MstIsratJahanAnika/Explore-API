console.log('Explore API');

const person = {
    name: 'kokila',
    fruit: 'kathal',
    dish: 'korolla vaji',
    friends: ['kudrus', 'chameli', 'kameli', 'pataya', 'sabila'],
    isRich: false,
    money: 35000
};
console.log(person);
//JSON - JavaScript Object with Notation
//JSON.stringify

const personJSON = JSON.stringify(person);
console.log(personJSON, typeof personJSON);//string a convert kore

//again convert to object
const parseJSON = JSON.parse(personJSON);
console.log(parseJSON);
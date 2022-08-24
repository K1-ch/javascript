//using objects in an array
//object is stored in key value pair


//in obejct order of index doesn't matter but in array it matters a lot
const s1={
    firstname:'Kiran',
    lastname:'Chauhan',
    school:'Kiet college',
    marks:[10,20,30]
};

console.log(s1);//print in {} all the values

console.log(s1.school);//only print the school value

//diff between dot and bracket notation
//for dot operator we use real values
console.log(s1.firstname);

//with bracket notation we can have computed value also]
const nameKey='name';
console.log(s1['first'+nameKey]);
console.log(s1['last'+nameKey]);

//use of dot 
console.log(`${s1.firstname} has ${s1.marks.length} subjects`);

// const s1={
//     firstname:'Kiran',
//     lastname:'Chauhan',
//     school:'Kiet college',
//     marks:[10,20,30]
// };

// const value=prompt('what do  u know abt s1');
// if(s1[value]){
//     console.log(s1[value]);
// }
// else{
//     console.log('wrong choice');
// }
function calcAge(birthyear) {
  //outer scope
  const age = 2022 - birthyear;
  function printAge() {
    //inner scope
    const print = `my name is ${firstname} I am ${age} years old `;
    console.log(print);
  }
  printAge();
  return age;
}
const firstname = "kiran";
calcAge(1999);

//console.log(age); //this will create an refrence error because only inner scope can have access to outer scope

//printAge();
//this will create an error because in global execution context we dont have access to the printAge scope;

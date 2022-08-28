//"use strict";
var firstname = "pooja";

const hello = {
  firstname: "Kiran",
  year: 1999,
  college: "kiet",
  message: () => {
    console.log(`Hey ${this.firstname}`); //this will print hey pooja so avoid using var varibale
    console.log(this); //it is pointing to window object
  },
  message2: function () {
    console.log(`Hey ${this.firstname}`);
  },
};
/*the output here is hey undefined bcz arrow functions do nt get their own this keyword
/*so the message function is refrering to its parent object..
*the object hello that has code inside it is object literal 
and if we trying to access a property that does not exist on certain object then we do not get any error
we get undefined*/

hello.message();
/* if we declare a var varibale globally and then trying to access a object undefined property from
arrow function then we get the var variable value as the output*/

//Inside an Object Regular functions are best choice because here the this keyword will refer to the
//current object and it may not cause any undefined problems like arrow functions
hello.message2;
hello.message2();


let a = 20;
let b = a;
a = 21;
console.log(a); //call stack
console.log(b); //call stack

/*----------------objects in heap stack------------*/

let unmarried = {
  firstname: "Jassie",
  lastname: "Joseph",
  member: ["varun", "jassie"],
};

/*----here both the objects for key lastname have changed their value to Sharma-----
/*----to avoid this problem Object.assign method is used------*/
let married = unmarried;
married.lastname = "sharma";
console.log(unmarried);
console.log(married);

let unmarriednew = {
  firstname: "Jassie",
  lastname: "Joseph",
  member: ["varun", "jassie"],
};

let marriednew = Object.assign({}, unmarriednew);
marriednew.lastname = "sharma";
marriednew.member.push("tony");
marriednew.member.push("ryna");
/*--here  the lastname will change but both the objects members have 4 children because they are objects itself
and they refrencing to the same object in the memory---*/
console.log(unmarriednew);
console.log(marriednew);

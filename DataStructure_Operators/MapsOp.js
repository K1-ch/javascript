/*-----Map is a data structure which maps keys to values it returns updated map-----*/
/*-----set and get methods are used in this map------*/

/*---why use map over Objects?  bcz in objects the keys are only strings bt
 in map we can use any data type as a key it can be objects arrays or integer value----------*/

const num = {
  1: "Kiran",
  firstname: "Radha",
  lastname: "Daya",
  //['hello','hii','namaste']:'greetings', not allowed array as a key
  location: "tundla,ghaziabad",
};
console.log(num);

const value1 = new Map();
console.log(value1.set("firstname", "Kiran"));
console.log(value1.set("lastname", "Chauhan"));

/*---using map we can also create boolean or other data types as a key---*/
value1
  .set("college", "Kiet") //first key then value
  .set(500, "[160,100,120,140]")
  .set("open", 11)
  .set("close", 17)
  .set(true, "We are open")
  .set(false, "We are Close")
  .set("location", "tundla,ghaziabad");

/*----Printing all the keys to the console----*/
const resKeys = value1.keys();
console.log(resKeys);

/*-----the value of the keys and only be accessed by the exactly same name as the key in a map-----*/
for (const val of resKeys) {
  console.log(value1.get(val)); //invoking the value with key name
}

/*----to get the value of the key we can individually type by the exact name of the property-------*/
console.log(value1.get(true));
console.log(value1.get("close"));
console.log(value1.get(500));

/*------both the set and get objects of array ["Math", "Science", "English", "Hindi"] are diff 
in heap m/m the sol to this is store first the array in a variable then print-----*/

console.log(value1.get(["Math", "Science", "English", "Hindi"])); //undefined bcz of diff heap m/m

const access = ["Math", "Science", "English", "Hindi"];
console.log(value1.set(access, "sub"));
console.log(value1.get(access));

/*---using the value of boolean keys in practice----*/

const time = 10;

console.log(
  value1.get(time > value1.get("open") && time < value1.get("close"))
);

/*-----------use .has method to check if a key exists or nt in a map----*/

console.log(value1.has("order"));
value1.delete("location");
value1.delete(500);
value1.delete("open");
//value1.clear();
/*---we can use dOm munipulation as key also and it return sthe obj---*/
//console.log(value1.set(document.querySelector("h1"), "heading"));

console.log(value1);

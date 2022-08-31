/* -----Strings Methods------ */

/*-----mutating the string is not possible because string is primitive type------*/

console.log("Hello World!".length);
console.log("Kiran Chauhan".lastIndexOf("a"));
console.log("Computer".indexOf("t"));
console.log("Pooja".concat("Chauhan"));
console.log("mango".includes("k"));

const str = "   fly me   to   the moon  ";
console.log(str.slice(" "));
console.log(str.slice(3, 17)); //we can also provide start and end index also

console.log("--------------------------------");

/*  -------------- counting words --------------- */
console.log(str.split(" ").length);

/*  -------------- counting spaces --------------- */
let count = 0;
for (const string of str) {
  if (string === " ") count++;
}

console.log(count);
console.log(str.slice(-1, str.lastIndexOf(" ") - 1));

/*in js a string is an object bcz js takes the input from the string & put it into a box
this is known as boxing----------- */

console.log(new String("hello mam"));

/*-----other string methods--------*/

const p = "aaaaaaaaaaa";
console.log(p.replaceAll("a", "@"));

console.log(p.toLowerCase());
console.log(p.toUpperCase());

/*--------- Regular Expression ------------*/

const mango =
  "Hello i m Kiran.Kiran lives in Mumbai Kiran is very good at Coding";

console.log(mango.replace(/Kiran/g, "Pooja"));

if (mango.startsWith("Hello") && mango.endsWith("Coding")) {
  console.log("This is valid");
}

console.log("a+b+c+d".split("+"));

console.log("This the best thing to want".split(" "));

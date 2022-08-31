const str = "Raman Agarwal";
//if we pass an integer to slice then the string is splited from the passsed integer
const [firstname, lastname] = str.split(" ");
console.log(firstname, lastname);

/*------- join is used to join two or more Strings---------*/
const newStr = ["Mr.", firstname, lastname.toUpperCase()].join(" ");
console.log(newStr);

/*-----Write a program to capitalize every word of the letter------*/

function capital(name) {
  const names = name.split(" ");
  let capStr = [];
  for (const s of names) {
    // capStr.push(s[0].toUpperCase() + s.slice(1));
    capStr.push(s.replace(s[0], s[0].toUpperCase()));
  }
  let n = capStr.join(" "); //it will now rerturn a string so it is need to be stored in a new variable
  return n;
}

console.log(capital("hey there can you help me please"));

/*-------------------PADDING--------------------*/
console.log("Will Smith".padStart(13, "&"));
console.log("Ketty Peri".padEnd(17, "^"));

/*---------------Program to cover the digits of card except the last four digits-------------------*/
const bankCard = (number) => {
  let convert = number + "";
  let c1 = convert.slice(-4);
  return c1.padStart(convert.length, "*");
};
console.log(bankCard(1231324162768468));

/*------------------Program to repeat a value-------*/

const wait = (number) => {
  const ans = `There are ${number} plane waiting ${"😒".repeat(number)}`;
  return ans;
};
console.log(wait(5));
console.log(wait(6));

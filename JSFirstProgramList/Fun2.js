//Type conversion and coerison
//+ operator triggers to join the string nt subtract op 
var value="20";
var num=78;
console.log(value+10)//give result as a string //2010 
console.log(Number(value)+10)//give result as a number//30
console.log(Number('Radha'));/*can't convert a String to number 
which doesnt contain number inside it so the answer is Nan*/

console.log(typeof NaN);//number

//converting a number to string
console.log(String('white'),23);
//white is String yellow is number
num=(String(num),'seventy-eight');
console.log(num);//the output is seventy-eight now 

console.log('10'+'20'-3);//string will be concatenate works for + //1017

console.log('100'-'20'-3);//perform operation compute 77
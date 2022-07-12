//Using of string literal var and if else,console,conditional
var JohnWei=78;
var MarkWei=92;
var JohnHei=1.69;
var MarkHei=1.95;
var BMIJohn = JohnWei / JohnHei ** 2 ;
var BMIMark=MarkWei / MarkHei ** 2 
console.log(BMIJohn);
console.log(BMIMark);

var markHigherBMI=(BMIJohn>BMIMark)?BMIJohn:BMIMark;

var res;
if(markHigherBMI==BMIJohn){
    res=`John BMI ${BMIJohn} is Higher then Mark`;
}
else{
res=`Mark BMI ${BMIMark} is Higher then John`;
}
console.log(res);
console.log('John emi is',markHigherBMI);

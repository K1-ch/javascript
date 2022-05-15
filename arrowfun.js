sum=function(num1,num2){
    return num1+num2;
}
console.log('average='+sum(10,20)/2);

//arrow function gives short name for function
//=> is used to denote arrow function
//it returns by default bt we can explicitly make it return also

hello=(s,num2)=> s+num2;
console.log(hello('Radha',15));

start=(num1,num2)=> num1/num2;
console.log(start(145,11));

driving=(Name,age)=>{
var limit=18;
if(age>=18){
    return `${Name} is ready to drive`;
}
return `${Name} is not ready to drive`;
}

console.log(driving('Rajat',28));
console.log(driving('Sita',15));
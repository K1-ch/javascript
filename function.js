function print(){
    console.log("hello");
    
}
var i=5;
while(i>0){
    print();
    i--;
}
//defining and invoking function
function fruitjuice(apple,orange){
    if(apple>orange){
return apple;
    }
    return orange;
}
console.log(fruitjuice(5,20));

//defining and invoking anonymous function
//here name is nt given it is also called function expression
const res= function(num1,num2){
    return num1+num2;
}

console.log(res(10,20));

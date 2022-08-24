function checkAge( age){
    (age>18) ? vote(): notvote();
}

checkAge(12);
function vote(){
    console.log('You are eligible to vote');
}

function notvote(){
    console.log('You are nt eligible to vote');
}

function avg(){
return sum(10,20)/2;//calling another fun from a fun
}

function sum(num1,num2){
    return num1+num2;
}
console.log(avg());
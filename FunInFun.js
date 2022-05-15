//Function calling inside a function
`use strict`


function Avr( ){

    return Sum()/3;//calling function inside a function.
}
function Sum(){
    return 10+20+30;
    }

console.log(Avr());

//example 2
function drive(Name){
    if(hello(20)==false){
    return `${Name} cannot drive`;
    }
 return `${Name} can drive`;
}

//returning true or false in hello
hello=function vision(age){
    if(age>=18){
        return true;
    }
    return false;
}
console.log(drive('Sita'));
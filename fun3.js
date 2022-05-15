//truthy an falsy values 
//five undefined falsy values are 0,'',undefined,null,NaN
var money='';//this is false
//var money=' ';//this is true
if(money){
    console.log("Dont spend all the money");
}
else{
    console.log("You should get a job");
}
console.log(Boolean(0));//false
console.log(Boolean(''));//false
console.log(Boolean({}));//true
console.log(Boolean(undefined));//false
console.log(Boolean(null));//false
console.log(Boolean(NaN));//false
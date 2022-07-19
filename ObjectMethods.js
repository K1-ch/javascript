const s1={
firstname :'Kiran',
lastname : 'Chauhan',
Age  :'1999',
city :'Agra',
// calcAge: function(Age){
//     console.log(this);//this refers to whole object 
//     return 2022-this.Age;
// }
calcAge:function(Age){
    this.AgeIs= 2021-this.Age;
}
};

// console.log(s1.calcAge(1999));//using dot notation
// console.log(s1['calcAge'](1999));//using bracket notation

// //use of this
// console.log(s1.calcAge());


//this storing var
console.log(s1.AgeIs);


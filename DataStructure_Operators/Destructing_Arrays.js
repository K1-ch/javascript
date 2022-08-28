let arr = [20, 10, 22];
/*----- this is called destructing of arrays------ it will nt change the original array*/
let [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

/* only refer to those variables that are from the staring index-----*/
let arr2 = ["kiran", "pooja", "savita", "ambika"];
let [x1, y1] = arr2;
console.log(x1, y1);

//skip the elements that u do not need
let [x2, , , y2] = arr2;
console.log(x2, y2);

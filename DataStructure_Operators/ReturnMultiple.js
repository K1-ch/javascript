const value = {
  customername: "rahul",
  order: ["pizza", "burger", "salad", "non-veg", "juice"],
  /*--- destructing arrays help to return multiple values from function -----*/
  result: function (start, main) {
    return [this.order[start], this.order[main]];
  },
};

const [start, main] = value.result(2, 4); //destructring arrays
console.log(start, main);

//we can assign default values before destructing in order to remove problems

const [p = "no order", , q = "no order", , , r = "no order"] = value.order;
console.log(p, q, r);

//nested destructing

const nested = [5, 2, [9, 0]];
const [p1, , [q1, r1]] = nested; //destructing as individual elements
console.log(p1, q1, r1);

const [i, , j] = nested; //destructing as arrays
console.log(i, j);

"use strict";

const value = {
  year: 1999,

  mesaage: function () {
    // const value = function () { <-------------------->
    //   console.log(this.year >= 2000 || this.year >= 4000);
    // };
    // value();
    /*this is a regular function inside a regular fun so first regular will point to obj properties & 
    second one will point o undefined*/
    /* and this inside a regular fun refers to undefined so here the prpoerty this.year is undefined
    to solve this problem there are two solutions
    1).use a variable that is pointing to a current object 'this'
    2). use arrow function */
    /*---------------solution 1--------------*/
    // const self = this;
    // const value = function () {
    //   console.log(self.year >= 2000 || self.year >= 4000);
    // };
    // value();

    /*------------solution 2------------------*/
    //because in arrow function this keyword refers to its closest non arrow parent function
    //& here the parent function is message*/
    const Arrowfun = () => {
      console.log(this.year >= 2000 || this.year >= 4000);
    };
    Arrowfun();
  },
};

value.mesaage();

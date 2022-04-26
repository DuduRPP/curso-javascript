"use strict";

// Topicos

// 1.JS Runtime (JIT, Linguagens Compiladas/Interpretadas)

// 2.Scopes & Call Stack

// 3. Hoisting & TDZ

// 4. Keyword this e diferenca entre funcoes normais e arrow functions

const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
};

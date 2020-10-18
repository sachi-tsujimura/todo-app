"use strict";

const todo = require("./index.js");
const assert = require("assert");

// todo test
todo.todo("Buy two note");
todo.todo("Buy the book");
assert.deepStrictEqual(todo.list(), ["Buy two note", "Buy the book"]);

//done teast
todo.done("Buy two note");
assert.deepStrictEqual(todo.list(), ["Buy the book"]);
assert.deepStrictEqual(todo.donelist(), ["Buy two note"]);

//del test
todo.del("Buy two note");
todo.del("Buy the book");
assert.deepStrictEqual(todo.list(), []);
assert.deepStrictEqual(todo.donelist(), []);

console.log("Completed test");

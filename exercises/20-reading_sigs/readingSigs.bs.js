// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function subtract_one(x) {
  return x - 1 | 0;
}

var Example = /* module */[
  /* the_meaning_of_life_the_universe_and_everything */42,
  /* subtract_one */subtract_one
];

var one_less_than_the_meaning_of_life_etc = 41;

if (one_less_than_the_meaning_of_life_etc !== 41) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "readingSigs.re",
          26,
          0
        ]
      ];
}

function to_int(x) {
  return x;
}

function add(prim, prim$1) {
  return prim + prim$1 | 0;
}

var Abstract_type_example = /* module */[
  /* to_int */to_int,
  /* zero */0,
  /* one */1,
  /* add */add
];

var two = 2;

var four = two + two | 0;

if (four !== 4) {
  throw [
        Caml_builtin_exceptions.assert_failure,
        [
          "readingSigs.re",
          58,
          0
        ]
      ];
}

var Fraction = /* module */[];

exports.Example = Example;
exports.one_less_than_the_meaning_of_life_etc = one_less_than_the_meaning_of_life_etc;
exports.Abstract_type_example = Abstract_type_example;
exports.two = two;
exports.four = four;
exports.Fraction = Fraction;
/*  Not a pure module */
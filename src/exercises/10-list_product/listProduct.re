/* Now let's write a function to multiply the elements of a list. */
let rec product = xs =>
  switch (xs) {
  | [] => 1
  | [x, ...tail] => x * product(tail)
  };

Test.runAll([
  (product([]) == 1, "product"),
  (product([55]) == 55, "product"),
  (product([5, (-5), 1, (-1)]) == 25, "product"),
  (product([5, 5, 1, 1]) == 25, "product"),
]);
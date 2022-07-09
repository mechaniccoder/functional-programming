var total = 0;

function add_to_total(amount) {
  console.log("Old total: " + total); // implicit output
  total += amount; // implicit output
  return total; // explicit output
}

/**
 * side effect === implicit ouptut, implicit input
 */

// Page 77 It's your turn

function update_tax_dom() {
  set_tax_dom(calculateTax());
}

function calculateTax(amount) {
  return amount * 0.1;
}

// Page 78 Answer

/// Extracted

function update_tax_dom() {
  set_tax_dom(calc_tax());
}

function calc_tax() {
  return shopping_cart_total * 0.1;
}

/// Done

function update_tax_dom() {
  set_tax_dom(calc_tax(shopping_cart_total));
}

function calc_tax(amount) {
  return amount * 0.1;
}

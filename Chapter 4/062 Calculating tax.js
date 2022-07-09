function update_tax_dom() {
  set_tax_dom(shopping_cart_total * 0.1);
}

function calc_cart_total() {
  calculateTotal();
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}

function calculateTotal(cart) {
  let total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    total += item.price;
  }
  return total;
}

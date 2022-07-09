// Page 80 It's your turn

function update_shipping_icons() {
  var buy_buttons = get_buy_buttons_dom(); // action
  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;
    if (canGetFreeShipiing(item.price, shopping_cart_total))
      button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  }
}

function canGetFreeShipiing(price, amount) {
  return price + amount >= 20;
}

// Page 81 Answer

/// Extracted

function update_shipping_icons() {
  var buy_buttons = get_buy_buttons_dom();
  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;
    if (gets_free_shipping(item.price)) button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  }
}

function gets_free_shipping(item_price) {
  return item_price + shopping_cart_total >= 20;
}

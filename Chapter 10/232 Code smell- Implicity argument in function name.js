function setPriceByName(cart, name, price) {
  var item = cart[name];
  var newItem = objectSet(item, "price", price);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}

function setShippingByName(cart, name, ship) {
  var item = cart[name];
  var newItem = objectSet(item, "shipping", ship);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}

function setQuantityByName(cart, name, quant) {
  var item = cart[name];
  var newItem = objectSet(item, "quantity", quant);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}

function setTaxByName(cart, name, tax) {
  var item = cart[name];
  var newItem = objectSet(item, "tax", tax);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}

function objectSet(object, key, value) {
  var copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

function setFieldByName(cart, name, value) {
  const item = cart[name];
  const newItem = objectSet(item, name, value);
  return newItem;
}
/**
 * field의 이름을 일급으로 만들어서 인자로 받아 처리했다.
 */

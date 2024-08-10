function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = pricePerDroid * quantity;
  console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);
}

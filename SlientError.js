function formatPrice(priceInCents) {
    let formattedPrice = "$" + (priceInCents / 100).toFixed(2);
    return formattedPrice;
  }
  //TypeError: (priceInCents / 100).setFixed is not a function
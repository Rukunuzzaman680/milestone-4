function ticketPrice(ticketQuantity) {
  const first100rate = 100;
  const second100rate = 80;
  const restTicketRate = 60;
  if (ticketQuantity <= 100) {
    const price = ticketQuantity * first100rate;
    return price;
  } else if (ticketQuantity <= 200) {
    const first100Price = 100 * first100rate;
    const restTicketQuantity = ticketQuantity - 100;
    const restTicketPrice = restTicketQuantity * second100rate;
    const totalPrice = first100Price + restTicketPrice;
    return totalPrice;
  } else {
    const first100Price = 100 * first100rate;
    const second100Price = 100 * second100rate;
    const restTicketQuantity = ticketQuantity - 200;
    const restTicketPrice = restTicketQuantity * restTicketRate;
    const totalCost = first100Price + second100Price + restTicketPrice;
    return totalCost;
  }
}
const totalTicketPrice = ticketPrice(115);
console.log('price:', totalTicketPrice);

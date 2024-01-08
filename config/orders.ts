import { Order } from "@/types";
import { faker } from "@faker-js/faker";

export const orders: Order = [];

for (let i = 0; i < 10; i++) {
  orders.push({
    orderAmt: parseInt(
      faker.finance.amount({
        min: 1000,
        max: 2324343,
      })
    ),
    orderDate: faker.date.anytime(),
    orderID: parseInt(
      faker.finance.pin({
        length: 4,
      })
    ),
    transactionFee: parseInt(
      faker.finance.amount({
        min: 1,
        max: 200,
      })
    ),
  });
}

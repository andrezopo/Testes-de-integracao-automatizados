import { faker } from "@faker-js/faker";
import { items } from "@prisma/client";

type Item = Omit<items, "id">;

export async function itemFactory() {
  const item: Item = {
    title: faker.commerce.productName(),
    url: faker.internet.url(),
    description: faker.commerce.productDescription(),
    amount: faker.datatype.number(),
  };

  return item;
}

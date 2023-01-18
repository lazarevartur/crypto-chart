export const numToUsd = (number: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    number
  );
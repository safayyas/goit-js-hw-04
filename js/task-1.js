function isEnoughCapacity(products, containerSize) {
  const totalQuantity = Object.values(products).reduce(
    (sum, quantity) => sum + quantity,
    0
  );

  return totalQuantity <= containerSize;
}

// Перевірка функції
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8));

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12));

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14));

console.log(isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7));

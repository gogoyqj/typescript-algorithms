export function CartesianProduct<A, B>(a: A[], b: B[]) {
  const product: [A, B][] = [];
  for (let i =0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      product.push([a[i], b[j]]);
    }
  }
  return product;
}

console.log(CartesianProduct(['x', 'y', 'z'], [1, 2, 3]));
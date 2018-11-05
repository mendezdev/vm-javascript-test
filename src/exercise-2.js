function MultiplyBy(n1) {
  return function (n2) {
    return function (n3) {
      return n1 * n2 * n3;
    }
  }
}

// ES6
const MultiplyByES6 = n1 => {
  return n2 => n3 => n1 * n2 * n3;
}

console.log(MultiplyBy(2)(3)(4));
console.log(MultiplyBy(4)(3)(4));
console.log('------------------')
console.log(MultiplyByES6(2)(3)(4));
console.log(MultiplyByES6(4)(3)(4));
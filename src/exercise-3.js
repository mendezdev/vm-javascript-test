function getLongestName(countries) {
  return countries.reduce(function (prev, current) {
    if (current.length > prev.length) {
      prev = current;
    }
    return prev;
  }, '');
}

//ES6
const getLongestNameES6 = countries => {
  return countries.reduce((prev, current) => {
    if (current.length > prev.length) {
      prev = current;
    }
    return prev;
  });
}

var result = getLongestName(['Australia', 'Germany', 'United States of America']);
var resultES6 = getLongestNameES6(['Australia', 'Germany', 'United States of America']);

console.log('"' + result + '" is the longest name.')
console.log('"' + resultES6 + '" is the longest name.')


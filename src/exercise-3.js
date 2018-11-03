function getLongestName(countries) {
  return countries.reduce(function (prev, current) {
    if (current.length > prev.length) {
      prev = current;
    }
    return prev;
  }, '');
}

var result = getLongestName(['Australia', 'Germany', 'United States of America']);

console.log('"' + result + '" is the longest name.')


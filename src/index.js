module.exports = function longestConsecutiveLength(array) {
  let longest = 0;
  const map = {};
  array.forEach(function(number) {
    map[number] = true;
  });
  for (let number in map) {
    let current = Number(number),
        count = 1;
    while (map[current + 1]) {
      count++;
      current++;
    }
  longest = Math.max(longest, count);
  }
 return longest;
}
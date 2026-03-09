function secondLargest(arr) {
  let unique = [...new Set(arr)];
  unique.sort((a, b) => a - b);
  return unique[1];
}

let number = [12, 42, 53, 63, 64, 64, 75, 77];
console.log(secondLargest(number));

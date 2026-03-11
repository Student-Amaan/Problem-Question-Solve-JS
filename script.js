function secondLargest(arr) {
  let unique = [...new Set(arr)];
  unique.sort((a, b) => b - a); //this is decending order [a-b is assending order]
  return unique[1];
}

let number = [12, 42, 53, 63, 64, 64, 75, 77];
console.log(secondLargest(number));

// make a function to tell you how many vowel in the string

function countVowel(str) {
  let count = 0;
  let vowel = "aeiouAEIOU";

  for (let char of str) {
    if (vowel.includes(char)) {
      count++;
    }
  }

  return count;
}
console.log(countVowel("waziristan"));

// ek function bano jho array sa duplicate value nekal da

function removeDuplicate(arr) {
  return [...new Set(arr)];
}

let num = [1, 2, 3, 2, 3, 2, 4, 5, 6, 7];
console.log(removeDuplicate(num));

// 2nd method

function removeDuplicateValue(arr) {
  let duplicate = [];

  for (let i = 0; i < arr.length; i++) {
    if (!duplicate.includes(arr[i])) {
      duplicate.push(arr[i]);
    }
  }
  return duplicate;
}
let nmbr = [23, 53, 23, 53, 22, 55, 44, 55, 6, 7, 4, 3];
console.log(removeDuplicateValue(nmbr));

function capatilizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(
  capatilizeWords(
    "My name is aman I am from south waziristan wana do you know me ",
  ),
);

const user = [
  { name: "Aman", age: 22 },
  { name: "Aman", age: 23 },
  { name: "Aman", age: 24 },
  { name: "Aman", age: 24 },
  { name: "Aman", age: 27 },
];

function groupByUser(users) {
  return users.reduce((groups, user) => {
    let age = user.age;
    if (!groups[age]) {
      groups[age] = [];
    }
    groups[age].push(user);
    return groups;
  }, {});
}
console.log(groupByUser(user));

// write a function to add all array numbers

let nmbr1 = [1, 2, 5, 4, 6, 7];
function addArray() {
  return nmbr1.reduce((total, num) => total + num, 0);
}

console.log(addArray(nmbr1));

function findMissing(arr, n) {
  let total = (n * (n * 1)) / 2;

  let sum = arr.reduce((value, add) => value + add, 0);

  return total - sum;
}

let arr = [1, 3, 5, 7, 8, 10];
let n = 10;

console.log(findMissing(arr, n));

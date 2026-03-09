function secondLargest(arr) {
  let unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);//this is decending order [a-b is assending order]
  return unique[1];
}

let number = [12, 42, 53, 63, 64, 64, 75, 77];
console.log(secondLargest(number));


// make a function to tell you how many vowel in the string

function countVowel(str){
    let count = 0;
    let vowel = 'aeiouAEIOU'

    for(let char of str){
        if (vowel.includes(char)){
            count++;
        }

    }

    return count
}
console.log(countVowel('waziristan'))
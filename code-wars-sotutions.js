// Copy/Paste you solutions below. Each solution should be accompanied by a multiline comment explaining the solution.

// Multiples of 3 or 5
function solution(num){
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
/*
Initialized a variable 'sum' with a value of 0
Created a for loop that loops from 1 up to the 'num'

*/

// Who likes it?
function likes(names) {
  if (names.length === 0) return 'no one likes this';
  else if (names.length === 1) return `${names[0]} likes this`;
  else if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
  else if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  else return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}
/*


*/

// Find The Parity Outlier
function findOutlier(arr){
  if (arr[0] % 2 === 0 && arr[1] % 2 === 0 || 
      arr[0] % 2 === 0 && arr[2] % 2 === 0 || 
      arr[1] % 2 === 0 && arr[2] % 2 === 0) {
    return arr.find(num => num % 2 !== 0);
  } else {
    return arr.find(num => num % 2 === 0);
  }
}
/*


*/

// Counting Duplicates
function duplicateCount(string){
  string = string.toLowerCase();
  let count = 0;
  let occuredOnce = '';
  let duplicate = '';
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (duplicate.includes(char)) {}
    else if (occuredOnce.includes(char)) {
      count++;
      duplicate += char;
    }
    else occuredOnce += char;
  }
  return count;
}
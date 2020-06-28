/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  // ваш код...
  let NewArr = arr.filter(item => (item >= a && item <= b));

  return NewArr;

  



}

/* 
let j = 0;
let NewArr = [];

for (let i = a; i <= b; i++) {
  
  NewArr[j] = arr[i];
  j++;
}

return NewArr; */
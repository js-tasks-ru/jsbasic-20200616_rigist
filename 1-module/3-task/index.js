/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  // ваш код...
  if (str == "") {
    return str;
  }
  
  let strArr = [];

  strArr = str.split("");
  
  strArr[0] = strArr[0].toUpperCase();
  
  str = strArr.join("");
  
  return str;

}



/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  // ваш код...
  if (str == "") {
    return str;
  }
  
  let strArr = [];
  
  strArr = str.split("");
  
  for (let i = 0; i <= strArr.length; i++) {

    if (strArr[i] === '-') {
      strArr[i+1] = strArr[i+1].toUpperCase();
    }

  }

  strArr = strArr.filter(item => {if (item != "-") return item;})
  
  str = strArr.join("");
  
  return str; 

}


/* 
if (str == "") {
  return str;
}

let strArr = [];

strArr = str.split("");

strArr[0] = strArr[0].toUpperCase();

str = strArr.join("");

return str; */
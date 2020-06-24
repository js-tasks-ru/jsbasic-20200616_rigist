/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  if (str.length > maxlength) {
 
  str = str.substring(0, maxlength-1);
 
  let strArr = [];
 
  strArr = str.split("");
 
  strArr[maxlength] = "…"
 
  str = strArr.join("");
 
  }
 
  return str;
}

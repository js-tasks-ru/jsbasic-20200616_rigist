/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  let ArrObj = [];

  ArrObj = Object.keys(obj);

  let bool = false;

  if (ArrObj.length == 0) {
    bool = true;
  } 

  return bool;
}

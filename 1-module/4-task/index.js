/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */

/* Напишите функцию `checkSpam(str)`, возвращающую `true`, если `str` содержит `'1xBet'` или `'XXX'`, а иначе `false`.

Функция должна быть нечувствительна к регистру: */
function checkSpam(str) {
  // ваш код...

  let strArr = [];

  strArr = str.split("");
  
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].toLowerCase();
  } 
 
  str = strArr.join("");

  let bool = false;

  if (!(str.match(/1xBet/i) == null) || !(str.match(/XXX/i) == null)) {
    bool = true;
  } else {
    bool = false;
  }

  return bool;

}


/* 
console.log (223433);

function checkSpam(str) {
  // ваш код...

  let strArr = [];

  strArr = str.split("");
  
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].toLowerCase();
  } 
 
  str = strArr.join("");

  if (!(str.match(/1xBet/i) == null) || !(str.match(/XXX/i) == null)) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

checkSpam ('ffff fff') */
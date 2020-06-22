/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 * 
 *  
 * 
 */
function isValid(name) {
  if (name == "") {
    return false;
  }
  nameArr = name.split("")

  if (nameArr.length < 4) {
    return false;
  }

  for (let i = 0; i < nameArr.length; i++) {
    console.log(nameArr[i]);
    if (nameArr[i] == " ") {
      return false;
    }
  } 
  
  return true;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

 
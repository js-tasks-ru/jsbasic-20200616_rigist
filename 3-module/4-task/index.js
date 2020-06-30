/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

function showSalary(users, age) {
 
  let ArrUserAgeIsTrue = users.filter(item => {if (item.age <= age) return item;})

  let ArrNameAndBalance = ArrUserAgeIsTrue.map(item => {
    let i = {
      name: '',
      balance: 0,
    };   

    i.name = item.name;
    i.balance = item.balance;

    return i;
  } );


  let ArrWithoutObj = ArrNameAndBalance.map(item => {
    return Object.values(item);
  })

  let NewStr = '';


  for (let i = 0; i <  ArrWithoutObj.length; i++) {
    
    if (i != (ArrWithoutObj.length )){
    NewStr += ArrWithoutObj[i].join(", ") + (i != (ArrWithoutObj.length - 1) ? "\n" : "");
    }
  
  }
  return NewStr;
}


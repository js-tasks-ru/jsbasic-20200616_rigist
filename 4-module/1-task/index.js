/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */

//------------------------
/* let friends = [
  {
      firstName: 'Artsiom',
      lastName: 'Mezin'
  },
  {
      firstName: 'Ilia',
      lastName: 'Kantor'
  },
  {
      firstName: 'Christopher',
      lastName: 'Michael'
  }
]; */

function makeFriendsList(friends) {
  // ваш код...
  
  let friendsArr = friends.map( item => `${item.firstName} ${item.lastName}` );

 // console.log(friendsArr); //---
  
  let AddUl = document.createElement('ul')

  let AddLi = '';
 // console.log(111);
  for (let i = 0; i < friendsArr.length; i++) {
   
    
    AddLi += `<li>${friendsArr[i]}</li>`;
   // console.log(AddLi);
  }
 
  
  AddUl.innerHTML = AddLi;

  /* for (let i = 0; i < friendsArr.lenght; i++) {
    Adl;
  } */


  
  return AddUl;
}


//document.body.appendChild(document.createElement('ul').insertAdjacentHTML('<li>'));
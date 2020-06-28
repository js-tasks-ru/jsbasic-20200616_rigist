/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  // ваш код...
  let nameArr= [];

  nameArr = users.map(item => item.name);
  
  return nameArr;
}

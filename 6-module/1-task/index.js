/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {

    this.rows = rows.map(item => `<tr><td>${item.name}</td><td>${item.age}</td><td>${item.salary}</td><td>${item.city}</td><td><button onclick="this.parentElement.parentElement.remove()">X</button></td></tr>`).join('');

    let AddTable = document.createElement('TABLE');

    AddTable.innerHTML = this.rows;
    
    let elem = AddTable;

    this.elem = elem;
 
  }

}


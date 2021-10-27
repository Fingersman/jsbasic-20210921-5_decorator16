/**
 * 
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
 *      }
 *
 */

export default class UserTable {
  elem;
  
  constructor(rows) {
    this.elem = document.createElement('TABLE');
    let table_html = `
    <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
          </tr>
        </thead>
    `;
    table_html += `<tbody>`;
    for(let item of rows){
      table_html += `
      <tr>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.salary}</td>
        <td>${item.city}</td>
        <td><button>X</button></td>
      </tr>
      `;   
    }
    table_html += `</tbody>`;
    this.elem.innerHTML = table_html;
    this.elem.onclick = function(event){
      let target = event.target;
      if(target.tagName == 'BUTTON'){
        let current_td = target.parentElement;
        let current_tr = current_td.parentElement;
        current_tr.remove();
      }
    }
  }
  get elem(){
    return this.elem
  }
}

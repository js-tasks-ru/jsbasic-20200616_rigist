/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {

    //Если data-available у Status = true то +available
    //Илаче класс `unavailable`
    //Ели нет вообща то hidden
    const NumOfRow = 4;

    for (let i = 1; i < table.rows.length; i++) {
        for (let j = 0; j < NumOfRow ; j++) {

            if (table.rows[i].cells[j].hasAttribute('data-available') == true ){
            
                if (table.rows[i].cells[j].getAttribute('data-available') == 'true') {
                    table.rows[i].cells[j].parentElement.classList.add("available");
                } else  {
                    table.rows[i].cells[j].parentElement.classList.add("unavailable");
                }

            } 
            
        }
    }

    for (let i = 1; i < table.rows.length; i++) {
        
        if (table.rows[i].cells[2].innerHTML === 'm') {
            table.rows[i].cells[2].parentElement.classList.add("male");
        } else if (table.rows[i].cells[2].innerHTML === 'f') {
            table.rows[i].cells[2].parentElement.classList.add("female");            
        }
        
    } 
    //-----------------
    for (let i = 1; i < table.rows.length; i++) {
        if (table.rows[i].cells[1].innerHTML < 18) {
         //   console.log(1111);
            
             table.rows[i].cells[1].parentElement.style.textDecoration = 'line-through' ;}
    } 


        for (let i = 1; i < table.rows.length; i++) {
            

                if (table.rows[i].cells[3].hasAttribute('data-available') == false ){ //has вместо get, false без кавычек

                    table.rows[i].cells[3].parentElement.hidden = true;
                }

             
            
        }
    }

    //elem.hasAttribute('data-available')



    //m +male; 

    //style="text-decoration: line-through"`, если значение ячейки `Age` меньше 18.


    // return


// 17:00
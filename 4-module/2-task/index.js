/**
 * @param {HTMLTableElement} table
 * @return {void}
 */

// 12:32  ...12:59... 13:05

function makeDiagonalRed(table) {


    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows.length ; j++) {
            if (i == j){
                table.rows[i].cells[j].style.backgroundColor = 'red';
            }
        }
    }

}



'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  for(let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i];
    let rowCells = row.cells;
    setRoles(rowCells,row);
    setGender(rowCells,row);
    setAge(rowCells,row);
  }
}

function setRoles(rowCells, row) {
    const roleCell = rowCells[3];
    const attr = roleCell.getAttribute('data-role');
    if (attr !== null) {
        row.classList.add(attr);
    } else {
        row.setAttribute('hidden', true);
    }
}

function setGender(rowCells, row) {
  const genderCell = rowCells[2];
  if (genderCell.textContent === "m") {
    row.classList.add('male');
  } else if (genderCell.textContent === 'f') {
    row.classList.add('female')
  }
}

function setAge(rowCells, row) {
  const ageCell = rowCells[1];
  if (Number(ageCell.textContent) < 18) {
    row.style.textDecoration = 'line-through';
  }
}
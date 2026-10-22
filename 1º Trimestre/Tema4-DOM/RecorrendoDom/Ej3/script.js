'strict'

const table = document.getElementsByTagName('table')[0];

for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].cells[i].style.backgroundColor = 'red';
}

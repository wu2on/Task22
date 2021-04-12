// select 
let fieldRow = document.getElementById('row');
let fieldColumn = document.getElementById('column');
// let container = document.querySelector(".container");

// validate data
const validate = (arg) => {
  if(isNaN(arg.value)) {
    alert(`${arg.id} isn't correct`)
    return true;
  }

  return false;
}

// get data
const getValue = (row, col) => {

  if(validate(row) || validate(col)) { 
    return 0;
  }

  return new Array(+row.value, +col.value);
}

// // create table

const createTable = (rows, cols) => {
  // get data
  const [rowAmount, colAmount] = getValue(rows, cols);

  // create node
  let table = document.createElement('table');
  let container = document.createElement('div');

  // add attribute class="container"
  container.setAttribute('class', 'container');

  // check if a node with the container class already exists, if yes then delete
  if(document.body.getElementsByClassName('container').length !== 0) {
    document.body.lastChild.remove();
  }

  // add container in body
  document.body.append(container);
  container.appendChild(table);

  // fill in the table with the specified conditions
  for(let i = 0; i < rowAmount; i += 1) {
    let row = document.createElement('tr');
    for(let j = 0; j < colAmount; j += 1) {
      let col = document.createElement('td');
      row.appendChild(col);
    }
  // add to table rows, cols
    table.appendChild(row);
  } 
}


btn.addEventListener( "click" , () => createTable(fieldRow, fieldColumn));

let menuElement = document.getElementById("menu");
menuElement.style= 
"display: flex; flex-direction: row; justify-content: space-evenly; flew-grow: 1;";

let subElement = document.querySelectorAll("#sub");
//for applying the css to all the same id;
for(let i = 0; i<subElement.length; i++){
  subElement[i].style = "list-style: none;";
}


let innerList = document.querySelectorAll("[id = 'inner-list']");
for(let i = 0; i< innerList.length; i++){
  innerList[i].style = "background-color: #D3D3D3; margin-top: 1rem;"
}


 let links = document.querySelectorAll("a");
 for(let i = 0; i<links.length; i++){
  links[i].style = "  color: #8D3932; font-weight: 900; font-style: italic; text-decoration-style: dotted;";
}


let tables = document.querySelectorAll("table");
for(let i = 0; i<tables.length; i++){
  tables[i].style = "width: 100%;";
}


//pointing to child (tr)
var rows = document.querySelectorAll("#Plays-table tr");
for(let i = 0; i < rows.length; i++){
  if(i % 2 === 1)// Check if it's an even row
  {
    rows[i].style.backgroundColor = "#D3D3D3";
  }  
}


var sonentRows = document.querySelectorAll("#sonnet-table tr");
for(let i = 0; i< sonentRows.length; i++){
  if(i%2 === 0)// Check if it's an odd row
  {
    sonentRows[i].style.backgroundColor = "#D3D3D3";
  }
}




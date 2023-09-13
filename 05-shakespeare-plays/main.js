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



//create image
let img = document.createElement("img");
img.src = "./icons/pdf_icon_130859.png";
//put image to its place
let hamlet = document.getElementById("Hamlet");
hamlet.appendChild(img);

//style the image
img.style= "width: 1.5rem; margin-left: 0.7rem; background-color: white; cursor: pointer;";
//on clicking open the link
img.onclick = function(){
  window.location.href = "./Media/Hamlet.pdf";
}
let letter = document.querySelector("#letter-icon");
letter.style.fill = "#ee5311";

let link = document.querySelectorAll("#send-icon");

for(let i = 0; i < link.length; i++)
{
  link[i].style = "fill: #4fde52;";

}



place.style.display = "inline";

//on clicking open the link
place.onclick = function(){
  window.location.href = "mailto: henryIV@buckingham.co.uk";
}


//create image
let img4 = document.createElement("img");
img4.src = "./icons/send.png";
img4.style= "width: 1.7rem; margin-left: 0.7rem; background-color: white; cursor: pointer; background-color: #D3D3D3; fill: green;";

let henry = document.getElementById("henry-V");
henry.appendChild(img4);


const svg = document.createElement("http://www.w3.org/2000/svg", "svg");

hello.appendChild(svg);


// Reference the button by its id
const button = document.getElementById("ActivateButton");

button.onclick= function(){

}







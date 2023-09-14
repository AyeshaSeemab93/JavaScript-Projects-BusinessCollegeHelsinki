let menuElement = document.getElementById("menu");
menuElement.style= 
"display: flex; flex-direction: row; justify-content: space-evenly; flew-grow: 1;";

let subElement = document.querySelectorAll("#sub");
//for applying the css to all the same id;
for(let i = 0; i<subElement.length; i++){
  subElement[i].style = "list-style: none;";
}

//GIVING CSS TO ALL LISTS
const innerList = document.getElementById('inner-list');
for(let i = 0; i< innerList.length; i++){
  innerList[i].style = "background-color: #D3D3D3; margin-top: 1rem;"
}
//GIVING LINKS TO ALL LISTS (foreach)

//bring all the li elements of all "inner-list"s
let liElements = document.querySelectorAll("ul#inner-list li");
//giving link to each li element
liElements.forEach((li)=>{
  if (li.id === "henry" || li.id === "henry-V") {
  return;
  }
    const text = li.textContent.trim();
    const anchor = document.createElement("a");
    anchor.href = `./Media/${text}.pdf`;
    anchor.target = "_blank"; //to open link in new tab
    anchor.innerText = text; //putting text of li into a tag
    li.innerHTML = ""; //keep li content empty
    li.appendChild(anchor);
    //create image
let img = document.createElement("img");
img.src = "./icons/pdf_icon_130859.png";
//put image to its place
li.appendChild(img);

//style the image
img.style= "width: 1.5rem; margin-left: 0.7rem; background-color: white; cursor: pointer;";
//on clicking open the link
img.onclick = function(){
  window.location.href = anchor.href;
 
}
});
//result: <li><a href="./Media/Hamlet.pdf">Hamlet + image </a></li>


 let links = document.querySelectorAll("a");
  for(let i = 0; i<links.length; i++){
    links[i].style = "  color: #8D3932; font-weight: 900; font-style: italic; text-decoration-style: dotted;";
  }
 

let tables = document.querySelectorAll("table");
for(let i = 0; i<tables.length; i++){
  tables[i].style = "width: 100%;";
}

document.getElementById("Plays-table").style = "border-collapse: collapse; width: 100%; padding-bottom : 2rem;";
document.getElementById("sonnet-table").style = "border-collapse: collapse; width: 100%; padding-bottom : 2rem;";

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




let letter = document.querySelector("#letter-icon");
letter.style = "fill: #ee5311; cursor: pointer;"

let link = document.querySelectorAll("#send-icon");

for(let i = 0; i < link.length; i++)
{
  link[i].style = "fill: #4fde52; cursor: pointer;";
  link[1].onclick = function(){
    window.location.href = "mailto: henryV@buckingham.co.uk";
  }

}



let place = document.querySelector(".place");
place.style = " color: #8D3932; font-weight: 900; font-style: italic; text-decoration-style: dotted;";
//on clicking open the link
place.onclick = function(){
  window.location.href = "mailto: henryIV@buckingham.co.uk";
}











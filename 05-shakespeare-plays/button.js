//function to create a script element
let script= document.createElement("script");

function loadScript(fileSrc){
  script.type = "text/javascript";
  script.src = fileSrc;
  document.body.appendChild(script);
}

//on click load the JS File
let button = document.getElementById("button")
var loaded = false;
let text = button.innerHTML;

button.onclick = function(){
  if(loaded === false)
  {
    //call the funtion
    loadScript("./main.js");
    button.innerHTML = "Deactivate JavaScript";
    loaded = true;
    console.log("loaded is true ")
  }
  else{
    document.body.removeChild(script);
    button.innerHTML = text;
    loaded = false;
    console.log("loaded is false again ")
  }
 
}
function unload(){
document.body.removeChild(script);
}








let heading2 = document.querySelector("h1");
let myImage = document.querySelector("img");

let originalText = heading2.innerText;
let OriginalColor = document.body.style.backgroundColor;


myImage.onclick = ()=>{
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png"){
    myImage.setAttribute("src", "images/brave-icon.png");
    myImage.className = "js-image";

    heading2.innerText = "Is Brave Even Cooler";
    document.body.style.backgroundColor = "white"; 
  }
  else{
    myImage.setAttribute("src", "images/firefox-icon.png");
    heading2.innerText = originalText;
    document.body.style.backgroundColor = OriginalColor;
  }
}




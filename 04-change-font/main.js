let kokobutton = document.body.querySelector(".kokoButton");
let list = document.body.querySelector("ol");
let fontbutton =  document.body.querySelector(".fontButton");



let fontsize = [20, 24, 28, 32,16]
let index = 0;
kokobutton.onclick= ()=>{

  let newsize = fontsize[index];
  list.style.fontSize = newsize + 'px';
  index= (index + 1)%fontsize.length; //to keep it in cylce index =1,2,3,4 and again 0

}

let fontFamily = ["Roboto", "Mansalva", "Grenze", "Turret Road", "Courier New" ];
fontbutton.onclick = () => {

let newFont = fontFamily[index];
list.style.fontFamily = newFont;
  //to keep going round and round:
  index = (index + 1) %fontFamily.length
}
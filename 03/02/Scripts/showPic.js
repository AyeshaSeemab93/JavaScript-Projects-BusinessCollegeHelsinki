
 // taking link from list and storing it in img tag
function showPic(whichpic){
  var source = whichpic.getAttribute("href");
  var placeholder = document.querySelector(".placeholder");
  placeholder.setAttribute("src", source);
}

var colors = ["#de6161", "#1697eb", "#89fffd", "#ef32d9", "#2657eb"];
var i = 0;
function currentColor() {
  i = Math.floor(Math.random() * 4 + 1);

  document.getElementById("1").style.backgroundColor = colors[i];
  document.getElementById("2").style.backgroundColor = colors[i];
  document.getElementById("3").style.backgroundColor = colors[i];
  document.getElementById("4").style.backgroundColor = colors[i];
  document.getElementById("5").style.backgroundColor = colors[i];
  document.getElementById("6").style.backgroundColor = colors[i];
  document.getElementById("7").style.backgroundColor = colors[i];
  document.getElementById("8").style.backgroundColor = colors[i];
  document.getElementById("9").style.backgroundColor = colors[i];
  //return colors[i];
}
console.log(i);
//
// function currentColor() {
//   colors = document.getElementsByClassName("item");
//   var i;
//   for (i = 0; i < colors.length; i++) {
//     colors[i].style.backgroundColor = colors[i];
//     return colors[i];
//   }
// }

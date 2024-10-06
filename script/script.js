function openSide(){
var sideBar = document.getElementById("SideBar");
sideBar.style.visibility="visible";
sideBar.style.backdropFilter = "blur(20px)"
}
function closeSide(){
  var sideBar = document.getElementById("SideBar");
  sideBar.style.visibility="hidden";

}



function changeBackground(image) {
  // Change background image of the MovieTab section
  document.getElementById('Movies').style.backgroundImage = `url('assests/${image}')`;
}

function resetBackground() {
  // Reset the background image to the original
  document.getElementById('Movies').style.backgroundImage = "url('assests/marvel-avengers.gif')";
}

// function backgroundChanger(){
// var oldback = document.querySelector('.movie1 img');
// oldback.style.backgroundImage="url(..\assests\DeadpoolWolverineBack.gif)";
//
// }
//
// function backgroundReset(){
//
// }
//
//
// document.querySelector('.movie1 img').addEventListener('mouseout', function() {
//   document.querySelector('.MovieTab').style.backgroundImage = "url(..\assests\marvel-avengers.gif)";
// });

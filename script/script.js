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






var movies = document.querySelectorAll('.moviesW');

// Add event listeners to all movies
movies.forEach(function(movie) {
  movie.addEventListener('mouseover', function() {
    movies.forEach(function(otherMovie) {
      if (otherMovie !== movie) {
        otherMovie.style.width = '5%';  // Shrink other movies to 3%
      }
    });
    movie.style.width = '40%';  // Keep the hovered movie at 20%
  });

  movie.addEventListener('mouseout', function() {
    movies.forEach(function(otherMovie) {
      otherMovie.style.width = '7%';  // Reset all movies to original width
    });
  });
});


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

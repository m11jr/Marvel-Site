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
    movie.style.width = '20%';  // Keep the hovered movie at 20%
  });

  movie.addEventListener('mouseout', function() {
    movies.forEach(function(otherMovie) {
      otherMovie.style.width = '7%';  // Reset all movies to original width
    });
  });
});




elDeadPool = document.getElementsByClassName('movie1')[0];
elDeadPool.addEventListener('mouseover', function(){
  changeBackground('DeadpoolWolverineBack.gif');
}, false);


function BackgroundOfBody(){
elDeadPoolBody=document.getElementsByClassName('movie1')[0];
elDeadPoolBodyBack = document.getElementById('WholeContent');




elDeadPoolBody.addEventListener('click', function(){
  elDeadPoolBodyBack.style.backgroundImage = 'url("assests/siteBackground2.png")';
  const Deadpoolcontainerimg = document.getElementsByClassName('MovieInfoImg')[0];
const Deadpoolcontainertext = document.getElementsByClassName('MovieInfoText')[0];
  const existingImage = Deadpoolcontainerimg.querySelector('img');
  const existingTextH3 =Deadpoolcontainertext.querySelector('h3')
    const existingTextp =Deadpoolcontainertext.querySelector('p')

  if (!existingImage && !existingTextp && !existingTextH3) {


const imageDeadPool = document.createElement('img');
imageDeadPool.src = 'assests/DeadpoolAndWolverine.jpg';
imageDeadPool.alt = "Deadpool And Wolverine IMG";
imageDeadPool.width = '70%';
imageDeadPool.height = '70%';


const h3DeadPool = document.createElement('h3');
h3DeadPool.innerHTML = "Deadpool & Wolverine";
h3DeadPool.style.color = 'white';
h3DeadPool.style.fontSize = '2.1vw';


const pDeadPool = document.createElement('p');
pDeadPool.innerHTML = '<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>'
pDeadPool.style.color = 'white';
pDeadPool.style.paddingTop = "25px !important"

Deadpoolcontainertext.appendChild(h3DeadPool);
Deadpoolcontainertext.appendChild(pDeadPool);
Deadpoolcontainerimg.appendChild(imageDeadPool);
}






  // elDeadpoolimg= document.querySelector('.movieInfosec .MovieInfoImg img');
  // elDeadpoolimg.src = 'assests/DeadpoolAndWolverine.jpg';
})
}
function BackgroundOfBody1(){
  elTheMarvelsBody=document.getElementsByClassName('movie2')[0];
  elTheMarvelsBodyBack = document.getElementById('WholeContent');
  elTheMarvelsBody.addEventListener('click', function(){
    elTheMarvelsBodyBack.style.backgroundImage = 'url("assests/siteBackgroundTheMarvels.png")';
})
}

function BackgroundOfBody2(){
  elTheGOTGBody=document.getElementsByClassName('movie3')[0];
  elTheGOTGBodyBack = document.getElementById('WholeContent');
  elTheGOTGBody.addEventListener('click', function(){
    elTheGOTGBodyBack.style.backgroundImage = 'url("assests/siteBackgroundGOTG.png")';
})
}
function BackgroundOfBody3(){
  elTheANTBody=document.getElementsByClassName('movie4')[0];
  elTheANTBodyBack = document.getElementById('WholeContent');
  elTheANTBody.addEventListener('click', function(){
    elTheANTBodyBack.style.backgroundImage = 'url("assests/siteBackgroundQuantimania.png")';
})
}

function BackgroundOfBody4(){
  elTheWAKBody=document.getElementsByClassName('movie5')[0];
  elTheWAKBodyBack = document.getElementById('WholeContent');
  elTheWAKBody.addEventListener('click', function(){
    elTheWAKBodyBack.style.backgroundImage = 'url("assests/siteBackgroundWakanda.png")';
})
}

function BackgroundOfBody5(){
  elTheWAKBody=document.getElementsByClassName('movie6')[0];
  elTheWAKBodyBack = document.getElementById('WholeContent');
  elTheWAKBody.addEventListener('click', function(){
    elTheWAKBodyBack.style.backgroundImage = 'url("assests/siteBackgroundTheMarvels.png")';
})
}

function BackgroundOfBody6(){
  elTheWAKBody=document.getElementsByClassName('movie7')[0];
  elTheWAKBodyBack = document.getElementById('WholeContent');
  elTheWAKBody.addEventListener('click', function(){
    elTheWAKBodyBack.style.backgroundImage = 'url("assests/siteBackgroundStrangeMOM.png")';
})
}

function BackgroundOfBody7(){
  elTheWAKBody=document.getElementsByClassName('movie8')[0];
  elTheWAKBodyBack = document.getElementById('WholeContent');
  elTheWAKBody.addEventListener('click', function(){
    elTheWAKBodyBack.style.backgroundImage = 'url("assests/siteBackgroundStrangeSpider.png")';
})
}

const BackChange = [BackgroundOfBody(), BackgroundOfBody1(), BackgroundOfBody2(),BackgroundOfBody3(),BackgroundOfBody4(),BackgroundOfBody5(),BackgroundOfBody6(),BackgroundOfBody7()];

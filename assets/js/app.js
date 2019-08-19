var headerPlates = document.getElementsByClassName('headerPlates');
var orangeOverlay = document.getElementsByClassName('orangeOverlay');


var platesModule = 0;
function platesCar() {
  headerPlates[0].style.opacity = '0';
  headerPlates[1].style.opacity = '0';
  headerPlates[2].style.opacity = '0';
  orangeOverlay[0].style.width = '33vw';
  orangeOverlay[0].style.right = '0vw';
  setTimeout(function () {
    orangeOverlay[0].style.right = '33vw';
    orangeOverlay[0].style.width = '0vw';
    setTimeout(function () {
      orangeOverlay[0].style.transition = 'none';
      setTimeout(function () {
        orangeOverlay[0].style.right = '0vw';
        setTimeout(function () {
          orangeOverlay[0].style.transition = 'all 0.5s ease';
        }, 100);
      }, 100);
    }, 500);
    headerPlates[platesModule % 3].style.opacity = 1;
    platesModule++;
    console.log(platesModule);
  }, 1000);
}


setInterval(function () {
  platesCar();
}, 3500);

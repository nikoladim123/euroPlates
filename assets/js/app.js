var headerPlates = document.getElementsByClassName('headerPlates');


var platesModule = 0;
function platesCar() {
  headerPlates[0].style.opacity = '0';
  headerPlates[1].style.opacity = '0';
  headerPlates[2].style.opacity = '0';
  setTimeout(function () {
    headerPlates[platesModule % 3].style.opacity = 1;
    platesModule++;
    console.log(platesModule);
  }, 1000);
}


setInterval(function () {
  platesCar();
}, 3500);

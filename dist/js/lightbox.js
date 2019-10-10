"use strict";

var portionImage = document.querySelector('.potion-image');
var potionName = document.querySelector(".potion-name");
var potionEffect = document.querySelector(".potion-effect");
var potionIngre = document.querySelector(".potion-ingredients");
var potionPrice = document.querySelector(".potion-price");
var modal = document.querySelector("#myModal");
var products = document.querySelectorAll("div.product");
var btnShow = document.querySelector(".products");
var btnClose = document.getElementsByClassName("close")[0];

function loadText() {
  fetch('https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json').then(function (response) {
    return response.json();
  }).then(function (response) {
    return showTxt(response);
  }); // let xhr = new XMLHttpRequest();
  // xhr.onload = function (){
  //     if(this.readyState === 4 && this.status === 200){
  //         let data = JSON.parse(this.responseText);
  //         console.log(data);
  //         showTxt(data);
  //     }
  // }
  // xhr.open('GET', 'https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json', true);
  // xhr.send();  
}

;
loadText();

function showTxt(response) {
  console.log(response);

  var _loop = function _loop(i) {
    products[i].onclick = function () {
      var item = response.potions[i + 1];
      portionImage.src = "src/img/products/".concat(item.image);
      potionName.innerHTML = "".concat(item.name, " <br><br>");
      potionEffect.innerHTML = "".concat(item.effect, " <br><br>");
      potionIngre.innerHTML = "".concat(item.ingredients.join(', <br>'), " <br><br> ");
      potionPrice.innerHTML = "$".concat(item.price, " <br><br>");
    };
  };

  for (var i = 0; i < products.length; i++) {
    _loop(i);
  }
}

btnShow.onclick = function () {
  modal.style.display = 'block';
};

btnClose.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
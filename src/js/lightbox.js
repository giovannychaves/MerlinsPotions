const portionImage = document.querySelector('.potion-image');
const potionName = document.querySelector(".potion-name");
const potionEffect = document.querySelector(".potion-effect");
const potionIngre = document.querySelector(".potion-ingredients");
const potionPrice = document.querySelector(".potion-price");
const modal = document.querySelector("#myModal");
const products = document.querySelectorAll("div.product");
const btnShow = document.querySelector(".products");
const btnClose = document.getElementsByClassName("close")[0];

function loadText(){
    var xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function (){
        if(this.readyState = 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            // console.log(data);
            showTxt(data);
        }
    }
    xhr.open('GET', 'https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json', true);
    xhr.send();  
}

loadText();

function showTxt(data){
    for (let i = 0; i < products.length; i++) {
        products[i].onclick = function(){
            let item = data.potions[i+1];
            portionImage.src=`src/img/products/${item.image}`;
            potionName.innerHTML = `${item.name} <br><br>`;
            potionEffect.innerHTML = `${item.effect} <br><br>`;
            potionIngre.innerHTML = `${item.ingredients.join(', <br>')} <br><br> `;
            potionPrice.innerHTML = `$${item.price} <br><br>`;
        }
    }
}

btnShow.onclick = function() {
    modal.style.display='block';
}

btnClose.onclick = function() {
    modal.style.display='none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display='none';
  }
}
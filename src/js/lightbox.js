function loadText(){
    var xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function (){
        if(this.readyState = 4 && this.status == 200){
            var data = JSON.parse(this.responseText);
            // console.log(data);
            showTxt(data);
        }
    }
    xhr.open('GET', 'https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json', true);
    xhr.send();  
}

loadText();

const portionImage = document.querySelector('.potion-image');
const potionName = document.querySelector(".potion-name");
const potionEffect = document.querySelector(".potion-effect");
const potionIngre = document.querySelector(".potion-ingredients");
const potionPrice = document.querySelector(".potion-price");
const modal = document.querySelector("#myModal");
const btnShow = document.querySelector(".product");
const btnClose = document.getElementsByClassName("close")[0];

function showTxt(data){

    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
    }
    
    portionImage.src=`src/img/products/${data.potions[1].image}`;
    potionName.innerHTML = `${data.potions[1].name} <br><br>`;
    potionEffect.innerHTML = `${data.potions[1].effect} <br><br>`;
    potionIngre.innerHTML = `${data.potions[1].ingredients.join(', <br>')} <br><br> `;
    potionPrice.innerHTML = `$${data.potions[1].price} <br><br>`;
}


// When the user clicks the button, open the modal 
btnShow.onclick = function() {
    modal.style.display='block';
}

// When the user clicks on <span> (x), close the modal
btnClose.onclick = function() {
    modal.style.display='none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display='none';
  }
}
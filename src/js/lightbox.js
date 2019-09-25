function loadText(){
    var xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function (){
        if(this.readyState = 4 && this.status == 200){
            var data = JSON.parse(this.responseText);
            console.log(data);
            showTxt(data);
        }
    }
    xhr.open('GET', 'https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json', true);
    xhr.send();  
}

loadText();

function showTxt(data){
    const useDiv = document.querySelector(".potion-name");
    useDiv.innerHTML = data.potions[1].name;
}
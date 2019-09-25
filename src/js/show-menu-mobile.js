 function showMenu() {
     const menu = document.querySelector('.icon-menu-mobile');
     menu.addEventListener('click', function(){
         document.querySelector('.menu-mobile').classList.remove('close-menu');
         document.querySelector('.menu-mobile').classList.add('show-menu');
         document.querySelector('.header-logo p').style.display='none';
     })
 }

 showMenu();

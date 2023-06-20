const menu = document.querySelector('#menu');
const popMenu = document.querySelector('.pop');

function menuPoping() {
  if (popMenu.style.display === 'block') {
    menu.src = './images/Enabled.svg';
    popMenu.style.display = 'none';
  } else {
    menu.src = './images/X-Icon.svg';
    popMenu.style.display = 'block';
  }
}

menu.addEventListener('click', menuPoping);

const menus = document.querySelectorAll('.pop a');
for (let i = 0; i < menus.length; i++) {
  menus[i].addEventListener('click', () => {
    menuPoping();
  });
}
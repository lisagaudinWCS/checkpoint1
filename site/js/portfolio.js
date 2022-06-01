/* je séléctionne je stocke*/
const avatar = document.querySelector('#avatar');
/* au clic on change la src*/
avatar.addEventListener('click', function() {
    avatar.src = './image/avatar.svg';
});

/*je sélectionne et je stocke*/
const idBtn = document.querySelector('.id-btn');
const userName = document.querySelector('#name');
const color = document.querySelector('.pink-bg');

/*au clic j'active un prompt et modifie le style css etou contenu html */
idBtn.addEventListener('click', function() {
    const userColor = prompt("Choose your favorite color");
    const newName = prompt("Hey buddy, what's your name ?");
    avatar.src = './image/avatar.svg';
    userName.innerHTML = newName;
    userName.style.color = "white";
    color.style.backgroundColor = userColor;
    idBtn.style.backgroundColor = userColor;
});

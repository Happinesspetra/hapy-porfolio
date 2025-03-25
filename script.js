const mainMenu = document.querySelector(".mainMenu");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
const switchElement = document.querySelector('.switch')


openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show(){
    mainMenu.style.display ="flex";
    mainMenu.style.top ="0";
}

function close(){
    mainMenu.style.top ="-100%";
} 

switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})
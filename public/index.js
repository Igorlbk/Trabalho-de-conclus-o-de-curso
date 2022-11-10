const btnMobile = document.querySelector('#btn-mobile');

function toggleMenu(event){
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded','active');
    if(active){
        event.currentTarget.setAttribute('aria-label','Fechar Menu')
    }else{
        event.currentTarget.setAttribute('aria-label','Abrir Menu')
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const openModalButton = document.querySelector('#modal-login');
const closeModalButton = document.querySelector('#fechar-modal-login');
const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle('hide'));
}

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener('click', () => toggleModal());
});
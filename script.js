'use strict'; //jshint ignore:line

const modalAdd = document.querySelector('.modal__add');
const addBtn = document.querySelector('.add__ad');
const submitBtn = document.querySelector('.modal__btn-submit');
const modalAddForm = document.querySelector('.modal__submit');
const catalog = document.querySelector('.catalog');
const catalogItem = catalog.querySelectorAll('.card');
const modalItem = document.querySelector('.modal__item');

addBtn.addEventListener('click', () => {
    modalAdd.classList.remove('hide');
    submitBtn.disabled = true;
});

modalAdd.addEventListener('click', event => {
    const target = event.target;

    if (target.classList.contains('modal__close') || target === modalAdd) {
        modalAdd.classList.add('hide');
        modalAddForm.reset();
    }
});

catalogItem.forEach(item => {
    item.addEventListener('click', () => {
        modalItem.classList.remove('hide');
    });
});

modalItem.addEventListener('click', event => {
    const target = event.target;

    if (target.classList.contains('modal__close') || target === modalItem) {
        modalItem.classList.add('hide');
    }
});

window.addEventListener('keyup', event => {
    if (event.keyCode == 27) {
        modalItem.classList.add('hide');
    }
});
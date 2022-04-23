"use strict";


const enterItem = document.querySelector(`.input-item`);
const buttonAddNewItem = document.querySelector(`.button-add`);
const displayNewItem = document.querySelector(`.display-new-item`);


buttonAddNewItem.addEventListener(`click`, () =>{
    addNewItem();
});

enterItem.addEventListener(`keyup`, (e) =>{
    if(e.keyCode === 13){
        e.preventDefault();
        addNewItem();
    }
});

const addNewItem = function(){
    if(enterItem.value.length === 0) return enterItem.focus();

    let html = `
    <div class="display-look">
        <div class="look">
            <p class="item-info">${enterItem.value}</p>
            <button class="button-x" onclick="this.parentNode.parentNode.remove()">×</button>
        </div>
    </div>
    `;

    displayNewItem.insertAdjacentHTML(`beforeend`, html);

    enterItem.value = ``;
    enterItem.focus();  
};
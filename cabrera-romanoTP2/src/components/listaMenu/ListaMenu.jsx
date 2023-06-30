import React from 'react';


const menuItems = [
    { nombre: 'Item 1', disponible: true },
    { nombre: 'Item 2', disponible: false },
    { nombre: 'Item 3', disponible: true },
];

const listaMenu = document.getElementById('menu');

menuItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item.nombre;

    if (item.disponible) {
        listItem.classList.add('disponible');
    } else {
        listItem.classList.add('no-disponible');
    }

    listaMenu.appendChild(listItem);
});


function ListaMenu() {
    return (
        <div>
            <li>
                <ul></ul>
                <ul></ul>
                <ul></ul>
            </li>
        </div>
    )
}

export default ListaMenu;


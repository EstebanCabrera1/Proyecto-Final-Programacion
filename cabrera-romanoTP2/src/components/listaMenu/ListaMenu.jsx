import React from 'react';
import './listaMenu.css'


    function ListaMenu({menuItems}) {
        return (
            <div className='cont_burgues'>
                <ul className='lista_burgues'>
                    {menuItems.map((item) => (
                        item.disponible ? (
                            <li className='item_burgues'>
                                <img className='item_burgues_img' src={item.img} alt="" width={'300px'} height={'300px'}/>
                                <p>{item.nombre}</p>
                            </li>
                        ) : null
                    ))}
                </ul>
            </div >
        )
    
}

export default ListaMenu;
 
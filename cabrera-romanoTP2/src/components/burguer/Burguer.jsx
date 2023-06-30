import React from 'react'
import Header from '../header/Header'
import ListaMenu from '../listaMenu/ListaMenu'
import Footer from '../footer/Footer'

function Burguer() {

    const menuItems = [
        { img: 'Crispy Turbo Bacon.png', nombre: 'Crispy Turbo Bacon', disponible: true },
        { img: 'MegaDibu.png', nombre: 'Mega Dibu', disponible: true },
        { img: 'Mega Power Bacon.png', nombre: 'Mega Power Bacon', disponible: true },
        { img: 'Mega Cuarto Deluxe.png', nombre: 'Mega Cuarto Deluxe', disponible: true },
        { img: 'Gran Tasty Doble.png', nombre: 'Gran Tasty Doble', disponible: false },
        { img: 'Clasica.png', nombre: 'Clásica', disponible: true },
    ]

    return (
        <div className='cont_burger'>
            <div className='he'>
                <Header />
            </div>
            <div className='co'>
                <ListaMenu menuItems={menuItems}/>
            </div>
            <div className='fo'>
                <Footer />
            </div>
        </div>

    )
}

export default Burguer
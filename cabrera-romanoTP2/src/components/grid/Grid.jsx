import Slider from '../carrousel/Slider';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import ButtonMenu from '../menu/button_menu/ButtonMenu';
import './grid.css';
import { useEffect } from 'react';


function Grid() {
    const sliderImagenes=[
        'Bebida.png',
        'comida rapida.png',
        'Farmacia.png',
        'helados.png',
        'Mensajeria.png',
      ];
      useEffect(() => {
        document.title = `FastDelivery`;
      });
    return (
        <div className="content">
            <div className="header border">
                <Header/>
            </div>
            <div className='menu border'>
                <ButtonMenu/>
            </div>
            <div className='contenido border'>
                <Slider imagenes={sliderImagenes}/>
            </div>
            <div className='footer border'>
                <Footer/>
            </div>
        </div>
    )
}

export default Grid;


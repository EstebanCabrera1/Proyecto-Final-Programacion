import React from 'react'
import './contactos.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'

export default function Contactos(props) {
  return (
    <div className='cont_contactos'>
      <div className='h'>
        <Header />
      </div>
      <div className='c'>
        <div className='contactCard'>
          <div className="cardImg ">
            <img className='card_Img' src='Makima.png' alt="userImagen" />
          </div>
          <div className="lower_container">
            <h1 className='txt'>Cabrera</h1>
            <h3 className='txt'>Esteban</h3>
            <p className='txt'>esteban@gmail.com</p>
            <p className='txt'>319447503</p>
          </div>
        </div>
      </div>
      <div className='f'>
        <Footer />
      </div >
    </div>
  )
}
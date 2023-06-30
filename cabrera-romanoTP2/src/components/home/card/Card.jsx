import card from './card.css'

function Card() {
    return (
        <div className="card">
            <div className='superCard'>
                <img src="Super.png" alt="" />
                <h2 className="textos">Supermecados</h2>
            </div>
            <div className="bebida">
               <img src="Bebida.png" alt="" />
                <h2 className="textos">Bebidas</h2>
            </div>
            <div className="comida">
                <img src="comida rapida.png" alt="" />
                <h2 className="textos">Comida Rápida</h2>
            </div>
            <div className="farmacia">
                <img src="Farmacia.png" alt="" />
                <h2 className="textos">Farmacia</h2>
            </div>
            <div className="helados">
                <img src="helados.png" alt="" />
                <h2 className="textos">Helados</h2>
            </div>
            <div className="mensajeria">
                <img src="Mensajeria.png" alt="" />
                <h2 className="textos">Mensajería</h2>
            </div>
        </div>
    )
}
    
export default Card;
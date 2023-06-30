import button_menu from './buttonMenu.css'

function ButtonMenu(){

    return(
        <>
        <div className='iconoPopu'>
            <button className='btn_Popu'>
                <img className='btnImg' src="1.png" alt="" />
                <p>Burgas</p>
            </button>
            <button className='btn_Popu'>
                <img className='btnImg' src="2.png" alt="" />
                <p>Pizza</p>
            </button>
            <button className='btn_Popu'>
                <img className='btnImg' src="3.png" alt="" />
                <p>Chegus</p>
            </button>
            <button className='btn_Popu'>
                <img className='btnImg' src="4.png" alt="" />
                <p>Bebidas</p>
            </button>
        </div>

    </>
    )
}

export default ButtonMenu;
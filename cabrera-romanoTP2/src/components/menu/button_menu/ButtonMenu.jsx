import button_menu from './buttonMenu.css'
import { Link } from 'react-router-dom';

function ButtonMenu() {

    return (
        <>
            <div className='iconoPopu'>
                <button className='btn_Popu'>
                    <Link to='/burguer'>
                        <img className='btnImg' src="1.png" alt="" />
                    </Link>
                    <p>Burguer</p>
                </button>
                <button className='btn_Popu'>
                    <img className='btnImg' src="2.png" alt="" />
                    <p>Pizzita</p>
                </button>
                <button className='btn_Popu'>
                    <img className='btnImg' src="3.png" alt="" />
                    <p>Chegus</p>
                </button>
                <button className='btn_Popu'>
                    <Link to='/axios'>
                        <img className='btnImg' src="4.png" alt="" />
                    </Link>
                    <p>Pastas</p>
                </button>
            </div>

        </>
    )
}

export default ButtonMenu;
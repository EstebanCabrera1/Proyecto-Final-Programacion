import React from 'react';
import { Link } from 'react-router-dom';
import './login-register.css'

function PagLogin() {
    const log = () => {
        let user = document.getElementById("usuar").value;
        let pass = document.getElementById("passw").value;
        if (user != "" && pass != "") {

            localStorage.setItem("usuario", user);
            localStorage.setItem("contraseña", pass);
            alert("Usuario Correcto")
         
        } else {
            window.location.reload();
            alert("Usuario Incorrecto");
            window.location.reload();
        }
    }
    return (
        <>
            <div className='content_box'>
                <div className='caja'>

                    <h1 className='txt_log'>Login</h1>
                    <form id='formulario'>
                        <div className='content__main'>
                            <div className='content__main_inp'>
                                <input id='usuar' className='box_txt' type='text' placeholder='Usuario' />
                            </div>
                            <div className='content__main_inp'>
                                <input id='passw' className='box_txt' type='password' placeholder='Contraseña' />
                            </div>
                        </div>
                        <div className=''>
                            <div className='contenedor_btn'>
                                <Link to="/" className='btn_login'>
                                    <button className='btn_login' onClick={log}>
                                        Iniciar Sesión
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </form>
                    <div className='txt_reg'>
                        <p>No tienes cuenta?</p>
                        <Link to='/register'>
                            <p>Registrarse</p>
                        </Link>
                    </div>
                </div>

            </div>

        </>
    );
}

export default PagLogin;
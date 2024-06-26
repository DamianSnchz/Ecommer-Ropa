import '../css/header.css';
import React from "react";
import { useCartContext } from '../context/context';


function Header() {

    const { textInput, openCart, setOpenCart, carrito, hambur, setHambur } = useCartContext();

    return (
        <>
            <header>
                <nav>
                    <div className="hamburguesa" onClick={() => setHambur(!hambur)}>
                        <i className="fa-solid fa-bars fa-lg"></i>
                    </div>
                    <div className={`${hambur ? `open` : `off`}`}>
                        <div className='close'>
                            <button onClick={() => setHambur(!hambur)} type="button" className="btn-close" aria-label="Close"></button>
                        </div>
                        <ul>
                            <li><a href="#">inicio</a></li>
                            <li><a href="#">productos</a></li>
                            <li><a href="#">contactos</a></li>
                            <li><a href="#">comentarios</a></li>
                        </ul>
                    </div>
                    <div className="logo">
                        <i className="fa-brands fa-react fa-lg"></i>
                    </div>
                    <div className='nav-query'>
                        <ul>
                            <li><a href="#">inicio</a></li>
                            <li><a href="#">productos</a></li>
                            <li><a href="#">contactos</a></li>
                        </ul>
                    </div>
                    <div className="nav-carrito" onClick={() => setOpenCart(!openCart)}>
                        <i className="fa-solid fa-cart-shopping fa-lg"></i>
                        <div className='cont-carrito'><span>{carrito.length}</span></div>
                    </div>
                </nav>
                <div className="buscador">
                    <div >
                        <input type="text" name="buscar" placeholder="Buscar" onChange={textInput} />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
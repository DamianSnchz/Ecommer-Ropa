import '../css/view.css';
import React, { useState } from 'react';
import { useCartContext } from "../context/context.jsx"

function View() {

    // capturador de cantidad de vista previa View 
    const [cant, setCant] = useState(0);
    function cantidad(ev) {
        setCant(ev);
    }

    const { agregar, setVista, vista, activ, setActiv } = useCartContext();



    return (
        <div className={`container ${activ ? `` : `off`}`}>
            {vista.map((element, index) => {
                return (
                    <div className='vista' key={index}>
                        <div className="close">
                            <a onClick={() => { setActiv(!activ); setVista([]) }}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                        {/*seccion de imagen*/}
                        <div className="view-container-img ">
                            <div className="view-card-img">
                                <img src={element.img} alt="img" />
                            </div>
                        </div>
                        {/*seccion de información del producto */}
                        <div className='info-product'>
                            <div className="view-card-container-title">
                                <span className="view-title">
                                    <h1>
                                        {element.title}
                                    </h1>
                                </span>
                                <div className="price-compra">
                                    <span>${element.price}</span>
                                </div>
                            </div>
                            {/*seccion para seleccionar color*/}
                            <div className="view-container-color">
                                <h2 className='view-subtitle'>
                                    Color:
                                </h2>
                                <div className='color-compra'>
                                    <div className="color-compra-select" style={{ background: 'blue' }}>
                                    </div>
                                    <div className="color-compra-select" style={{ background: 'red' }}>
                                    </div>
                                    <div className="color-compra-select" style={{ background: 'green' }}>
                                    </div>
                                    <div className="color-compra-select" style={{ background: 'yellow' }}>
                                    </div>
                                </div>
                            </div>
                            {/*seccion para seleccionar el talle */}
                            <div className="view-container-talle">
                                <h2 className='view-subtitle'>
                                    Talle:
                                </h2>
                                <div className='talle'>
                                    <select class="form-select form-select-sm" aria-label="Small select example">
                                        <option selected></option>
                                        <option value="1">S</option>
                                        <option value="2">M</option>
                                        <option value="3">L</option>
                                    </select>
                                </div>
                            </div>
                            {/*seccion de compra*/}
                            <div className="compra-container">
                                <h2 className='view-subtitle col-2'>
                                    Cantidad:
                                </h2>
                                <input type="number" defaultValue={1} onChange={(ev) => cantidad(parseInt(ev.target.value))} />
                            </div>
                            {/*añadir al carrito*/}
                            <div className='carrito-agregar'>
                                <button type="button" className="btn btn-primary" onClick={() => { agregar(element, cant); }}>agregar carrito</button>
                            </div>
                            {/*informacion de envio gratis*/}
                            <div className='view-container-info-envio'>
                                <span className='info-envio-icono'>
                                    <i className="fa-solid fa-cart-shopping fa-lg"></i>
                                </span>
                                <span className='info-envio'>
                                    Envio gratis a partir de $5000
                                </span>
                            </div>
                            {/*informacion del producto*/}
                            <div className="div view-container-info">
                                <h2 className="view-subtitle">
                                    Información general
                                </h2>
                               <h3 className="info-producto">*Nombre: <span>{element.title}</span></h3>
                                    <h3 className="info-producto">*Tipo: <span>{element.type}</span></h3>
                                    <h3 className="info-producto">*Ancho: <span>{element.ancho}</span></h3>
                                    <h3 className="info-producto">*Alto: <span>{element.alto}</span></h3>
                                    <h3 className="info-producto">*Peso: <span>{element.peso}</span></h3>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}


export default View;
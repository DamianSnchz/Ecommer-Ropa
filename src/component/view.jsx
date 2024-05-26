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
                                <div className="title">
                                    <h6>
                                        {element.title}
                                    </h6>
                                </div>
                                <div className="price-compra">
                                    <span>${element.price}</span>
                                </div>
                            </div>
                            <div className='text-title mb-2'>
                                Talle:
                            </div>
                            {/*seccion para seleccionar el talle */}
                            <div className='talle'>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" value="option1" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">M</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" value="option1" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">L</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" value="option1" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">XL</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" value="option1" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">XXL</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" value="option1" disabled />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">XXL</label>
                                </div>
                            </div>
                            <div className='text-title'>
                                Color:
                            </div>
                            {/*seccion para seleccionar color*/}
                            <div className='talle color-compra'>
                                <div className="color-compra-select" style={{ background: 'blue' }}>
                                </div>
                                <div className="color-compra-select" style={{ background: 'red' }}>
                                </div>
                                <div className="color-compra-select" style={{ background: 'green' }}>
                                </div>
                                <div className="color-compra-select" style={{ background: 'yellow' }}>
                                </div>
                            </div>
                            {/*seccion de compra*/}
                            <div className="compra-container">
                                <div className='cantidad'>
                                    Cantidad:
                                    <input type="number" defaultValue={1} onChange={(ev) => cantidad(parseInt(ev.target.value))} />
                                </div>
                                <div className='price-subtotal'>
                                    Subtotal:
                                    <span>$22222</span>
                                </div>
                            </div>
                            {/*añadir al carrito*/}
                            <div className='carrito-agregar col-12'>
                                <button type="button" className="btn btn-primary col-12" onClick={() => { agregar(element, cant); }}>agregar</button>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}


export default View;
import React from 'react';
import View from "./view.jsx";
import '../css/product.css';
import { useCartContext } from "../context/context.jsx"



function Product() {

    const { activ, setActiv, datos, vista, setVista } = useCartContext();


    return (
        <>
            <section>
                {/*seccion de carrusel*/}
                <div className="carrousel-container">
                    <div id="carouselExampleCaptions" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="../img/ff.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="../img/th.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="../img/th.png" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                {/*seccion de tarjetas de productos */}
                <div className="product-container mt-3 mb-3">
                    <ul>

                        {datos.map((element, index) => {
                            return (
                                <li className='product' key={index} onClick={() => { setVista([...vista, element]); setActiv(!activ); }}>
                                    <div className="col" >
                                        <div className="card-img">
                                            <img src={element.img} alt="" />
                                        </div>
                                        <div className="card-container-info">
                                            <h2 className="title">
                                                {element.title}
                                            </h2>
                                            <div className="descuento">
                                                <span className="descuento-msj">Desde  </span>
                                                <span className="descuento-price">${element.descuento}</span>
                                            </div>
                                            <div className="price-carrito-container">
                                                <span className="price">
                                                    ${element.price}
                                                </span>
                                            </div>
                                            <span className="descuento-porcentaje">
                                                %50 OFF
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
            <View />
        </>
    );
}

export default Product;
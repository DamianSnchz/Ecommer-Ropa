import React from 'react';
import View from "./view.jsx";
import '../css/product.css';
import {useCartContext} from "../context/context.jsx"



function Product(){

const {activ, setActiv,datos,vista, setVista, textInput} = useCartContext();


	return(
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
                            <img src="../img/ff.png" className="d-block w-100" alt="..."/>
                         </div>
                         <div className="carousel-item">
                            <img src="../img/th.png" className="d-block w-100" alt="..."/>
                         </div>
                         <div className="carousel-item">
                           <img src="../img/th.png" className="d-block w-100" alt="..."/>
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
              {/*seccion de busqueda y filtrado*/}
              <div className="buscador mb-3">
                 <input className="col-6" type="text" name="buscar" placeholder="Buscar" onChange={textInput}/>
                 <select className="col-6" name="filtrar" onChange={textInput}>
                     <option>Filtrar</option>
                     <option value="calzado">Calzados</option>
                     <option value="pantalon">Pantalones</option>
                     <option value="remera">Remeras</option>                   
                 </select>
              </div>
              {/*seccion de tarjetas de productos */}
              <div className="container text-center mb-3">
                 <div className=' row row-cols-2'>
                    
                    {datos.map((element, index)=>{
                        return(
                            <div className='product-container' key={index}>
                                <div className="col" >
                                    <div className="card-img">              
                                       <img src={element.img} alt="" />
                                    </div>
                                    <div className="card-container-title">
                                        <div className="title">
                                            <h6>
                                               {element.title}
                                            </h6>
                                        </div>
                                        <div className="price-carrito-container">
                                            <div className="price ">
                                               <span>{element.price}</span>
                                            </div>
                                        </div>
                                        <div className="col-12" >
                                            <button href='' onClick={()=>{setVista([...vista,element]);setActiv(!activ);}} className="btn col-12 btn-dark">Agregar Carrito</button>
                                        </div>
                                        <View/>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                  </div>
              </div>
           </section>
        </>
		);
}

export default Product;
import '../css/carrito.css';
import {useState} from "react";
import { useCartContext } from '../context/context';


function Carrito ({cant}){
 
const {carrito, setCarrito, sum, completDelet, openCart, setOpenCart} = useCartContext();



let acumulador = sum();

 

//funcion para eliminar el producto del carrito
 function eliminarProducto(ev){
    let result = carrito.filter(item => item.id !== ev.id)
    setCarrito(result);
}

function modificarCant(ev,element){
    let nuevaCantidad;
    // selecciono el objeto con la cantidad anterior
    let objeto = carrito.find(item=>item.id === element.id)
    // modifico el valor anterior con el nuevo valor
    objeto.cantidad = ev;
    // actualizo el objeto
    nuevaCantidad = [...carrito]
    // agrego el nuevo objeto al carrito
    setCarrito(nuevaCantidad)
    
}


    return(
         <div className={` ${openCart?carrito.length !== 0?`carrito`:`carrito-alert`:`off`}`}>
         	<div className='carrito-option'>
              <div className="back">
                  <a onClick={()=>{setOpenCart(!openCart);}}><i className="fa-solid fa-chevron-left"></i></a>
               </div>
               <div className="carrito-vaciar">
                  <a onClick={()=>{completDelet()}}><i className="fa-sharp fa-light fa-cart-xmark"></i></a>
               </div>     
            </div>
            {/*Si el carrito no es esta vacio lo muestra sino mostrara un msj*/}
            {carrito.length !== 0? 
               carrito.map((element)=>{
                {/*Mostrar los productos*/}
                return(
                    <div className="carrito-container" key={element.id}>
                       <div className="carrito-container-img">
                           <img src={element.img} alt="img"/>
                       </div>
                       <div className="carrito-container-compra">
                           <div className="carrito-text-delete mb-4">
                               <div className="carrito-text">
                                   <h3>{element.title}(detalles)</h3>
                               </div>
                               {/*eliminar un producto*/}
                               <div className="carrito-delete" onClick={()=> eliminarProducto(element)}>
                                   <i className="fa-solid fa-trash fa-sm"></i>
                               </div>
                           </div>
                           <div className="carrito-cant-price">
                               {/*modificar cantidad desde el carrito*/}
                               <div className="carrito-cant">
                                   <input type="number" required placeholder={element.cantidad} onChange={(ev)=>modificarCant(parseInt(ev.target.value,element))}/>
                               </div>
                               {/*mostrar precio del producto dependiento la cantidad*/}
                               <div className="carrito-price">
                                   <span>${element.price * element.cantidad}</span>
                               </div>
                           </div>
                       </div>
                   </div>
                )}):<div className="alert alert-warning" role="alert">
                        El carrito esta vacio, <b>agregue productos</b>
                    </div>
                   
           }
           {/*si el carrito no esta vacio mostrara sino no mostrara nada*/}
           {carrito.length!==0?
             <div className='container'>
                {/*mostrar el subTotal de todos los productos agregados*/}
                 <div className='subTotal mb-3 mt-4'>
                     <h5>Subtotal (sin envío): ${acumulador}</h5>
                 </div>
                 <div className='costo-envio mb-4'>
                        <div className='icon-envio '>
                            <div className='icon-text-envio-container'>
                                <div className='icon-camion'>
                                    <span><i className="fa-solid fa-truck fa-md"></i></span>
                                </div>
                                <div className='text-envio'>
                                    <h5>Envio gratis a partir de $5000</h5>
                                </div>
                            </div>
                            {/*Para informar que el envio es gratis*/}
                            {acumulador >= 5000?
                            <div className="alert alert-success mb-1" role="alert">
                               El envio es gratis
                            </div>:""}
                        </div>
                        {/*seccion de compra*/}
                        <select className='select-envio mb-2'>
                            <option selected>Enviar</option>
                            <option value="1">Sucursal</option>
                            <option value="2">Domicilio</option>                          
                        </select>                        
                        <div className='calcular-envio'>
                            <div className='codigo-postal col'>
                                <input type="number" placeholder='Tu codigo postal'/>
                            </div>
                            <div className='price-envio col'>
                                <span>$43434</span>
                            </div>
                        </div>
                    </div>
                    {/*Para mostrar el total con el envio en caso de que no sea gratis (Número improvisado)*/}
                    <div className='total'>
                        <h5>Total: ${acumulador >= 5000? acumulador:acumulador+45545}</h5>
                    </div>
                    {/*seccion de formas de pago*/}
                        <div className='medio-pago'>
                           <h4>Medios pagos</h4>
                        <div className='tarjetas'>
                            <div className='img-pago'>
                                mercado-pago
                            </div>
                            <div className='img-pago'>
                                uala
                            </div>
                            <div className='img-pago'>
                                brubanck
                            </div>
                            <div className='img-pago'>
                                BNA
                            </div>
                            <div className='img-pago'>
                                rapi-pago
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        {/*Botón de compra*/}
                        <div className="col-12 pb-3" >
                            <button className="btn col-12 btn-dark">Comprar</button>
                        </div>
                    </div>
            </div>:"" 
           }
        </div> 
		)
}



export default Carrito;
import'../css/view.css';
import'../css/compra.css';

function ViewCarrito(){
          return (
                    <div className='container-pago'>
                        <div className='medio-pago'>
                           <h6>Medios pagos</h6>
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
                    <div className='costo-envio mb-4'>
                        <div className='icon-envio'>
                            <div className='icon-camion'>
                                <span><i class="fa-solid fa-truck fa-md"></i></span>
                            </div>
                            <h8>Envio gratis a partir de $5000</h8>
                        </div>
                        <div className='calcular-envio'>
                            <div className='codigo-postal col'>
                                <input type="number" placeholder='Tu codigo postal'/>
                            </div>
                            <div className='price-envio col'>
                                <span>$43434</span>
                            </div>
                        </div>
                    </div>
                    <div className='total'>
                        <span>Total:</span>
                    </div>
                    <div className='row'>
                        <div className="col-12" >
                            <button className="btn col-12 btn-dark mt-4">Comprar</button>
                        </div>
                    </div>
                </div>  
        )
}

export default ViewCarrito;
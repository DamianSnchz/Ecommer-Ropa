import '../css/comentary.css';

function Comentary(){
	return(
           <section>
           	  <div className="container">
           	  	 <div className='comentary-container'>
                    <div className="row">
                        <div className="comentary-usuario col-6">
                            <h4>Nombre de usuario</h4>
                            <p>correo-electronico</p>
                        </div>
                        <div className="comentary-perfil col-6">
                           <div className="comentary-img">
                                <img src="" alt=""/>
                            </div>
                        </div>
                        <div className="comentary">
                           <p>"Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Obcaecati atque, minus praesentium et animi. Necessitatibus exercitationem id consectetur saepe ipsa explicabo fugit, vel assumenda ullam officia eaque, fuga eum, odio!"</p>
                        </div>
                    </div> 
                 </div>
           	  </div>
           </section>
  );
}

export default Comentary;
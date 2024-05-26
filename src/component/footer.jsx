import '../css/footer.css';

function Footer(){
	return(
         <footer>
         	<div className="container">
         		<div className="contacto col-12">
         			<h6 className='mb-4'>contactos</h6>
         			<ul>
         				<li className='mb-3'>
         				   <i className="fa-solid fa-phone fa-lg"></i>
         				   <a href='#'>: +54386787</a>
         				</li>
         				<li className=''>
         				   <i className="fa-solid fa-envelope fa-lg"></i>
         				   <a href='#'>: tienda_online444@gmail.com</a>
         				</li>
         			</ul>
         		</div>
         		<div className='redes-container'>
         			<div className='title-h6'>
         				<h6>Redes Sociales</h6>
         			</div>
         			<div className="redes mb-4">
         			    <a href='#'>
         			       <i className="fa-brands fa-facebook fa-xl fa-lg"></i>
         			    </a>
         			    <a href='#'>
         			       <i className="fa-brands fa-instagram fa-xl"></i>
         			    </a>
         			    <a href='#'>
         			       <i className="fa-brands fa-tiktok fa-xl"></i>
         			    </a>
         		    </div>
         		</div>
         		
         	</div>
         	<p className='copy-right'>&copyright tienda_online todos los derechos reservados
         	creado por damianSanchez contacto <b>343434343</b></p>
         </footer>
		);
}

export default Footer;
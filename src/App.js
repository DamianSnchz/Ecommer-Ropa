import Header from "./component/header.jsx";
import Product from "./component/product.jsx";
import Footer from "./component/footer.jsx";
import Carrito from "./component/carrito.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContextProvider from "./context/context.jsx";



function App() {

 return(
    <>
      <BrowserRouter>
         <ContextProvider>
            <Routes>
               <Route path='/' element={
                  <>
                      <Header/>
                      <Product/>
                      <Carrito/>
                  </>
                  }/>
            </Routes>
                <Footer/>
         </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

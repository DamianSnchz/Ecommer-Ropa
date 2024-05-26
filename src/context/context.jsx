import React, { useState, useContext, useEffect } from "react"

//creo el contexto
const Context = React.createContext([]);
// mediante "useCartContext" puedo hacer uso de mi contexto
export const useCartContext = () => useContext(Context)

//Proveedor de datos y funciones
function ContextProvider({ children }) {
    // useState:
    //varible para mantener almacenado los productos sin aplicar modificaciones
    const [producto, setProducto] = useState([]);
    // array para guardar el objeto de los productos buscados o filtrados
    //para ser mostrados 
    const [datos, setDatos] = useState([]);
    // almacena los productos buscados o filtrados, es utilizado en buscarFiltrar()
    //luego su valor pasara a setDatos() para ser mostrados
    const [buscar, setBuscar] = useState([]);
    // array carrito
    const [carrito, setCarrito] = useState([]);
    // abrir y cerrar las vista de carrito
    const [openCart, setOpenCart] = useState(false);
    // mostrar menu de navegacion mobile
    const [hambur, setHambur] = useState(false)
    // mostrar vista de compra del producto
    const [activ, setActiv] = useState(false);
    // objeto de información para mostrar el producto en la vista de compra
    const [vista, setVista] = useState([]);

    // -----------------------------------------------------------------------------------

    // funciones:
    useEffect(() => {
        // ejecutar funcion de obtencion de datos
        obtenerDate();
    }, [])

    // funcion de busqueda filtrado
    const buscarFiltrar = (ev) => {
        //filter para obtener un array nuevo con los productos buscados o filtrados
        let result = buscar.filter((element) => {
            //primera condición: selecciono en "title" me aseguro que sea un string con "toString()" convierto el string en minuscula
            //toLowerCase() luego con includes() compruebo que el String ingresado existe en el array (esta primera condición es aplicada para la busqueda)
            //Segunda condición: cumple con la misma lógica pero con el type (esta condición se aplica al filtrado) 
            if (element.title.toString().toLowerCase().includes(ev.toLowerCase()) || element.type.toString().toLowerCase().includes(ev.toLowerCase())) {
                return element;
            }
        });
        setDatos(result);
    }
    // funcion de busqueda recive una cadena del input o un valor del selection
    const textInput = (ev) => {
        //si ese distinto de filtrado realizara la busqueda o filtrado 
        if (ev.target.value != "filtrar") {
            buscarFiltrar(ev.target.value);
        } else {
            //asigno los datos de "producto" a setDato() para vuelva a mostrar los 
            //productos como al principio
            setDatos(producto);
        }

    }

    // funcion para obtener los datos de un JSON
    async function obtenerDate() {
        // buscar el JSON
        const response = await fetch('js/open.json');
        // convertir la peticion en objeto
        const objeto = await response.json();
        // guardar los datos obtenidos en mis variables de trabajo 
        //setDatos y setBuscar los utilizo para hacer las busquedas y filtrados
        setDatos(objeto);
        setBuscar(objeto);
        //setProducto lo utilizo para mantener los valor almacenados sin realizar modificaciones
        setProducto(objeto);
    }
    // funcion para agregar los productos al carrito "element" representa al producto y "x" a la cantidad de productos
    const agregar = (element, x) => {
        let newCarrito;
        //funcion find() me devuelve buscado
        let product = carrito.find(product => product.id === element.id);
        //si el producto ya existe en el carrito incrementara su cantidad 
        if (product) {
            //aumento la cantidad
            product.cantidad += x;
            //añado el objeto modificado al newObjeto por dispercion [...carrito]
            newCarrito = [...carrito];
        } else {
            //si el producto no existe añado el atributo "cantidad" con el valor de "x"
            product = { ...element, cantidad: x };
            //añado el objeto modificado al newObjeto por dispercion [...carrito]
            newCarrito = [...carrito, product];
        }
        //añado el array modificado al carrito para que sean mostrados
        setCarrito(newCarrito);

    }

    // function para calcular el subtotal de los productos 
    const sum = () => {
        let rest = carrito.reduce(function (acumulado, element) { return acumulado + (element.price * element.cantidad) }, 0)
        return rest;
    }
    // funcion para vaciar carrito
    const vaciarCarrito = () => {
        setCarrito([]);
    }

    //paso los datos y funciones a mi Context antes definido en la linea: 4
    return (
        <Context.Provider value={{
            agregar, carrito, setCarrito, sum, openCart, setOpenCart, hambur, setHambur,
            // product:
            setActiv,
            activ,
            datos,
            vista,
            setVista,
            textInput
        }}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider;
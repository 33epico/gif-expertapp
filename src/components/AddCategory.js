import React, { useState } from 'react' //solo imporamos react si devolvemos jsx
import PropTypes from 'prop-types';

//contiene el componente del formulario
//Se pasa como props la referencia a la funcion setCategories por eso va entre {}
//el submit se hace con enter, no usamos boton, lo detectamos con onSubmit en el input
export const AddCategory = ({setCategories}) => {

    //esta const contiene el valor de la caja de texto
    const [inputValue, setInputValue] = useState('');//si no ponemos valor en () es undefined, podemos poner ''

    //Este metodo se llama desde el inputchange y detecta los cambios en el input para ir actualizando 
    //segun escribimos
    const handledInputChange = (e) => {
        setInputValue(e.target.value);
    }

    //detecta que pulsamos intro, el submit 
    const handledSubmit  = (e)=>{
        e.preventDefault();//con esto evitamos el refresh del navegador

        if (inputValue.trim().length > 2){
            //para mandar un valor al setCategories, obtenemos el valor implicito en el hook traido con la funcion
            //y añadimos el nuevo valor, cats es el valor actual del useState de GifExpertApp
            setCategories(cat => [inputValue,...cat]);
            setInputValue('');
        }

    }

    //Este fragmento es una caja de input, cuando escribes se actualiza el inputvalue
    //cuando envias controla con el handledSubmit y segun vas escribiendo obtiene los datos
    //con el handledInputChange
    return (
        <form onSubmit = {handledSubmit}>
        
            <input
                type="text"
                value = {inputValue}
                onChange = {handledInputChange}
            />
        </form>
    )

}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

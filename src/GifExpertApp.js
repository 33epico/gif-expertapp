import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

//base de la aplicación esta llama al resto de componentes
const GifExpertApp = () =>{

    //Usamos el hook useState para actualizar el estado a traves del componente AddCategory
    //le psamamos la REFERENCIA a la funcion que actualizará este array de categories
    const [categories, setCategories]= useState( ['one punch']);

    // const handledAdd = () =>{
    //     setCategories([...categories,'hola']);
    //     // setCategories(cat => [cat,...categories]);
    // }

    //NOTA: Cuando mandamos una funcion así {funcion} mandamos la referencia a la función

    //Devuelve un elemento tipo fragment con la aplicacion
    return (
        <>
            <h1>gifExpertApp</h1>
            {/* Añade el formulario y alimenta las categorias*/}
            <AddCategory setCategories = {setCategories} />
            <hr />
                {/* //ejemplo para devolver el indice  categories.map ((categorie, i) => { return <li>{i} Hola</li>}) */}
                {/* ejemplo con ol li categories.map (categorie =>  <li key ={categorie}>{categorie}</li>) */}
                
                {/* con el .map basicamente hacemos un for recorriendo todos los elementos */}
                {categories.map (category=> 
                    <GifGrid 
                        key = {category} 
                        category = {category}
                    />
                )}
        </>
    );
}

export default GifExpertApp;
import React from 'react'
import { useFetchGif } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


//Contiene el fragmento donde se dibujan los gifs, recibe la categoria como parametro
//y actualiza el fragmento con los nuevos gifs buscados
export const GifGrid = ({ category }) => {


    //Llamamos a nuestro hook personalizado y obtenemos el estado (cargando o cargado) y el conjunto
    //de gifs en el valor data. Lo desectructuramos con data:images
    const {data:images,loading} = useFetchGif(category);

    //Inicialmene este codigo estaba aqui, luego se movio a GifGridItem
    // useEffect(() => {
    //     getGifs(category).then(imgs => setImages(imgs));
    // },[category]);//si enviamos la lista de dependencias como [] solo se ejecutara una unica vez
   
  
    //Cntiene el contenedor de todos los gifs, pero cada uno de ellos se monta desde
    //GifGridItem
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {/* Operador ternario con dos && para evaluar si esta cargado el dato */}
            {loading&&<p className="animate__animated animate__flash">Cargando...</p>}

            { <div className="card-grid">
                    {
                        images.map ((imgs) => 
                            <GifGridItem 
                                key = {imgs.id}
                                {...imgs}
                                
                            /> )
                    }
            </div> }
        </>
    )
  
}

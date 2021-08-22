import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

//este hook carga los datos dentro del objeto state y una vez que se ha cargado indica que se ha cargado
export const useFetchGif = (category) => {
     const [state, setstate] = useState(
         {
             data: [],
             loading: true
         });

    //con este hooks hacemos que se ejecute la funcion solo una vez o
    //si tenemos puesto algo en [] cada vez que cambie ese array, si esta vacio solo lo hace una vez
     useEffect(() => {
        getGifs(category) //llama al helper que es una promesa para obtener los gifs
            .then(imgs => {
                
                    setstate(
                    {
                        data: imgs,
                        loading: false
                    })
            });
    },[category]);//si enviamos la lista de dependencias como [] solo se ejecutara una unica vez
   
  

  return state; //{ data: [],loading: true}
} 
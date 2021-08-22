import React from 'react'

//La pasamos el objeto que contiene la información de cada gif y ponemos los datos de las imagenes
export const GifGridItem = ({id,title,url}) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src= {url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

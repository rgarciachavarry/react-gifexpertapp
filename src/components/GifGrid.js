import React from 'react'; //, { useEffect, useState }
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {


    const {data:images, loading} = useFetchGifs(category);

    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages);
    // },[category]);  //Aqui quiere decir si cambia la categoría vuelve a ejecutar el UseEffect
    
    return (
        <>
        <h3> { category } </h3> 
        {/* {loading ? 'Cargando...' : 'Data cargada'} */}
        {loading && <p className='animate__animated animate__flash'>Loading</p>}

        <div className='card-grid'>
            { 
                images.map( (img) => (
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />
                  )
                )
            }
        
        </div>
        </>
    )
};
 
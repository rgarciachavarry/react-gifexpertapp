import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


// Functional Components
export const GifExpertApp = ( ) => {

    // const categories = ['One Punch', 'Samuri X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     //1era forma 
    //     // setCategories([...categories, 'Hunter' ]);

    //     //2da forma
    //     setCategories(cats => [...cats,'HunterXHunter']);
    // } 
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= {setCategories} />
            <hr />
            
            <ol>
                { 
                    categories.map( (category) => 
                        // return <li key={category}>{category}</li>;
                        <GifGrid key={category} 
                        category={ category }/>
                    )
                }
            </ol >
        </>
        );
} 

// export default GifExpertApp; 
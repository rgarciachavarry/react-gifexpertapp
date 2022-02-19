import React, { useState } from 'react';
import PropTypes from "prop-types"; 

export const AddCategory = ({setCategories}) => {
    // const [inputValue,setInputValue] = useState()  <-- de este modo es undefined y nos da un fatal error
    const [inputValue,setInputValue] = useState('')
    
    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit hecho');
        if (inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats]); 
            setInputValue('');
        }
        
    }

    return (
        <>
        <form onSubmit={ handleSubmit }>
            {/* <h1>{inputValue}</h1> */}
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            ></input>
        </form>
        </>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
} 

{/* <button onClick={ handleAdd }>Agregar</button> */}
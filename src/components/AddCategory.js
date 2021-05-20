import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValeu, setInputValeu] = useState('');

    const handleTinputChange = (e) => {
        setInputValeu(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();



        if (inputValeu.trim().length > 2) {

            setCategories(cats => [inputValeu, ...cats]);
            setInputValeu('');

        }


    }

    return (

        <
        form onSubmit = { handleSubmit } >
        <
        input type = "text"
        value = { inputValeu }
        onChange = {
            (handleTinputChange)
        }
        />     <
        /form>         
    )
}

AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired

}
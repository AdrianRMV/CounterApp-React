import PropTypes from "prop-types";
import { useState } from 'react';


const CounterApp = ({ value = 0 }) => {
    
    const [ counter,setCounter ] = useState( value ); // [valor, funcion]


    // handleAdd
    const handleAdd = () => {
        setCounter( counter + 1 )
        // setCounter( (c)=> c + 1);
    }

    const handleSub = () => {
        counter !== 0 ? setCounter( counter - 1) 
        : setCounter( value );
    }

    const handleReset = () => setCounter( value )

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleReset }> Reset </button>
            <button onClick={ handleSub }> -1 </button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;
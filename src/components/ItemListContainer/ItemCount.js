import React, { useState } from 'react';
import { Button } from 'reactstrap';

const ItemCount = ({ stock, handleLoad }) => {
    // pase el useState a let en vez de const para poder setearlo a cero en el Reset
    let [count, setCount] = useState(0);

    const handleAdd = () => {
        count < stock ? setCount(count + 1) : console.log("no hay mas, pipi, espera q vuelva a entrar")
    }

    const handleSubstract = () => {
        count > 0 ? setCount(count - 1) : console.log("si queres te vendemos ilusiones tambien");
    }

    const handleReset = () => {
        count !== 0 ? setCount(count = 0) : console.log("ya no tenes nada");
    }

    return (
        <div className='button-counter'>
            <div className='btn buttons'>
                <Button onClick={handleAdd}> + </Button>
                <h3> {count} </h3>
                <Button className='btn' onClick={handleSubstract}> - </Button>
            </div>
            <div>
                <Button className="btn btn-primary" disabled={count <= 0} onClick={() => handleLoad(count)}> Add </Button>
                <Button className="btn-danger" onClick={handleReset}> Clean </Button>
            </div>
        </div>
    )
}

export default ItemCount
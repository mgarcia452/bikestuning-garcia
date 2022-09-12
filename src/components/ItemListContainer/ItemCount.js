import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const ItemCount = ({ stock, addToCart}) => {
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
            <Button className='btn-info' disabled={stock <= 0} onClick={() => addToCart(count)}> Add to Cart </Button>
            <Button className="btn-danger" onClick={handleReset}> Reset </Button>
            <Link to={'/Cart'} onClick={handleAdd} className="btn btn-danger"> Finish </Link>
        </div>
    )
}

export default ItemCount
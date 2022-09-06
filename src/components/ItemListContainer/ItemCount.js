// import React, { useState } from 'react';
// import { Button } from 'reactstrap';

const ItemCount = ({ stock, addToCart }) => {
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
            <Button className='btn btn-primary' onClick={handleSubstract}> - </Button>
            <h3> {count} </h3>
            <Button onClick={handleAdd}> + </Button>
            <Button className='btn-info' disabled={stock <= 0} onClick={() => addToCart(count)}> Add </Button>
            <Button className="btn-danger" onClick={handleReset}> Reset</Button>
        </div>
    )
}

// export default ItemCount